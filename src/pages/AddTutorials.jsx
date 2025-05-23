import React, { useContext, useEffect } from "react";

import AuthContext from "../providers/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTutorials = () => {
  useEffect(() => {
    document.title = "Add Tutorials | Fluentro";
  }, []);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddTutorial = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const language = form.language.value;
    const price = form.price.value;
    const description = form.description.value;
    const tutorialData = {
      tutor: {
        name: name,
        email: email,
        photo: photo,
      },
      language,
      price,
      description,
      review: 0,
    };

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/add-tutorial`,
        tutorialData,
        {
          withCredentials: true,
        }
      );
      toast.success("Tutorial added");
      form.reset();
      navigate("/my-tutorials");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-[calc(100vh-280px)]  ">
      <div className="hero-content w-full">
        {/* form */}
        <div className="card bg-white w-full max-w-lg shrink-0 ">
          <div className="card-body bg-base-100 text-black">
            <legend className="fieldset-legend text-xl mx-auto font-bold">
              Please fill the form to add a tutorial
            </legend>
            <div className="bg-base-200 border-base-300 rounded-box w-full border p-4">
              <form onSubmit={handleAddTutorial} className="fieldset pt-0">
                {/* Name */}

                <label className="label">Name</label>
                <input
                  name="name"
                  required
                  className="input w-full"
                  placeholder="Name"
                  type="text"
                  defaultValue={user?.displayName}
                  readOnly
                />

                {/* email */}
                <label className="label">Email</label>
                <input
                  name="email"
                  required
                  className="input w-full"
                  placeholder="Email"
                  type="email"
                  defaultValue={user?.email}
                  readOnly
                />

                {/* photo URL */}
                <label className="label">Photo URL</label>
                <input
                  name="photo"
                  required
                  className="input w-full"
                  placeholder="Photo URL"
                  type="url"
                  defaultValue={user?.photoURL}
                />

                {/* langauge */}
                <label className="label ">Language</label>
                <select name="language" required className="select w-full ">
                  <option value="">Select</option>
                  <option value="bangla">Bangla</option>
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="spanish">Spanish</option>
                  <option value="arabic">Arabic</option>
                  <option value="french">French</option>
                  <option value="chinese">Chinese</option>
                  <option value="urdu">Urdu</option>
                  <option value="portuguese">Portuguese</option>
                  <option value="russian">Russian</option>
                  <option value="japanese">Japanese</option>
                  <option value="german">German</option>
                  <option value="korean">Korean</option>
                  <option value="turkish">Turkish</option>
                  <option value="italian">Italian</option>
                </select>
                <label className="label">Price</label>
                <input
                  name="price"
                  required
                  type="number"
                  placeholder="Enter price"
                  className="w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                />
                <label className="label">Description</label>
                <textarea
                  name="description"
                  required
                  rows="6"
                  placeholder="Write a detailed description..."
                  className="w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 resize-none shadow-sm"
                />

                <input
                  className="btn text-white bg-red-500 text-lg hover:border-red-600 mt-4"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTutorials;
