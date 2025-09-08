import { PageContainer } from "../Components/PageContainer";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What does the Media Team do?",
    answer:
      "We create and support school media projects including photography, videography, audio production, and promotional content for events and organizations."
  },
  {
    question: "Who can request a project?",
    answer:
      "Any student, teacher, or school club/organization can submit a request for media support through our request form."
  },
  {
    question: "Is there a cost for services?",
    answer:
      "No. All projects are completed free of charge as part of our student learning experience. Some projects may have scheduling limitations depending on demand."
  },
  {
    question: "How do I submit a request?",
    answer:
      "You can fill out our online request form (linked on the homepage) or scan the QR code to get started."
  },
  {
    question: "What kinds of projects do you accept?",
    answer:
      "We accept a wide range of requests, including event photography, video interviews, promotional videos, podcasts, and more. If you’re not sure, just ask!"
  },
  {
    question: "Can I join the Media Team?",
    answer:
      "Yes! Students interested in photography, videography, editing, or audio can apply to join. Reach out to a current team member or faculty advisor for more information."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-gradient-radial from-purple-800 via-purple-900 to-black text-white">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-purple-700/20 blur-3xl"></div>
      </div>

      <PageContainer>
        <h1 className="text-5xl font-bold text-white mb-8 text-center">
          Frequently Asked Questions
        </h1>

        <div className="max-w-2xl w-full space-y-4 mx-auto">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white/90 rounded-lg shadow-lg overflow-hidden transition hover:shadow-purple-500/40"
            >
              <button
              onClick={() => toggleFAQ(idx)}
              className={`w-full px-6 py-4 flex items-center justify-between focus:outline-none transition ${
                openIndex === idx
                  ? "bg-purple-50 border-l-4 border-purple-500"
                  : "hover:bg-gray-100"
              }`}
            >
              <span className="text-lg font-medium text-gray-900 text-center flex-1">
                {faq.question}
              </span>
              <span
                className={`text-4xl ml-4 transform transition-transform duration-300 ${
                  openIndex === idx ? "rotate-45 text-purple-600" : "text-gray-600"
                }`}
              >
                +
              </span>
            </button>

              <div
                className={`px-6 transition-all duration-500 ease-in-out overflow-hidden text-center ${
                  openIndex === idx
                    ? "max-h-40 py-3 opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-2"
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </div>
  );
}
