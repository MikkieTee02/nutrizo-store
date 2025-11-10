import { addressDummyData } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const OrderSummaryContent = () => {

  const { currency, router, getCartCount, getCartAmount, getToken, user, cartItems, setCartItems, isSeller } = useAppContext()
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const [userAddresses, setUserAddresses] = useState([]);

  const fetchUserAddresses = async () => {
    try {
      const token = await  getToken()
      const {data} = await axios.get('/api/user/get-address', {headers: {Authorization: `Bearer ${token}`}})
      if (data.success) {
        setUserAddresses(data.addresses)
        if (data.addresses.length > 0) {
          setSelectedAddress(data.addresses[0])
        }
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
    setIsDropdownOpen(false);
  };

  const createPaymentIntent = async () => {
    try {
      const totalAmount = getCartAmount() + Math.floor(getCartAmount() * 0.02);
      const { data } = await axios.post('/api/stripe/create-payment-intent', {
        amount: totalAmount
      });
      setClientSecret(data.clientSecret);
    } catch (error) {
      toast.error('Failed to initialize payment');
    }
  };

  const handlePayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    if (!selectedAddress) {
      return toast.error('Please select an address');
    }

    let cartItemsArray = Object.keys(cartItems).map((key)=>({product:key, quantity:cartItems[key]}));
    cartItemsArray = cartItemsArray.filter(item=> item.quantity > 0);

    if (cartItemsArray.length === 0) {
      return toast.error('Cart is empty');
    }

    setIsProcessing(true);

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        }
      });

      if (error) {
        toast.error(error.message);
        setIsProcessing(false);
        return;
      }

      if (paymentIntent.status === 'succeeded') {
        // Payment successful, create order
        const token = await getToken();

        const {data} = await axios.post('/api/order/create', {
          address: selectedAddress._id,
          items: cartItemsArray,
          paymentIntentId: paymentIntent.id
        }, {
          headers: {Authorization: `Bearer ${token}`}
        });

        if (data.success) {
          toast.success('Order placed successfully!');
          setCartItems({});
          router.push('/order-placed');
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    if (user) {
       fetchUserAddresses();
    }
  }, [user]);

  useEffect(() => {
    if (getCartCount() > 0) {
      createPaymentIntent();
    }
  }, [cartItems]);

  return (
    <div className="w-full md:w-96 bg-gray-500/5 p-5">
      <h2 className="text-xl md:text-2xl font-medium text-gray-700">
        Order Summary
      </h2>
      <hr className="border-gray-500/30 my-5" />
      <div className="space-y-6">
        <div>
          <label className="text-base font-medium uppercase text-gray-600 block mb-2">
            Select Address
          </label>
          <div className="relative inline-block w-full text-sm border">
            <button
              className="peer w-full text-left px-4 pr-2 py-2 bg-white text-gray-700 focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>
                {selectedAddress
                  ? `${selectedAddress.fullName}, ${selectedAddress.area}, ${selectedAddress.city}, ${selectedAddress.state}`
                  : "Select Address"}
              </span>
              <svg className={`w-5 h-5 inline float-right transition-transform duration-200 ${isDropdownOpen ? "rotate-0" : "-rotate-90"}`}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6B7280"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <ul className="absolute w-full bg-white border shadow-md mt-1 z-10 py-1.5">
                {userAddresses.map((address, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-500/10 cursor-pointer"
                    onClick={() => handleAddressSelect(address)}
                  >
                    {address.fullName}, {address.area}, {address.city}, {address.state}
                  </li>
                ))}
                <li
                  onClick={() => router.push("/add-address")}
                  className="px-4 py-2 hover:bg-gray-500/10 cursor-pointer text-center"
                >
                  + Add New Address
                </li>
              </ul>
            )}
          </div>
        </div>

        <div>
          <label className="text-base font-medium uppercase text-gray-600 block mb-2">
            Promo Code
          </label>
          <div className="flex flex-col items-start gap-3">
            <input
              type="text"
              placeholder="Enter promo code"
              className="flex-grow w-full outline-none p-2.5 text-gray-600 border"
            />
            <button className="bg-accent text-white px-9 py-2 rounded-lg font-semibold hover:bg-accent-light">
               Apply
             </button>
          </div>
        </div>

        <div>
          <label className="text-base font-medium uppercase text-gray-600 block mb-2">
            Payment Information
          </label>
          <div className="border p-3 rounded-lg bg-gray-50">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            />
          </div>
        </div>

        <hr className="border-gray-500/30 my-5" />

        <div className="space-y-4">
          <div className="flex justify-between text-base font-medium">
            <p className="uppercase text-gray-600">Items {getCartCount()}</p>
            <p className="text-gray-800">{currency}{getCartAmount()}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Shipping Fee</p>
            <p className="font-medium text-gray-800">Free</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Tax (2%)</p>
            <p className="font-medium text-gray-800">{currency}{Math.floor(getCartAmount() * 0.02)}</p>
          </div>
          <div className="flex justify-between text-lg md:text-xl font-medium border-t pt-3">
            <p>Total</p>
            <p>{currency}{getCartAmount() + Math.floor(getCartAmount() * 0.02)}</p>
          </div>
        </div>
      </div>

      {isSeller ? (
        <div className="w-full bg-gray-200 text-gray-600 py-3 mt-5 rounded-lg font-semibold text-center">
          Sellers cannot place orders
        </div>
      ) : (
        <form onSubmit={handlePayment}>
          <button
            type="submit"
            disabled={!stripe || isProcessing || !clientSecret}
            className="w-full bg-accent text-white py-3 mt-5 rounded-lg font-semibold hover:bg-accent-light disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? 'Processing...' : `Pay ${currency}${getCartAmount() + Math.floor(getCartAmount() * 0.02)}`}
          </button>
        </form>
      )}
    </div>
  );
};

const OrderSummary = () => {
  return (
    <Elements stripe={stripePromise}>
      <OrderSummaryContent />
    </Elements>
  );
};

export default OrderSummary;