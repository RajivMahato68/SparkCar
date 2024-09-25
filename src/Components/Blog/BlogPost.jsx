import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { FaCalendarDays, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import posts from './PostData';



const BlogPost = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const postsPerPage = 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 15) {
      return words.slice(0, 15).join(' ') + '...';
    }
    return description;
  };

  const handleTagClick = (tag) => {
    const matchedPosts = posts.filter(post => 
      post.title.toLowerCase().includes(tag.toLowerCase()) || 
      post.description.toLowerCase().includes(tag.toLowerCase())
    );
    setFilteredPosts(matchedPosts);
    setCurrentPage(1);
  };

 

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {currentPosts.map((post) => (
              <Link to={`/post/${post.id}`} key={post.id}>
                <div className="relative mb-8 bg-white p-6 rounded-md cursor-pointer">
                  <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-md" />
                  <div className="absolute top-0 left-0 bg-[#1ecb15] w-14 ml-6 mt-6 text-center rounded-md text-white text-sm px-2 py-1">
                    <p className="font-bold text-[32px]">{post.day}</p>
                    <p className="font-bold text-[16px]">{post.month}</p>
                  </div>
                  <div className="mt-6">
                    <h2 className="font-bold text-xl mb-4">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{truncateDescription(post.description)}</p>
                    <button className="bg-[#1ecb15] text-white px-4 py-2 rounded-md">Read More</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-8">
            <button
              onClick={handlePreviousPage}
              className={`text-green-500 px-3 py-2 rounded-md ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={currentPage === 1}
            >
              <FaChevronLeft />
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageClick(index + 1)}
                className={`px-3 py-2 rounded-md border border-gray-300 ${
                  currentPage === index + 1 ? 'bg-[#199e1c] text-white' : 'text-[#199e1c]'
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              className={`text-green-500 px-3 py-2 rounded-md ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={currentPage === totalPages}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Right side: Recent Posts */}
        <div className="w-full lg:w-1/3">
          <h2 className="font-bold text-xl mb-4"><span className='underline underline-offset-[12px] decoration-[#1eca15]'>Rec</span>ent Posts</h2>
          <div className="space-y-4">
            {posts.map((post) => (
              <Link to={`/post/${post.id}`} key={post.id}>
                <div className="flex items-center w-full h-24 cursor-pointer">
                  <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded-md" />
                  <div className="ml-2">
                    <h3 className="font-bold">{post.title}</h3>
                    <div className="flex items-center gap-2 text-[#1ecb15]">
                      <FaCalendarDays />
                      <p className="text-gray-500 text-sm">{dayjs(post.date).format('ddd MMM DD YYYY')}</p>
                    </div>
                    <hr className="my-2 border-gray-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <h1 className="font-bold text-xl mt-4 pb-6"><span className='underline underline-offset-[12px] decoration-[#1eca15]'>Pop</span>ular Tags</h1>
          <div className=" gap-2 uppercase mt-2">
            {[
              "best vehicle rental service in Nepal",
              "best car rental service in Kathmandu",
              "number 1 car rental company of Nepal",
              "rent ford car",
              "sedan & suv in Nepal",
              "spark car - bus and minibus rental company in Nepal",
              "car rental",
              "best car rental"
            ].map(tag => (
              <button 
                key={tag} 
                className="bg-[#1ecb15] text-white  uppercase px-3 py-1 text-sm cursor-pointer block mb-2" 
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
