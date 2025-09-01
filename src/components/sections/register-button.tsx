import React from "react";

const RegisterButton = () => {
  return (
    <div className="flex justify-center w-full pt-12 pb-20">
      <div className="w-1/2">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSegAZYMLmUrysl29-M1xEpUAfsOTcicD-WKy4swdFyef7In4w/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center rounded-lg bg-primary px-12 py-4 text-base font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default RegisterButton;