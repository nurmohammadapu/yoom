# Yoom – Video Calling App 🎥💬

**Yoom** is a modern video calling web application built with **Next.js**, **Clerk authentication**, and **Stream Video SDK**. It offers real-time video communication with scheduling, secure user management, and a sleek, accessible interface using **Tailwind CSS** and **Radix UI** components.

## 🌐 Live Demo

👉 [yoom-five-xi.vercel.app](https://yoom-five-xi.vercel.app/)

## 🛠️ Tech Stack

* **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
* **Auth**: Clerk for user authentication
* **Video Calls**: Stream Video React SDK
* **UI Components**: Radix UI + Tailwind Merge + Lucide Icons

## 🎯 Features

* 🔐 **Secure authentication** with Clerk (sign up, login, sessions)
* 🎥 **Real-time video calls** powered by Stream Video SDK
* 📅 **Meeting scheduling** with React Datepicker
* 🧭 **Clean routing and structure** with Next.js
* 🌈 **Polished UI/UX** using Tailwind CSS and Radix UI
* 🔔 Toast notifications and interactive dropdowns

## 📁 Project Structure

```
yoom/
├── components/         # Reusable UI components
├── app/                # App routing and pages (Next.js 14 app directory)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and helpers
├── styles/             # Global styles and Tailwind setup
├── types/              # TypeScript definitions
├── public/             # Static assets
└── .env.local          # Environment configuration (see below)
```

## 🔐 Environment Variables

Create a `.env.local` file in the root of your project with the following keys:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key
```

> ⚠️ Make sure to **never expose your secret keys** in the frontend. Only public keys go in `NEXT_PUBLIC_*` variables.

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/nurmohammadapu/yoom.git
cd yoom
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up `.env.local`

```env
# See above for required keys
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app locally.

## 🧪 Scripts

```bash
npm run dev     # Start dev server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Lint the code
```

## 🚀 Deployment

This project is deployed on **Vercel**. You can also deploy it to platforms like **Render**, **Netlify**, or your own server.
