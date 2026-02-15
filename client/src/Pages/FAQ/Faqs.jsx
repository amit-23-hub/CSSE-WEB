import { useState } from "react";

const faqs = [
  {
    question: "What types of events do you organize?",
    answer:
      "We organize a variety of events including workshops, seminars, and cultural festivals.",
  },
  {
    question: "How can I register for an event?",
    answer:
      "You can register for an event through our website by selecting the event and filling out the registration form.",
  },
  {
    question: "Is there a fee to attend the events?",
    answer:
      "Some events are free to attend, while others may require a registration fee. Please check the event details for more information.",
  },
  {
    question: "Can I cancel my registration?",
    answer:
      "Yes, you can cancel your registration up to 24 hours before the event. Please refer to our cancellation policy for more details.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl sm:mx-auto sm:px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-white rounded-lg overflow-hidden"
          >
            <button
              className="w-full px-4 py-2 text-left text-lg font-medium bg-slate-600 hover:bg-slate-900 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            <div
              className={`text-xs transition-all duration-300 ${
                activeIndex === index ? "max-h-auto py-4 px-4" : "max-h-0"
              } overflow-hidden text-gray-600`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}