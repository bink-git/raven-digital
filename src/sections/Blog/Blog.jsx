import React from "react";
import Title from "../../components/Text/Title";
import { posts } from "../../data";
import heart from "../../assets/heart.svg";

const Blog = () => {
  return (
    <div className="about container-2xl mx-auto w-full max-w-screen-2xl ">
      <Title>Blog</Title>
      <div className="mb-[150px] grid grid-cols-12 gap-6">
        {posts.map((post) => (
          <div
            key={post.date}
            className="group relative z-10 col-span-4 cursor-pointer overflow-hidden rounded-tr-[90px] border-b-8 border-primary bg-[#11161C] p-6 pb-14 "
          >
            <div className="relative">
              <img
                src={post.img}
                alt="photo"
                className="mx-auto mb-6 h-[415px] w-[415px]"
              />
              <div className="absolute bottom-0 left-0 flex h-[50px] w-[120px] items-center rounded-tr-[90px] bg-primary">
                <span className="ml-6">{post.label}</span>
              </div>
            </div>
            <div className="">
              <div className="mb-4 flex items-center justify-between text-lg font-medium opacity-30">
                <p>{post.date}</p>
                <div className="flex items-center">
                  <img src={heart} alt="heart icon" />
                  <span className="ml-2">{post.likes}</span>
                </div>
              </div>
              <h3 className="mb-3 text-2xl">{post.title}</h3>
              <p className="text-lg font-light opacity-30">{post.text}</p>
            </div>
            <div className="absolute bottom-0 left-0 -z-10 h-[50%] w-full translate-y-full bg-primary transition duration-1000 ease-in-out group-hover:translate-y-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
