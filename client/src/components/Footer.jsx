import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-60 mb-8 ml-10">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary-100">Blinkit</h3>
            <p className="text-gray-300 text-sm leading-6">
              Your one-stop destination for quality products delivered fast. Shop with confidence and enjoy seamless
              online shopping experience.
            </p>
            <div className="flex items-center gap-4 mt-6 text-xl">
              <a
                href="https://github.com/SaifUllah-Developer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-100 transition duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/saifullahdeveloper/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-100 transition duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-100 transition duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-primary-100">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="https://www.linkedin.com/in/saifullahdeveloper/"
                  className="text-gray-300 hover:text-primary-100 text-sm transition duration-300"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  to="https://github.com/SaifUllah-Developer"
                  className="text-gray-300 hover:text-primary-100 text-sm transition duration-300"
                >
                  Github
                </Link>
              </li>
              <li>
                <a
                  href="https://airbnb-portfolio-project-seven.vercel.app/"
                  className="text-gray-300 hover:text-primary-100 text-sm transition duration-300"
                >
                  Visit my airbnb clone
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-primary-100">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <p className="text-gray-300">
                  <span className="font-semibold">Email:</span>
                  <br />
                  <a href="mailto:contact@blinkit.com" className="hover:text-primary-100 transition">
                    saifisaifbangash143@gmail.com
                  </a>
                </p>
              </li>
              <li>
                <p className="text-gray-300">
                  <span className="font-semibold">Phone:</span>
                  <br />
                  <a href="tel:+92123456789" className="hover:text-primary-100 transition">
                    +92 (123) 456-7890
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Bottom Copyright */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} <span className="font-semibold text-primary-100">Blinkit</span>. All Rights Reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Developed by{" "}
              <a
                href="https://github.com/SaifUllah-Developer"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary-100 hover:underline"
              >
                Saif Ullah
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
