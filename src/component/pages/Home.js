import React, { useState } from "react";
import { url } from "./Url";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [username, setusername] = useState();
  const [email, setemail] = useState();

  const handleSubmit = async () => {
    try {
      const data = await axios.post(`${url}/post-user`, {
        username: username,
        email: email,
      });
      if (data) {
        alert("User is subscribed...");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-gray-100 h-screen">
      <div className="text-center py-20 font-bold text-3xl ">Subscription</div>
      <div className="max-w-[50%] text-center mx-auto mt-7">
        <div className="flex justify-between items-center px-10 my-4 ">
          <div className="">Username :</div>
          <div className="">
            <input
              type="text"
              className="bg-white outline-none px-4 py-2 border rounded border-gray-300"
              placeholder="Enter your username here"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-between items-center px-10 my-4 ">
          <div className="">Email :</div>
          <div className="">
            <input
              type="email"
              placeholder="Enter your email here"
              className="bg-white outline-none px-4 py-2 border rounded border-gray-300"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-5 justify-center ">
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-5 rounded"
            onClick={() => handleSubmit()}
          >
            Subscribe
          </button>
          <Link to="/user-list">
            <button className="bg-blue-500 text-white px-4 py-2 mt-5 rounded">
              User List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
