import React from "react";
import "./postcard.css";

const PostCard = ({ post, postImageUrl, postDate }) => {
  return (
    <>
      <div class="lg:flex">
        <img
          class="object-cover w-full h-56 rounded-lg lg:w-64"
          src={postImageUrl}
          alt=""
        />

        <div class="flex flex-col justify-between py-6 lg:mx-6">
          <p class="text-xl font-semibold text-gray-800 hover:underline">
            {post}
          </p>

          <span class="text-sm text-gray-500">{postDate}</span>
        </div>
      </div>
    </>
  );
};

export default PostCard;