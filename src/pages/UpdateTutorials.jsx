import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTutorials = () => {
  useEffect(() => {
    document.title = "Update | Fluentor";
  }, []);
  const [tutorial, setTutorial] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchTutorialData();
  }, [id]);
  const fetchTutorialData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/get-one/${id}`,
      {
        withCredentials: true,
      }
    );

    setTutorial(data);
  };

  const handleUpdateTutorial = async (e) => {
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
      review: tutorial?.review,
    };

    // for comparison with form  data
    const originalData = {
      tutor: {
        name: tutorial?.tutor?.name,
        email: tutorial?.tutor?.email,
        photo: tutorial?.tutor?.photo,
      },
      language: tutorial?.language,
      price: tutorial?.price,
      description: tutorial?.description,
      review: tutorial?.review,
    };
    const isEqual =
      JSON.stringify(tutorialData) === JSON.stringify(originalData);

    if (isEqual) {
      toast.error("Nothing changed to update.");
      return;
    }
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/update-tutorial/${id}`,

        tutorialData,
        {
          withCredentials: true,
        }
      );
      toast.success("Tutorial updated");
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
              Please Change the field to Update
            </legend>
            <div className="bg-base-200 border-base-300 rounded-box w-full border p-4">
              <form onSubmit={handleUpdateTutorial} className="fieldset pt-0">
                {/* Name */}

                <label className="label">Name</label>
                <input
                  name="name"
                  required
                  className="input w-full"
                  placeholder="Name"
                  type="text"
                  defaultValue={tutorial?.tutor?.name}
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
                  defaultValue={tutorial?.tutor?.email}
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
                  defaultValue={tutorial?.tutor?.photo}
                />

                {/* langauge */}
                {tutorial?.language && (
                  <div>
                    <label className="label">Language</label>
                    <select
                      name="language"
                      required
                      defaultValue={tutorial?.language}
                      className="select w-full"
                    >
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
                  </div>
                )}
                <label className="label">Price</label>
                <input
                  name="price"
                  required
                  className="input w-full"
                  placeholder="Price"
                  type="number"
                  defaultValue={tutorial?.price}
                />
                <label className="label">Description</label>
                <textarea
                  name="description"
                  required
                  rows="6"
                  defaultValue={tutorial?.description}
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

export default UpdateTutorials;
