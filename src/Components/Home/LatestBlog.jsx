import React from "react";
import { Link } from "react-router-dom";
import posts from "../Blog/PostData"; 

function truncateDescription(description, wordLimit) {
  const words = description.split(" ");
  if (words.length <= wordLimit) return description;
  return words.slice(0, wordLimit).join(" ") + "...";
}

function LatestBlog() {
  const latestBlogs = posts
    .sort((a, b) => b.date - a.date) // Sort by date descending
    .slice(0, 3); // Get the latest 3

  return (
    <>
      <div className="w-full text-center pt-16 lg:pt-32">
        <h1 className="font-bold text-2xl lg:text-3xl text-[#031b4e]">Latest Blogs</h1>
      </div>
      <div className="w-full px-6 sm:px-12 lg:px-28 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestBlogs.map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-white w-full h-full">
                <div className="relative">
                  <img
                    className="w-full h-48 object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                  {/* Date overlay */}
                  <div className="absolute top-0 left-0 bg-[#1ecb15] w-14 ml-4 text-center text-white text-sm px-2 py-1">
                    <p className="font-bold text-[32px]">{item.day}</p>
                    <p className="font-bold text-[16px]">{item.month}</p>
                  </div>
                </div>
                <div className="px-4">
                  <div className="mb-2 pt-2">
                    <h2 className="text-lg lg:text-xl font-semibold text-black">{item.title}</h2>
                    <p className="text-gray-500 text-sm pt-2">
                      {truncateDescription(item.description, 15)} {/* Truncated description */}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <Link to={`/Post/${item.id}`} className="bg-[#1ecb15] hover:bg-green-600 h-10 w-full text-white font-bold py-1 px-4 rounded-md text-center">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LatestBlog;
