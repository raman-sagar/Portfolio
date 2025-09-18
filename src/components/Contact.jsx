import { React, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

export const Contact = () => {
  const myForm = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.username,
      email: data.email,
      message: data.message,
    };

    try {
      await axios.post("https://getform.io/f/adrdqlma", userInfo);
      toast.success("Your message has been sent");
      // console.log(myForm.current);
      //Reset Form After successful submission
      myForm.current.reset();
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error.message);
    }
  };

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen container mx-auto py-4 px-4 md:px-20"
      >
        {/* Heading */}
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Contact Me</h1>
          <p>Please fill out the box to contact me</p>
        </div>

        {/* Contact Form */}
        <div className=" mt-2 flex justify-center-safe">
          <div className="md:w-150 bg-gray-200 px-5 py-2 rounded-md flex flex-col md:items-center">
            <p className=" text-lg font-bold">Send Your Message</p>
            <form onSubmit={handleSubmit(onSubmit)} ref={myForm}>
              {/* Name Field */}

              <div className="my-2">
                <label className="block my-1 font-medium" htmlFor="username">
                  Full Name
                </label>
                <input
                  {...register("username", { required: true })}
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter Your Full Name"
                  className="md:w-110 py-1 px-2  outline-2 bg-white outline-gray-400 rounded"
                />
              </div>
              {errors.username && (
                <span className="text-red-500  relative -top-[8px]">
                  Name is required
                </span>
              )}
              {/* Email Field */}

              <div className="my-2">
                <label className="block my-1 font-medium" htmlFor="email">
                  Email Address
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className="md:w-110 py-1 px-2 bg-white outline-2 outline-gray-400 rounded"
                />
              </div>
              {errors.email && (
                <span className="text-red-500 relative -top-[8px]">
                  Email is required
                </span>
              )}
              {/* Message Field */}

              <div className="my-2">
                <label className="block my-1 font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  {...register("message", { required: true })}
                  id="message"
                  name="message"
                  placeholder="Type your message here"
                  className="md:w-110 min-w-50 px-2 py-1 bg-white outline-2 outline-gray-400 rounded"
                ></textarea>
              </div>
              {errors.message && (
                <span className="text-red-500 relative -top-[15px]">
                  Message is required
                </span>
              )}
              {/* Button Field */}
              <div className="my-2">
                <button
                  type="submit"
                  className="w-50 md:w-110 px-2 py-1 font-semibold bg-green-400 text-white rounded-md cursor-pointer hover:bg-green-600
                hover:scale-110 duration-300"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
