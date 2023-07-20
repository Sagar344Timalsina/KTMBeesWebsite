import React from "react";
import FeedBackground from "../assets/images/backgroundFeedBack.png";
const Feedback = (props) => {
  // const data = [
  //   {
  //     image: "https://i.imgur.com/hczKIze.jpg",
  //     name: "Shyam Shrestha",
  //     jobPosition: "CEO",
  //     description:
  //       "Our combined experience of over 40 years’ diligent team is more than happy to help you make you diligent team is more than happy to help you make your dream come true. In addition",
  //   },
  //   {
  //     image: "https://i.imgur.com/hczKIze.jpg",
  //     name: "Shyam Shrestha",
  //     jobPosition: "CEO",
  //     description:
  //       "Our combined experience of over 40 years’ diligent team is more than happ",
  //   },
  //   {
  //     image: "https://i.imgur.com/hczKIze.jpg",
  //     name: "Shyam Shrestha",
  //     jobPosition: "CEO",
  //     description:
  //       "Our combined experience of over 40 years’ diligent team is more than happy to help you make you diligent team ise true. In addition",
  //   },
  //   {
  //     image: "https://i.imgur.com/hczKIze.jpg",
  //     name: "Shyam Shrestha",
  //     jobPosition: "CEO",
  //     description:
  //       "Our combined experience of over 40 years’ diligent team is more than happ",
  //   },
  //   {
  //     image: "https://i.imgur.com/hczKIze.jpg",
  //     name: "Shyam Shrestha",
  //     jobPosition: "CEO",
  //     description:
  //       "Our combined experience of over 40 years’ diligent team is more than happy to help you make you diligent team is more than happy to help you make your dream come true. In addition",
  //   },
  //   {
  //     image: "https://i.imgur.com/hczKIze.jpg",
  //     name: "Shyam Shrestha",
  //     jobPosition: "CEO",
  //     description:
  //       "Our combined experience of over 40 years’ diligent team is more than happy to help you make you diligent team is more than happy to help you make your dream come true. In addition",
  //   },
  // ];
  const { testimonial } = props;
  return (
    <main>
      <div
        className="h-auto bg-center bg-cover overflow-hidden flex flex-col items-center px-8 sm:px-28 xl:px-36 pb-7 pt-3"
        style={{ backgroundImage: `url(${FeedBackground})` }}
      >
        <h1 className="text-2xl font-semibold mb-10">
          Here is what our client says
        </h1>
        <div className="gridView ">
          {testimonial?.map((data) => (
            <div className="card bg-light_yellow h-auto w-80 2xl:w-[27rem] rounded-lg p-6 shadow-2xl">
              <section className="flex  items-center">
                <img
                  alt="pic"
                  className="h-20 mr-4 rounded-full w-20 object-contain"
                  src={data?.image}
                />
                <div>
                  <div className="font-bold text-xl text-black_1">
                    {data?.name}
                  </div>
                  <div className="text-lg text-black_label">
                    {data?.position}
                  </div>
                </div>
              </section>
              <div className="mt-2 text-lg text-black_label text-justify">
                {data?.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Feedback;
