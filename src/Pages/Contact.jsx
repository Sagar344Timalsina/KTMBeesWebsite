import React from "react";
import { Text, TextInput, Textarea, Checkbox } from "@mantine/core";
import captcha from "../assets/images/Captcha.png";
import { Controller, useForm } from "react-hook-form";
import Navbar from "../component/Navbar";
import { Footer } from "../component/Footer";
import { useMediaQuery } from "@mantine/hooks";

const Contacts = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      textArea: "",
      company: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  const largeScreen = useMediaQuery("(min-width: 640px)");
  return (
    // <Navbar/>
    <>
      <Navbar />
      <div className="bg-light_yellow  flex items-center justify-center flex-col">
        {/* <section className="my-8"> */}
        <section className="my-4 sm:my-8 text-black_1">
          <Text
            className="  text-center text-xl sm:text-4xl  font-sans "
            fw={700}
          >
            Contact
          </Text>
          <Text
            className="text-black_label text-center text-sm sm:text-2xl font-sans"
            fw={400}
          >
            Have a question? Write to us
          </Text>
        </section>
        <section className="lg:w-3/5 w-[90%] rounded-2xl mb-10 sm:mb-10 bg-white ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            className="px-2 py-7 md:px-4 md:py-12 focus:none border-0 shadow-2xl rounded-lg"
          >
            <div className="lg:mb-[1rem] lg:flex">
              <div className="w-[100%] mb-1 lg:w-2/4 lg:mb-0">
                <Controller
                  control={control}
                  name="name"
                  rules={{
                    required: "Please enter a name",
                  }}
                  render={({ field }) => (
                    <TextInput
                      control={control}
                      {...field}
                      className="w-[100%] px-3"
                      fw={600}
                      size={largeScreen ? "md" : "sm"}
                      placeholder="Full Name"
                      label="Name"
                      radius="md"
                      theme={{}}
                    />
                  )}
                />
                <p className="text-[red] px-3 font-[600] text-xs sm:text-base">
                  {errors.name?.message}
                </p>
              </div>
              <div className="w-[100%] mb-1 lg:w-2/4 lg:mb-0">
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Please enter email ",
                    pattern: {
                      value: /^[^@]+@[^@]+\.[^@.]{2,}$/,
                      message: "Email is invalid",
                    },
                  }}
                  render={({ field }) => (
                    <TextInput
                      control={control}
                      {...field}
                      className="w-[100%] px-3 responsive-input"
                      fw={600}
                      placeholder="Email"
                      label={<span className="responsive-label">Email</span>}
                      radius="md"
                      size={largeScreen ? "md" : "sm"}
                    />
                  )}
                />
                <p className="text-[red] px-3 font-[600] text-xs sm:text-base">
                  {errors.email?.message}
                </p>
              </div>
            </div>
            <div className="sm:mb-[1rem] sm:flex">
              <div className="w-[100%] mb-1 sm:w-2/4 sm:mb-0">
                <Controller
                  name="contact"
                  control={control}
                  rules={{
                    required: "Please enter the number",
                    pattern: {
                      value: /^([+]\d{2})?\d{10}$/,
                      message: "Mobile number must be 10 digit or 7 digit",
                    },
                  }}
                  render={({ field }) => (
                    <TextInput
                      control={control}
                      {...field}
                      type="number"
                      className="w-[100%] px-3 responsive-input"
                      fw={600}
                      placeholder="Mobile Number"
                      label={<span className="responsive-label">Contact</span>}
                      radius="md"
                      size={largeScreen ? "md" : "sm"}
                    />
                  )}
                />
                <p className="text-[red] px-3 font-[600] text-xs sm:text-base">
                  {errors.contact?.message}
                </p>
              </div>

              <div className="w-[100%] mb-1 sm:w-2/4 sm:mb-0">
                <Controller
                  name="company"
                  control={control}
                  rules={{
                    required: "Please enter the company",
                  }}
                  render={({ field }) => (
                    <TextInput
                      control={control}
                      {...field}
                      className="w-[100%] px-3 responsive-input"
                      fw={600}
                      placeholder="Your Company"
                      label={
                        <span className="responsive-label">Company Name</span>
                      }
                      radius="md"
                      size={largeScreen ? "md" : "sm"}
                    />
                  )}
                />
                <p className="text-[red] px-3 font-[600] text-xs sm:text-base">
                  {errors.company?.message}
                </p>
              </div>
            </div>

            <Controller
              name="textArea"
              control={control}
              render={({ field }) => (
                <Textarea
                  control={control}
                  {...field}
                  className="px-3 mb-[1rem] responsive-input"
                  fw={600}
                  placeholder="Tell us about your product, current challenges and objectives."
                  label="Message"
                  minRows={largeScreen ? 4 : 3}
                  size={largeScreen ? "md" : "sm"}
                  radius="md"
                />
              )}
            />
            <section
              className="flex
            flex-col items-end"
            >
              <div className="w-44 text-xs ml-3 bg-white sm:w-[18rem] sm:h-[6rem] sm:mx-3 sm:mb-[0rem]  border border-gray_2 flex justify-around items-center">
                <Controller
                  name="checkbox"
                  rules={{
                    required: "Please check the Captcha box",
                  }}
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      control={control}
                      {...field}
                      // fw={100}
                      size={largeScreen ? "md" : "xs"}
                      className="w-3/5"
                      label="I'm not a robot "
                    />
                  )}
                />
                <img
                  className="sm:w-[5rem] w-14 "
                  src={captcha}
                  alt="ReCaptcha"
                />
              </div>
              <p className="text-[red] px-3 font-[600] mb-[1rem] text-xs sm:text-base">
                {errors.checkbox?.message}
              </p>

              <button
                type="submit"
                className="ml-4 w-28 my-1 rounded-full h-8 text-xs bg-[#F0B62F] sm:w-[12rem] sm:h-[4rem] sm:mx-3 sm:rounded-[40px] tracking-[.06rem] font-[Poppins] text-white sm:text-[20px] font-semibold"
              >
                Send
              </button>
            </section>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contacts;
