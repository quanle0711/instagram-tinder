import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageFrame from '../ImageFrame/ImageFrame';
class HomePage extends Component {
  render() {
    return (
      <div className="bg-white h-screen flex flex-col justify-center items-center">
        <ImageFrame/>
        <div className="flex justify-around items-center w-1/4">
          <Link className="py-3 px-3 flex items-center rounded-full bg-green-300 text-black hover:bg-green-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </Link>

          <Link className="py-3 px-3 flex items-center rounded-full bg-pink-300 text-black hover:bg-pink-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
