import { useRef } from "react";
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
          <h1 className="text-center md:text-start text-xl md:text-2xl font-extrabold tracking-wider bg-linear-to-r from-emerald-500 via-rose-400 to-purple-500 bg-clip-text text-transparent">
            Contact Me
          </h1>
          <p className="text-center md:text-start tracking-wider bg-linear-to-r from-emerald-500 via-rose-400 to-purple-500 bg-clip-text text-transparent">
            Please fill out the box to contact me
          </p>
        </div>

        {/* Contact Form */}
        <div className=" mt-2 flex justify-center-safe">
          <div className="w-screen md:w-150 bg-violet-300 px-5 py-2 rounded-xl flex flex-col md:items-center border-4 border-purple-700 shadow-lg/50">
            <p className=" text-lg font-bold text-center md:text-start  tracking-wider bg-linear-to-r from-emerald-500 via-rose-400 to-purple-500 bg-clip-text text-transparent">
              Send Your Message
            </p>
            <form onSubmit={handleSubmit(onSubmit)} ref={myForm}>
              {/* Name Field */}

              <div className="my-2">
                <label
                  className="block my-1 font-medium text-indigo-500"
                  htmlFor="username"
                >
                  Full Name
                </label>
                <input
                  {...register("username", { required: true })}
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter Your Full Name"
                  className="w-full text-slate-600
                  focus:outline-emerald-400 focus:bg-neutral-500 focus:text-emerald-400 font-semibold  md:w-110 py-1 px-2 outline-2 bg-white outline-gray-400 rounded"
                />
              </div>
              {errors.username && (
                <span className="text-red-500  relative -top-[8px]">
                  Name is required
                </span>
              )}
              {/* Email Field */}

              <div className="my-2">
                <label
                  className="block my-1 font-medium text-indigo-500"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full 
                  text-slate-600
                  focus:outline-emerald-400 focus:bg-neutral-500 focus:text-emerald-400 font-semibold md:w-110 py-1 px-2 bg-white outline-2 outline-gray-400 rounded"
                />
              </div>
              {errors.email && (
                <span className="text-red-500 relative -top-[8px]">
                  Email is required
                </span>
              )}
              {/* Message Field */}

              <div className="my-2">
                <label
                  className="block my-1 font-medium text-indigo-500"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  {...register("message", { required: true })}
                  id="message"
                  name="message"
                  placeholder="Type your message here"
                  className="w-full h-30 
                  text-slate-600
                  focus:outline-emerald-400 focus:bg-neutral-500 focus:text-emerald-400 font-semibold md:w-110 min-w-50 px-2 py-1 bg-white outline-2 outline-gray-400 rounded"
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
                  className="w-full md:w-110 px-2 py-1 font-semibold bg-green-400 text-fuchsia-500
                 border-2 border-cyan-600 rounded-md cursor-pointer hover:bg-green-600
                hover:scale-105 duration-300
                active:bg-purple-500"
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
