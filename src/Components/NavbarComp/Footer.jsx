import React from "react";

const Footer = () => {
  return (
    <div>

      {/* Banner Section */}
      <div
        className="relative h-[350px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520975916090-3105956dac38')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-start px-20 text-white">
          <p className="text-sm uppercase">Need Help?</p>
          <h1 className="text-4xl font-bold mt-2">
            We are here to help
          </h1>

          <button className="mt-5 bg-white text-black px-6 py-2 rounded">
            Contact Us
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-10">

        {/* 4 Columns */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-10">

          {/* Contact */}
          <div>
            <h2 className="text-white font-semibold mb-4">Contact</h2>
            <p>+91 9876543210</p>
            <p>support@email.com</p>
            <p>Bangalore, India</p>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-white font-semibold mb-4">Company</h2>
            <p>About</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Press</p>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-white font-semibold mb-4">Support</h2>
            <p>Help Center</p>
            <p>Privacy Policy</p>
            <p>Terms</p>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-white font-semibold mb-4">Newsletter</h2>

            <div className="flex mt-2">
              <input
                type="email"
                placeholder="Enter email"
                className="px-3 py-2 w-full text-black"
              />
              <button className="bg-red-500 px-4 text-white">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p>© 2026 MyWebsite</p>
        </div>

      </footer>

    </div>
  );
};

export default Footer;