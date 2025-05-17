import React, { useContext } from "react";
import AuthContext from "../providers/AuthContext";

const SignUp = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log("User signed in with Google:", user);
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-md bg-white">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>

        <button
          onClick={() => handleGoogleSignIn()}
          className="w-full px-4 py-2 mt-4 text-white bg-red-400 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300"
        >
          Signin With Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
