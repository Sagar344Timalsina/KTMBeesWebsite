import React from "react";
import FeedBackground from "../assets/images/backgroundFeedBack.png";
const Feedback = () => {
  const col1 = [
    {
      image: "https://i.imgur.com/hczKIze.jpg",
      name: "Shyam Shrestha",
      jobPosition: "CEO",
      description: "Our combined experience of over 40",
    },

    {
      image: "https://i.imgur.com/hczKIze.jpg",
      name: "Shyam Shrestha",
      jobPosition: "CEO",
      description:
        "Our combined experience of over 40 years’ diligent team is more than happy to",
    },
  ];
  const col2 = [
    {
      image: "https://i.imgur.com/hczKIze.jpg",
      name: "Shyam Shrestha",
      jobPosition: "CEO",
      description:
        "Our combined experience of over 40 years’ diligent team is more than happy to help you make you diligent team is more than happy to help you make your dream come true. In addition",
    },
    {
      image: "https://i.imgur.com/hczKIze.jpg",
      name: "Shyam Shrestha",
      jobPosition: "CEO",
      description:
        "Our combined experience of over 40 years’ diligent team is more than happy to help you make your dream come true. In addition",
    },
  ];
  const col3 = [
    {
      image: "https://i.imgur.com/hczKIze.jpg",
      name: "Shyam Shrestha",
      jobPosition: "CEO",
      description:
        "Our combined experience of over 40 years’ diligent team is more than happy to help you ",
    },
    {
      image: "https://i.imgur.com/hczKIze.jpg",
      name: "Shyam Shrestha",
      jobPosition: "CEO",
      description:
        "Our combined experience of over 40 years’ diligent team is more than happ",
    },
  ];
  const col4 = [
    {
      image: "https://i.imgur.com/hczKIze.jpg",
      name: "Shyam Shrestha",
      jobPosition: "CEO",
      description:
        "Our combined experience of over 40 years’ diligent team is more than happy to help you make ",
    },
    {
      image: "https://i.imgur.com/hczKIze.jpg",
      name: "Shyam Shrestha",
      jobPosition: "CEO",
      description:
        "Our combined experience of over 40 years’ diligent team is more than happy to help ",
    },
  ];
  return (
    <main>
      {/* <div className="h-screen">Hello</div> */}
      <div
        className="h-auto pb-10 lg:h-screen bg-center bg-cover overflow-hidden flex items-center flex-col"
        // key={data?.id}
        style={{ backgroundImage: `url(${FeedBackground})` }}
      >
        <h1 className="text-2xl font-semibold mt-3">
          Here is what our client says
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-20 mt-36 ">
          <div className="grid gap-4">
            {col1?.map((data) => (
              <div className="bg-light_yellow h-auto w-80 rounded-lg p-4 shadow-2xl">
                <section className="flex  items-center">
                  <img
                    alt="pic"
                    className="h-20 mr-4 rounded-full"
                    src={data?.image}
                  />
                  <div>
                    <div className="font-bold text-xl text-black_1">
                      {data?.name}
                    </div>
                    <div className="text-lg text-black_label">
                      {data?.jobPosition}
                    </div>
                  </div>
                </section>

                <div className="mt-2 text-lg text-black_label text-justify">
                  {data?.description}
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-4 ">
            {col2?.map((data) => (
              <div className="bg-light_yellow h-auto w-80 rounded-lg p-4 shadow-2xl">
                <section className="flex  items-center">
                  <img
                    alt="pic"
                    className="h-20 mr-4 rounded-full"
                    src={data?.image}
                  />
                  <div>
                    <div className="font-bold text-xl text-black_1">
                      {data?.name}
                    </div>
                    <div className="text-lg text-black_label">
                      {data?.jobPosition}
                    </div>
                  </div>
                </section>

                <div className="mt-2 text-lg text-black_label text-justify">
                  {data?.description}
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-4 ">
            {col3?.map((data) => (
              <div className="bg-light_yellow h-auto w-80 rounded-lg p-4 shadow-2xl">
                <section className="flex  items-center">
                  <img
                    alt="pic"
                    className="h-20 mr-4 rounded-full"
                    src={data?.image}
                  />
                  <div>
                    <div className="font-bold text-xl text-black_1">
                      {data?.name}
                    </div>
                    <div className="text-lg text-black_label">
                      {data?.jobPosition}
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
      </div>
    </main>
  );
};

export default Feedback;
