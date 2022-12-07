import React, { useState, useEffect } from "react";
import "./home.css";
import AddPost from "../../components/addPost/AddPost";
import PostCard from "../../components/postCard/PostCard";

import LoadingIndicator from "../../components/loadingIndicator/LoadingIndicator";

import { getFeedsApi } from "../../util/ApiUtil";

const Home = ({ currentUser }) => {
  const IMAGE_DEFAULT = "https://via.placeholder.com/500";
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const apiResponse = await getFeedsApi(
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
      <AddPost currentUser={currentUser} />
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-indigo-700 capitalize lg:text-4xl">
          Recent Feeds
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

export default Home;