import React from "react";

const Accordion = () => {
  return (
    <div className="bg-white pt-20 pb-20">
      <div className="w-11/12 lg:w-10/12 mx-auto flex justify-center">
        <div className="join join-vertical bg-base-100 max-w-2xl">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold">
              How does this platform work?
            </div>
            <div className="collapse-content text-sm">
              Once you sign up, you can browse through a list of available
              tutors for different languages. You can view their profiles, see
              ratings, and book sessions directly based on their availability.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold">
              What languages can I learn here?
            </div>
            <div className="collapse-content text-sm">
              We currently offer tutoring in English, Arabic, Bangla, Hindi, and
              more. New languages are added regularly based on student demand.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold">
              Are the classes one-on-one or group-based?
            </div>
            <div className="collapse-content text-sm">
              All sessions are one-on-one by default to ensure personalized
              learning. However, group sessions are also available for specific
              courses or requests.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold">
              Can I try a class before enrolling?
            </div>
            <div className="collapse-content text-sm">
              Yes! Most tutors offer a free trial session so you can understand
              the teaching style and check if it fits your learning goals.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
