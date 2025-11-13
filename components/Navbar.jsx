"use client"
import React from "react";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon} from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {

  const { isSeller, router, user } = useAppContext();
  const {openSignIn} = useClerk()

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-28` py-3  text-text-primary bg-background">
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push('/')}
        src={assets.logo}
        alt="logo"
      />
      <div className="flex items-center gap-6 lg:gap-10 max-md:hidden">
        <Link href="/" className="hover:text-primary transition-colors duration-200 font-medium">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-primary transition-colors duration-200 font-medium">
          Shop
        </Link>
        <Link href="/about-us" className="hover:text-primary transition-colors duration-200 font-medium">
          About Us
        </Link>
        <Link href="/" className="hover:text-primary transition-colors duration-200 font-medium">
          Contact
        </Link>
    {isSeller && <button onClick={() => router.push('/seller')} className="text-sm border px-5 py-2 rounded-lg border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 font-semibold">Seller Dashboard</button>}

      </div>

      <ul className="hidden md:flex items-center gap-6">
        <Image className="w-5 h-5  cursor-pointer hover:scale-110 transition-transform duration-200" src={assets.search_icon} alt="search icon" />
        {user
        ? <>
          {!isSeller && (
            <div 
            className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              <Image src={assets.heart_icon} alt="heart icon" className="w-4 h-4" />
              Customer
            </div>
          )}
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action label="Cart" labelIcon={<CartIcon/>} onClick={()=> router.push('/cart')}/>
            </UserButton.MenuItems>

             <UserButton.MenuItems>
              <UserButton.Action label="My Orders" labelIcon={<BagIcon/>} onClick={()=> router.push('/my-orders')}/>
            </UserButton.MenuItems>
          </UserButton>
          </>

        :  <button onClick={openSignIn} className="flex items-center gap-3 hover:text-primary transition-colors duration-200 font-medium">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>}
      </ul>

      <div className="flex items-center md:hidden gap-3">
         {isSeller && <button onClick={() => router.push('/seller')} className="text-sm border px-5 py-2 rounded-lg border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 font-semibold">Seller Dashboard</button>}
         {user
        ? <>
          {!isSeller && (
            <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              <Image src={assets.heart_icon} alt="heart icon" className="w-4 h-4" />
              Customer
            </div>
          )}
          <UserButton>

             <UserButton.MenuItems>
              <UserButton.Action label="Home" labelIcon={<HomeIcon/>} onClick={()=> router.push('/')}/>
            </UserButton.MenuItems>

             <UserButton.MenuItems>
              <UserButton.Action label="Products" labelIcon={<BoxIcon/>} onClick={()=> router.push('/all-products')}/>
            </UserButton.MenuItems>

            <UserButton.MenuItems>
              <UserButton.Action label="Cart" labelIcon={<CartIcon/>} onClick={()=> router.push('/cart' )}/>
            </UserButton.MenuItems>

             <UserButton.MenuItems>
              <UserButton.Action label="My Orders" labelIcon={<BagIcon/>} onClick={()=> router.push('/my-orders')}/>
            </UserButton.MenuItems>
          </UserButton>
          </>

       : <button onClick={openSignIn} className="flex items-center gap-3 hover:text-primary transition-colors duration-200 font-medium">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>}
      </div>
    </nav>
  );
};

export default Navbar;