import background_1 from "../assets/background_1.jpg";
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
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-start px-6 pt-16"
      style={{ backgroundImage: `url(${background_1})` }}
    >
      <PageContainer>
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Frequently Asked Questions
        </h1>


        <div className="max-w-2xl w-full bg-white/90 rounded-lg shadow-md overflow-hidden space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b last:border-none">
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none hover:bg-gray-100 transition"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <span className="text-xl text-gray-600">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx ? "max-h-40 py-2" : "max-h-0"
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
