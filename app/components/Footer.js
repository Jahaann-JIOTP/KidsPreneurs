"use client"
import React from "react";

export default function Footer() {
  return (
    <>
      {/* <footer className="footer bg-black text-base-content p-10">
        <nav>
          <h3 className="font-title text-yellow-600 font-bold text-2xl hover:underline">SERVICES</h3>
          <a className="link link-hover text-white hover:text-yellow-600">
            Branding
          </a>
          <a className="link link-hover text-white hover:text-yellow-600">
            Design
          </a>
          <a className="link link-hover text-white hover:text-yellow-600">
            Marketing
          </a>
          <a className="link link-hover text-white hover:text-yellow-600">
            Advertisement
          </a>
        </nav>
        <nav>
          <h3 className="font-title text-yellow-600 font-bold text-2xl hover:underline">COMPANY</h3>
          <a className="link link-hover text-white hover:text-yellow-600">
            About us
          </a>
          <a className="link link-hover text-white hover:text-yellow-600">
            Contact
          </a>
          <a className="link link-hover text-white hover:text-yellow-600">
            Event
          </a>
          <a className="link link-hover text-white hover:text-yellow-600">
            Sponsorships
          </a>
        </nav>
        <nav>
          <h3 className="font-title text-yellow-600 font-bold text-2xl hover:underline">LEGAL</h3>
          <a className="link link-hover text-white hover:text-yellow-600">
            Terms of use
          </a>
          <a className="link link-hover text-white hover:text-yellow-600">
            Privacy policy
          </a>
          <a className="link link-hover text-white hover:text-yellow-600">
            Cookie policy
          </a>
        </nav>
      </footer> */}
      <footer className="footer flex flex-col md:flex-row justify-between items-center bg-black text-base-content border-base-300 border-t px-6 md:px-10 py-4">
        {/* Navigation Icons */}
        <nav className="flex justify-center md:justify-start mb-1 md:mb-0">
          <div className="flex space-x-3">
            <a href="#" aria-label="Twitter" className="p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-white hover:text-yellow-600">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-white hover:text-yellow-600">
                <path d="M22.225 0H1.771C.792 0 0 .774 0 1.731v20.535C0 23.228.792 24 1.771 24h20.451C23.206 24 24 23.228 24 22.266V1.731C24 .774 23.206 0 22.225 0zm-14.09 20.452H3.544V9.169h4.591v11.283zM5.834 7.432a2.664 2.664 0 110-5.328 2.664 2.664 0 010 5.328zm14.618 13.02h-4.59v-5.812c0-1.385-.028-3.166-1.928-3.166-1.93 0-2.227 1.508-2.227 3.064v5.914h-4.591V9.169h4.408v1.544h.063c.614-1.164 2.114-2.395 4.352-2.395 4.654 0 5.512 3.061 5.512 7.045v5.089z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-white hover:text-yellow-600">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
        {/* Copyright Text */}
        <aside className="text-center md:text-right mt-1 md:mt-0">
          <p className="font-bold text-white hover:text-yellow-600">
            Copyright © {new Date().getFullYear()} - All rights reserved
          </p>
        </aside>
      </footer>

    </>
  );
}
