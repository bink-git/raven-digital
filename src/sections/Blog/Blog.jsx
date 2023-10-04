import React from "react";
import Title from "../../components/Text/Title";
import { posts } from "../../data";

const Blog = () => {
  return (
    <div className="about container-2xl mx-auto w-full max-w-screen-2xl ">
      <Title>Blog</Title>
      <div className="mb-[150px] grid grid-cols-12 gap-6">
        {posts.map((post) => (
          <div
            key={post.date}
            className="col-span-4 rounded-tr-[90px] bg-[#11161C]"
          >
            <img
              src={post.img}
              alt="photo"
              className="mx-auto h-[415px] w-[415px]"
            />
            <div className="left-0 top-0 -z-10 flex h-full w-full flex-col justify-between rounded-lg bg-secondary px-8 pb-[74px] pt-14 text-center">
              <div>
                <p className="mb-4 text-2xl font-medium">{post.name}</p>
                <p className="text-lg font-medium">{post.position}</p>
              </div>
              <p className="text-lg font-light">{post.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
