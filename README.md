# Nutrizo - A modern eCommerce platform

Nutrizo is a full-stack **Next.js eCommerce application** built with modern technologies.
It provides a complete shopping experience with seller dashboards, product management, user authentication, and order processing.
This repo includes both frontend and backend – contributors can improve features, add new functionalities, enhance UI/UX, and more.

---

## Features

-   Built with **Next.js + Tailwind CSS + MongoDB**
-   User authentication with Clerk
-   Seller dashboard for product management
-   Shopping cart and order processing
-   Secure payments with Stripe
-   Product search and filtering
-   Responsive design
-   Reusable components
-   Image uploads with Cloudinary
-   Real-time notifications with Inngest
-   Open for contributions (features, UI/UX, backend improvements, etc.)

---

## Getting Started

1. Clone the repo

    ```bash
    git clone https://github.com/your-username/Nutrizo.git
    cd Nutrizo
    ```

2. Install dependencies

    ```bash
    npm install
    ```

3. Set up environment variables

    Create a `.env.local` file and add your configuration:

    ```env
    MONGODB_URI=your_mongodb_connection_string
    CLERK_SECRET_KEY=your_clerk_secret_key
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    INNGEST_SIGNING_KEY=your_inngest_signing_key
    STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
    ```

4. Run locally

    ```bash
    npm run dev
    ```

---

## Contributing

We welcome all kinds of contributions! You can:

- Add new features (payment integration, reviews, etc.)
- Improve backend APIs
- Create new pages and components
- Improve layouts and UI/UX
- Add animations and transitions
- Enhance responsiveness
- Refactor components and code
- Suggest new features and ideas
- Add themes or color variations
- Introduce accessibility improvements
- Add filtering/search features
- Improve documentation
- Fix bugs and issues

Check out [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

---

## License

This project is licensed under the **MIT License**.

---

## 🌟 Contributors

Thanks to everyone who contributes to **Nutrizo**!