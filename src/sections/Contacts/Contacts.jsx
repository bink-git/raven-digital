import React from "react";
import Title from "../../components/Title";

const Contacts = () => {
  return (
    <div className="contacts container-2xl mx-auto w-full max-w-screen-2xl">
      <Title className="mb-[120px]">Contact us</Title>
      <div className="flex justify-center">
        <form className="flex-1 pr-28">
          <div className="mb-6">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="input "
              placeholder="Name here"
            />
            <span class="bar"></span>
          </div>

          <div className="mb-6">
            <label htmlFor="last-name">Last name</label>
            <input
              type="text"
              id="last-name"
              className="input "
              placeholder="Last name here"
            />
            <span class="bar"></span>
          </div>

          <div className="mb-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="input "
              placeholder="example@mail.eu"
            />
            <span class="bar"></span>
          </div>

          <div>
            <label htmlFor="textarea">Message</label>
            <textarea
              id="textarea"
              rows={3}
              cols={20}
              className="block w-full resize-none border-b-2 border-[#536A82] bg-transparent px-3 py-2 text-white placeholder:text-[#2E2E2E] focus:outline-none"
              placeholder="Start typing"
            />
            <span class="bar"></span>
          </div>
        </form>
        <div className="flex-1 bg-slate-500 pl-[260px]">a</div>
      </div>
    </div>
  );
};

export default Contacts;
