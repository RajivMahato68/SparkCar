import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import posts from './PostData';  
import { Link } from 'react-router-dom';
import { FaCalendarDays } from "react-icons/fa6";

const SinglePost = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Reset filtered posts when the component mounts
    setFilteredPosts(posts);
  }, []);

  if (!post) {
    return <div>Post not found</div>;
  }

 

  
  
  return (
    <div className="container mx-auto px-4 pt-32 pb-5">
      {/* Main Image */}
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-full object-cover rounded-md" 
      />
      
      {/* Post Details */}
      <div className="flex flex-col lg:flex-row gap-8 mt-6">
        <div className="w-full lg:w-2/3">
          <h1 className="font-bold text-3xl mt-6">{post.title}</h1>
          <p className='mt-2'>{post.description}</p>
          {post.descriptionImage && (
            <img src={post.descriptionImage} alt="" className='mt-10 w-full' />
          )}
          {post.conclusion && <p className='mt-5'>{post.conclusion}</p>}
        </div>

        {/* Right side: Recent Posts */}
        <div className="w-full lg:w-1/3">
          <h2 className="font-bold text-xl mb-4">Recent Posts</h2>
          <div className="space-y-4">
            {posts.map((recentPost) => (
              <Link to={`/post/${recentPost.id}`} key={recentPost.id}>
                <div className="flex items-center mb-2 cursor-pointer">
                  <img src={recentPost.image} alt={recentPost.title} className="w-16 h-16 object-cover rounded-md" />
                  <div>
                    <h3 className="font-bold ml-2">{recentPost.title}</h3>
                    <div className="flex items-center gap-2 ml-2 text-[#1ecb15]">
                      <FaCalendarDays />
                      <p className="text-gray-500 text-sm">{dayjs(recentPost.date).format('ddd MMM DD YYYY')}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
