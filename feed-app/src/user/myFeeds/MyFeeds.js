import React, { useState, useEffect } from "react";
import "./myfeeds.css";
import PostCard from "../../components/postCard/PostCard";
import dummyPost from "../../dummyPost.json";

import LoadingIndicator from "../../components/loadingIndicator/LoadingIndicator";

const MyFeeds = ({ currentUser }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMyPosts();
  }, []);

  const getMyPosts = () => {
    //get my posts api code goes here
  };

  if (isLoading) {
    return <LoadingIndicator fullPage />;
  }

  return (
    <div className="bg-[#fafafa]">
      <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-indigo-700 capitalize lg:text-4xl">
          My Feeds
        </h1>
        <div class="grid grid-cols-1 gap-8 mt-8  md:grid-cols-2">
          {dummyPost.map(({ post, postImageUrl, postDate }) => {
            return (
              <PostCard
                post={post}
                postImageUrl={postImageUrl}
                postDate={postDate}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyFeeds;