import React from "react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white font-sans">
      {/* Top Divider */}
      <div className="h-[0.05rem] w-full bg-gold/30"></div>

      {/* Footer Content */}
      <div className="flex flex-wrap justify-between items-start mt-16 px-8 lg:px-20">
        {/* Logo/Name Section */}
        <div className="w-full lg:w-[29%] mb-6">
          <h1 className="text-4xl font-serif font-bold text-gold">SSP</h1>
          <p className="text-sm text-brass mt-2">Business Enthusiast</p>
        </div>

        {/* Navigation Links */}
        <div className="w-full lg:w-1/5 mb-6">
          <h2 className="font-semibold mb-12 text-brass">Navigation</h2>
          <ul className="space-y-6">
            <li><a href="/" className="hover:text-gold transition font-medium">Home</a></li>
            <li><a href="/results" className="hover:text-gold transition font-medium">Projects</a></li>
            <li><a href="/About" className="hover:text-gold transition font-medium">About Me</a></li>
            <li><a href="/contact" className="hover:text-gold transition font-medium">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="w-full lg:w-1/5 mb-6">
          <h2 className="font-semibold mb-12 text-brass">Resources</h2>
          <ul className="space-y-6">
            <li>
            <a
                href="https://docs.google.com/document/d/1JdslnupjredndZryqCRoIju7W0L15fjE/edit?usp=drivesdk&ouid=112376605198081550376&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition font-medium"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://github.com/yourusername"
                className="hover:text-gold transition font-medium"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/yourprofile"
                className="hover:text-gold transition font-medium"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter / Contact */}
        <div className="w-full lg:w-[30%]">
          <h2 className="font-semibold mb-12 text-brass">Stay Connected</h2>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full py-2 text-sm text-black bg-white border-b border-gold focus:outline-none focus:border-brass placeholder:text-gray-600"
            />
            <button className="ml-2 bg-gold text-charcoal px-4 py-2 font-semibold hover:bg-brass transition">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[0.08rem] mt-8 w-[90%] mx-auto bg-gold/30"></div>

      {/* Footer Bottom */}
      <p className="mt-6 text-center text-sm text-brass">
        © {new Date().getFullYear()} Sterling Strategy Partners. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
