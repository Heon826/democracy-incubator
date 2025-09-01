import React from 'react';
import { Users, Mic, ClipboardList } from 'lucide-react';

// Data for the "What We Do" cards, using content from the provided input
const whatWeDoItems = [
  {
    number: "1",
    title: "Panel Discussion",
    description: "Trilateral legislative conference led by invited speakers to talk about agendas that can contribute to regional stability and prosperity.",
    icon: Users,
  },
  {
    number: "2",
    title: "Keynote Speech",
    description: "Share valuable insight of notable speakers’ careers and demonstrate guidance to foster the next generation of democratic leaders.",
    icon: Mic,
  },
  {
    number: "3",
    title: "Workshops",
    description: "Networking session allowing students to ask questions from the conference and the speaker's note.",
    icon: ClipboardList,
  },
];

// Interface for the card props
interface WhatWeDoCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

// Internal component for a single "What We Do" card
const WhatWeDoCard: React.FC<WhatWeDoCardProps> = ({ number, title, description, icon: Icon }) => {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Large, decorative background number */}
      <div
        className="absolute -top-12 left-0 right-0 mx-auto select-none font-display text-[160px] font-bold text-gray-100 -z-0 lg:left-0 lg:right-auto lg:mx-0"
        aria-hidden="true"
      >
        {number}
      </div>

      {/* Card content container with z-index to appear above the number */}
      <div className="relative z-10 flex w-full flex-col items-center">
        {/* Icon in a circular background */}
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-secondary">
          <Icon className="h-10 w-10 text-primary" />
        </div>

        {/* Card Title */}
        <h3 className="mb-2 font-display text-[26px] font-bold text-text-dark">
          {title}
        </h3>

        {/* Card Description */}
        <p className="max-w-[280px] font-body text-base text-text-medium leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

/**
 * WhatWeDoSection component renders the "WHAT WE DO" section of the page,
 * featuring three cards that describe the organization's activities.
 */
const WhatWeDoSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container">
        {/* Section Header with offset grid layout for desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2 lg:col-start-2">
            <h2 className="font-display text-[48px] font-bold uppercase text-text-dark">
              What we do
            </h2>
            <div className="mt-2 h-[2px] w-24 bg-text-dark" />
          </div>
        </div>

        {/* Responsive grid for the cards */}
        <div className="mt-28 grid grid-cols-1 gap-y-24 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3">
          {whatWeDoItems.map((item) => (
            <WhatWeDoCard
              key={item.number}
              number={item.number}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;