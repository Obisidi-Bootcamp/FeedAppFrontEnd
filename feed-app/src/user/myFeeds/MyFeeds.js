import React, { useState, useEffect } from "react";
import "./myfeeds.css";
import PostCard from "../../components/postCard/PostCard";

import LoadingIndicator from "../../components/loadingIndicator/LoadingIndicator";

import { getMyFeedsApi } from "../../util/ApiUtil";

const MyFeeds = ({ currentUser }) => {
  const IMAGE_DEFAULT = "https://via.placeholder.com/500";
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getMyPosts();
  }, []);

  const getMyPosts = async () => {
    const apiResponse = await getMyFeedsApi(
      currentUser.token,
      currentUser.username
    );
    if (apiResponse && apiResponse.length > 0) {
      const postsArr = [];
      apiResponse.forEach(({ post, imageMetaData }) => {
        let postObj = { post, postImageUrl: IMAGE_DEFAULT, postDate: "NA" };
        if (imageMetaData.length > 0) {
          postObj.postImageUrl = imageMetaData[0].imageName;
          postObj.postDate = imageMetaData[0].imageDate;
        }
        postsArr.push(postObj);
      });
      setPosts(postsArr);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingIndicator fullPage />;
  }

  return (
    <div className="bg-[#fafafa]">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-indigo-700 capitalize lg:text-4xl">
          My Feeds
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8  md:grid-cols-2">
          {posts.map(({ post, postImageUrl, postDate }) => {
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