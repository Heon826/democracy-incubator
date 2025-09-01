"use client";

import Link from "next/link";

export const FloatingRegisterButton = () => {
  return (
    <Link
      href="https://docs.google.com/forms/d/e/1FAIpQLSegAZYMLmUrysl29-M1xEpUAfsOTcicD-WKy4swdFyef7In4w/viewform?usp=sf_link"
      target="_blank"
      rel="noopener noreferrer"
      data-floating-register
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#E44A2C] hover:bg-[#d43c24] text-white font-semibold px-12 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 animate-slide-in-left w-1/2 text-center"
      style={{ fontFamily: 'var(--font-display)' }}
    >
      Register
    </Link>
  );
};