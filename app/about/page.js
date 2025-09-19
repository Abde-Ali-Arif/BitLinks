import React from 'react'

const Page = () => {
  return (
    <main className="bg-purple-100 min-h-screen flex items-center justify-center p-8">
      <div className="max-w-3xl bg-white rounded-2xl shadow-lg p-10 text-center">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">About Us</h1>
        <p className="text-gray-700 leading-relaxed">
          Welcome to <span className="font-bold text-purple-600">BitLinks</span>, 
          your go-to solution for fast, secure, and hassle-free URL shortening. 
          We believe simplicity is the key, so our tool is designed to help you 
          shorten links without unnecessary sign-ups, trackers, or complexity.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Our mission is to provide the most <span className="font-semibold">reliable</span>, 
          <span className="font-semibold">privacy-friendly</span>, and 
          <span className="font-semibold">user-first</span> link shortener on the web.
        </p>
      </div>
    </main>
  );
}

export default Page
