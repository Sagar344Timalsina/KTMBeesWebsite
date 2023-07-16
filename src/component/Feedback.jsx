import React from "react";
import FeedBackground from "../assets/images/backgroundFeedBack.png";
const Feedback = () => {
  const col1 = [
    {
      image: "https://i.imgur.com/hczKIze.jpg",
      name: "asjasja",
      jobPosition: "Asdhajsd",
      description: "sdjhasdjaksjda sjdhk",
    },

    {
      image: "https://i.imgur.com/hczKIze.jpg",
      name: "asjasja",
      jobPosition: "Asdhajsd",
      description:
        "sdjhasdjaksjda sjdhkashdkjahskj dhasdhkasdkjhaskd haskhdkjahskjhasdkhas asdhkjashdkj asdhaskhdkjashjkdhjad",
    },
  ];
  const col2 = [
    {
      image: "https://i.imgur.com/hczKIze.jpg",
      name: "asjasja",
      jobPosition: "Asdhajsd",
      description:
        "sdjhasdjaksjda sjdhkashdkjahskj dhasdhkasdkjhaskd haskhdkjahskjhasdkhas asdhkjashdkj asdhaskhdkjashjkdhjad",
    },
    {
      image: "https://i.imgur.com/hczKIze.jpg",
      name: "asjasja",
      jobPosition: "Asdhajsd",
      description:
        "sdjhasdjaksjda sjdhkashdkjahskj dhasdhkasdkjhaskd haskhdkjahskjhasdkhas asdhkjashdkj asdhaskhdkjashjkdhjad",
    },
  ];
  const col3 = [
    {
      image: "https://i.imgur.com/hczKIze.jpg",
      name: "asjasja",
      jobPosition: "Asdhajsd",
      description:
        "sdjhasdjaksjda sjdhkashdkjahskj dhasdhkasdkjhaskd haskhdkjahskjhasdkhas asdhkjashdkj ",
    },
    {
      image: "https://i.imgur.com/hczKIze.jpg",
      name: "asjasja",
      jobPosition: "Asdhajsd",
      description: "sdjhasdjaksjda sjdhkashdkjahskj dhasdhkasdkjhaskd  ",
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
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden gap-4 lg:gap-20 lg:mt-28 mt-10 ">
          <div className="flex flex-col ">
            {col1?.map((data) => (
              <div className=" bg-white w-72 h-auto p-2 shadow-2xl mb-4">
                <section className="flex  items-center">
                  <img
                    alt="pic"
                    className="h-20 mr-4 rounded-full"
                    src={data?.image}
                  />
                  <div>
                    <div className="">{data?.name}</div>
                    <div>{data?.jobPosition}</div>
                  </div>
                </section>

                <div>{data?.description}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            {col2?.map((data) => (
              <div className=" bg-white col-span-4  w-72 h-auto p-2 shadow-2xl mb-4 ">
                <section className="flex  items-center ">
                  <img
                    alt="pic"
                    className="h-20 mr-4 rounded-full"
                    src={data?.image}
                  />
                  <div>
                    <div className="">{data?.name}</div>
                    <div>{data?.jobPosition}</div>
                  </div>
                </section>

                <div>{data?.description}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col ">
            {col3?.map((data) => (
              <div className=" bg-white col-span-4  w-72 h-auto p-2 shadow-2xl mb-4 ">
                <section className="flex  items-center ">
                  <img
                    alt="pic"
                    className="h-20 mr-4 rounded-full"
                    src={data?.image}
                  />
                  <div>
                    <div className="">{data?.name}</div>
                    <div>{data?.jobPosition}</div>
                  </div>
                </section>

                <div>{data?.description}</div>
              </div>
            ))}
          </div>
        </div>
        <section className=""></section>
      </div>
    </main>
  );
};

export default Feedback;
