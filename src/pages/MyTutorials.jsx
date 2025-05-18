import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../providers/AuthContext";
import axios from "axios";
import deleteButton from "../assets/delete.svg";
import updateButton from "../assets/update.svg";

const MyTutorials = () => {
  const { user } = useContext(AuthContext);
  const [tutorials, setTutorials] = useState([]);
  useEffect(() => {
    fetchMyTutorials();
  }, [user]);
  const fetchMyTutorials = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/tutorials/${user?.email}`
    );
    setTutorials(data);
  };

  return (
    <div className="bg-base-200 pt-10 pb-10">
      <div className="lg:w-10/12 mx-auto pb-4 text-xl font-bold">
        My Tutorials:{" "}
        <span className="bg-red-50 p-1 rounded-full">{tutorials.length}</span>
      </div>
      <div className="bg-red-50 lg:w-10/12 mx-auto rounded-lg">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="border-b-4  border-base-200 bg-red-100">
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Language</th>
                <th>Price</th>
                <th>Description</th>
                <th>Review</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {tutorials.map((tutorial) => (
                <tr key={tutorial._id} tutorial={tutorial}>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={tutorial?.tutor?.photo}
                          alt="Photo of the tutor"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{tutorial?.tutor?.name}</td>
                  <td>
                    <p
                      className={` 
${tutorial?.language === "bangla" && "text-red-500 "}
${tutorial?.language === "english" && "text-blue-500 "}
${tutorial?.language === "hindi" && "text-orange-500 "}
${tutorial?.language === "spanish" && "text-yellow-600 "}
${tutorial?.language === "arabic" && "text-green-600 "}
${tutorial?.language === "french" && "text-purple-500 "}
${tutorial?.language === "chinese" && "text-rose-500 "}
${tutorial?.language === "urdu" && "text-emerald-600 "}
${tutorial?.language === "portuguese" && "text-pink-600 "}
${tutorial?.language === "russian" && "text-indigo-700 "}
${tutorial?.language === "japanese" && "text-fuchsia-600 "}
${tutorial?.language === "german" && "text-lime-600 "}
${tutorial?.language === "korean" && "text-cyan-600 "}
${tutorial?.language === "turkish" && "text-teal-600 "}
${tutorial?.language === "italian" && "text-sky-600 "}
`}
                    >
                      {tutorial?.language}
                    </p>
                  </td>
                  <td>${tutorial?.price}</td>
                  <td>{tutorial?.description.slice(0, 60)}..</td>
                  <th>{tutorial?.review}</th>
                  <th>
                    <div className="flex  items-center gap-2">
                      <button className="btn bg-transparent border-0 hover:bg-transparent rounded-full m-0 p-0">
                        <img className="w-4" src={deleteButton} alt="" />
                      </button>
                      <button className="btn bg-transparent border-0 hover:bg-transparent rounded-full m-0 p-0">
                        <img className="w-4" src={updateButton} alt="" />
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyTutorials;
