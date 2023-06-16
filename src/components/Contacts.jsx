import React from "react";

const Contacts = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b 
    from-[#b00202]    to-[#270329] text-sky-50  p-4  "
    >
      <div
        className="flex flex-col p-4 justify-center max-w-screen-lg
        mx-auto h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
                border-gray-500"
          >
            Contacts
          </p>
          <p className="py-6 grid place-content-center text-2xl font-semibold">
            Get in touch...
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/7eaddebf-c994-4ef2-9511-5c176b2353a2"
            method="POST"
            className="flex flex-col w-full md:w-1/2 text-red-800"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-white 
                    border-2 rounded-md   focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-white 
                    border-2 rounded-md   focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-white 
                    border-2 rounded-md   focus:outline-none"
            ></textarea>

            <button
              className="text-white bg-gradient-to-b from-sky-500 to-sky-300  hover:shadow-lime-500
                    px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              {" "}
              Contact Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
