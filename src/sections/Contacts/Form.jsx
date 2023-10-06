import React from "react";
import Button from "../../components/Button";

const Form = () => {
  return (
    <form className="flex-1 pr-28">
      <div className="mb-6">
        <label htmlFor="name" className="mb-5 block">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="input "
          placeholder="Name here"
        />
        <span className="bar"></span>
      </div>

      <div className="mb-6">
        <label htmlFor="last-name" className="mb-5 block">
          Last name
        </label>
        <input
          type="text"
          id="last-name"
          className="input "
          placeholder="Last name here"
        />
        <span className="bar"></span>
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="mb-5 block">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="input "
          placeholder="example@mail.eu"
        />
        <span className="bar"></span>
      </div>

      <div className="mb-14">
        <label htmlFor="textarea" className="mb-5 block">
          Message
        </label>
        <textarea
          id="textarea"
          rows={3}
          cols={20}
          className="block w-full resize-none border-b-2 border-[#536A82] bg-transparent px-3 py-2 text-white placeholder:text-[#2E2E2E] focus:outline-none"
          placeholder="Start typing"
        />
        <span className="bar"></span>
      </div>
      <Button>Send message</Button>
    </form>
  );
};

export default Form;
