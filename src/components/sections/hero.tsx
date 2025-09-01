"use client";

import Image from "next/image";

// A component for the rotating text circle element
const CircularText = () => {
  return (
    <div className="relative w-44 h-44">
      <svg
        className="w-full h-full animate-[spin_20s_linear_infinite]"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="circle"
            d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
          />
        </defs>
        <text fontSize="16" fill="#E44A2C" fontWeight="500" className="uppercase tracking-wide">
          <textPath href="#circle" startOffset="0%">
            LETS CHANGE THE WORLD TOGETHER 𑇐 EMPOWER THE YOUTH 𑇐
          </textPath>
        </text>
      </svg>
      {/* Center dot */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#E44A2C] rounded-full"></div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="bg-background text-foreground pt-[98px] pb-7">
      <div className="container mx-auto px-14">
        {/* Title Row */}
        <div className="grid grid-cols-3">
          <div className="col-start-2 col-span-2">
            <h1 className="font-display text-[72px] font-bold leading-tight tracking-[0.02em] text-foreground">
              ASIA-PACIFIC
              <br />
              DEMOCRACY
              <br />
              INCUBATOR
            </h1>
          </div>
        </div>

        {/* Content Row */}
        <div className="mt-16 grid grid-cols-3 gap-x-8 items-end">
          <div className="col-span-1">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0a81aefa-006b-45bc-86ef-4ca6a005b03e-democracyincubator-org/assets/images/main-circle-image-1.png?"
              alt="Conference image"
              width={390}
              height={390}
              className="rounded-full w-[390px] h-[390px] object-cover"
            />
          </div>

          <div className="col-start-3 col-span-1 self-end pb-12">
            <p className="font-display text-2xl font-semibold leading-snug">
              Online Trilateral Legislature Forum for{" "}
              <span className="text-primary">Future Leaders.</span>
            </p>
            <div className="mt-20">
              <CircularText />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;