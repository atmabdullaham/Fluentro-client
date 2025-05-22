import React from "react";

const Loading = () => {
  return (
    <div className="min-h-[calc(100vh-306px)]">
      <div className="lg:w-10/12 mx-auto pb-4 text-xl font-bold flex items-center justify-center">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    </div>
  );
};

export default Loading;
