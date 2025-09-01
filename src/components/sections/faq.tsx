"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

type FaqItemData = {
  question: string;
  answer: string;
};

const faqData: FaqItemData[] = [
  {
    question: "Who can participate in the conference?",
    answer:
      "Anyone who is interested in democratic governance and legislative innovation are welcome to attend the conference as a mentee.",
  },
  {
    question: "How can I register for the conference?",
    answer:
      "Registration details and the signup link will be available here. Participants can sign up by filling out the online registration form. After registering, participants will receive an invitation link for the online conference.",
  },
  {
    question: "Is there a fee to participate?",
    answer: "Participation in the conference is free of charge.",
  },
  {
    question: "How will the conference be conducted?",
    answer:
      "The conference will be hosted on a secure virtual platform that supports live streaming, interactive workshops, panel discussions, and networking sessions. Participants will receive access credentials and instructions after registration.",
  },
  {
    question:
      "What are the main themes and topics covered in the conference?",
    answer:
      "The Asia-Pacific Democratic Incubator focuses on legislative innovation, democratic governance, and regional cooperation. Key topics include economic development, elections and its implications, digital governance, public health, and most importantly empowerment of young leaders.",
  },
  {
    question: "How can I join a working group or networking session?",
    answer:
      "Participants can express their interest in joining working groups or specialized sessions during the registration process. Information on the available groups and sessions will be shared, and participants can choose based on their interests.",
  },
  {
    question: "Questions or assistance?",
    answer:
      "For any further questions or assistance, participants can contact the support team via email at heon@bu.edu or through the contact form on the website.",
  },
];

const FaqSection = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="container">
        <div className="grid grid-cols-3">
          <div className="col-start-2 col-span-2">
            <h2 className="font-display text-[48px] font-bold uppercase text-text-dark">
              FAQ
            </h2>
            <div className="mt-4 mb-10 h-px bg-border"></div>
          </div>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-0"
        >
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="group border-b border-gray-300 last:border-b-0"
            >
              <div className="grid grid-cols-3 py-6">
                <div className="flex justify-start">
                  <span className="font-body text-primary text-sm italic">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                </div>
                <div className="col-span-2">
                  <AccordionTrigger className="w-full p-0 flex justify-between items-start text-left hover:no-underline [&>svg]:hidden">
                    <h3 className="font-display text-[32px] font-semibold text-text-dark leading-tight pr-8">
                      {faq.question}
                    </h3>
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <Plus className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:hidden" />
                      <Minus className="h-4 w-4 transition-transform duration-200 hidden group-data-[state=open]:block" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-0 pr-16">
                    <p className="font-body text-base text-medium-gray leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;