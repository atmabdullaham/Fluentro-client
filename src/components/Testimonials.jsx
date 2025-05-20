import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    title: "Marketing Executive",
    quote:
      "Booking a tutor through this platform was the best decision I made for my IELTS prep. My tutor helped me improve my writing and speaking skills in just a few weeks. The one-on-one sessions were super focused and personalized.",
  },
  {
    name: "Rafiq Chowdhury",
    title: "Freelancer",
    quote:
      "I’ve always wanted to learn Arabic to better understand the Quran. With this platform, I found a tutor who explains everything clearly and patiently. Now I can read with proper pronunciation and confidence.",
  },
  {
    name: "Jessica Tan",
    title: "University Student",
    quote:
      "I was struggling with spoken English in my classes. My tutor helped me build confidence through regular conversation practice and fun role-play sessions. It doesn’t even feel like studying anymore!",
  },
];

const Testimonials = () => {
  return (
    <section className="pt-28 pb-28 bg-red-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Why Learners & Parents Love Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-center text-rose-500 mb-4">
                <Quote className="w-8 h-8" />
              </div>
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                {item.quote}
              </p>
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-gray-500 text-sm">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
