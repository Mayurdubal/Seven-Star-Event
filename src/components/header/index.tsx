/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./style.css";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <header>
        <Link href="/" className={pathname == "/" ? "active" : ""}>
          <Image
            src="/video/logo.png"
            width={100}
            height={100}
            alt="idealite logo"
          />
        </Link>
        <ul className="menu">
          <li>
            <Link href="/" className={pathname == "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link href="about" className={pathname == "/about" ? "active" : ""}>
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="customerFeedback"
              className={pathname == "/customerFeedback" ? "active" : ""}
            >
              Customer's Feedback
            </Link>
          </li>
          <li>
            <Link
              href="portfolio"
              className={pathname == "/portfolio" ? "active" : ""}
            >
              FAQ's
            </Link>
          </li>
          <li>
            <Link
              href="services"
              className={pathname == "/services" ? "active" : ""}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="contact"
              className={pathname == "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
        <span className="mobile-header">
          <Image
            src="/hamIcon.svg"
            width={40}
            height={40}
            alt="idealite logo"
            onClick={() => toggleDrawer()}
          />
        </span>
      </header>
      {isOpen && (
        <div className={`mobileMenu ${isOpen ? "activeMenu" : ""}`}>
          <ul>
            <li>
              <Link
                href="/"
                className={pathname == "/" ? "active" : ""}
                onClick={() => toggleDrawer()}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="about"
                className={pathname == "/about" ? "active" : ""}
                onClick={() => toggleDrawer()}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="customerFeedback"
                className={pathname == "/customerFeedback" ? "active" : ""}
                onClick={() => toggleDrawer()}
              >
                {" "}
                Customer's Feedback
              </Link>
            </li>
            <li>
              <Link
                href="portfolio"
                className={pathname == "/portfolio" ? "active" : ""}
                onClick={() => toggleDrawer()}
              >
                FAQ's
              </Link>
            </li>
            <li>
              <Link
                href="services"
                className={pathname == "/services" ? "active" : ""}
                onClick={() => toggleDrawer()}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="contact"
                className={pathname == "/contact" ? "active" : ""}
                onClick={() => toggleDrawer()}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
