import {
  Button,
  SimpleGrid,
  Table,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import firebaseImageUpload from "../../utils/firebaseImageUpload";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { deleteFirebase, deleteStorageImage } from "../../utils/Delete";
import createServices from "../../utils/createServices";
import DisplayData from "../../utils/DisplayData";
import UpdateData, { getIndividualData } from "../../utils/UpdateData";

const AdminTestimonial = () => {
  const [imgUrl, setImgUrl] = useState();
  const [preimgUrl, setPreImgUrl] = useState();
  const [tableData, setTableData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState();

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      heading: "",
      position: "",
      description: "",
      image: "",
    },
  });
  //delete the data stored in storage
  const handleImageDelete = () => {
    deleteStorageImage(imgUrl);
    setImgUrl(null);
  };
  const onSubmit = (data) => {
    isEdit === false
      ? createServices(data, imgUrl, "testimonial")
      : handleUpdate(data, id);
    reset();
    fetchDatas();
    setImgUrl(null);
  };

  //fetching data from firebase
  async function fetchDatas() {
    try {
      const fetchData = await DisplayData("testimonial");
      setTableData(fetchData);
    } catch (error) { }
  }

  //handle update in firebase
  const handleUpdate = (data, id) => {
    UpdateData(data, id, "testimonial");
    if (preimgUrl !== imgUrl) deleteStorageImage(preimgUrl);

    fetchDatas();
  };

  //Handle edit/update function
  const handleEditButton = async (id) => {
    setId(id);
    setIsEdit(true);
    const res = await getIndividualData(id, "testimonial");
    setImgUrl(res.image);

    Object.keys(res).forEach((key) => {
      setValue(key, res[key]);
    });
    setPreImgUrl(res.image);
  };
  const handleDeleteButton = async (id, image) => {
    await deleteFirebase(id, "testimonial", image);
    fetchDatas();
  };
  useEffect(() => {
    fetchDatas();
  }, []);

  return (
    <main className="flex items-center justify-center flex-col">
      <section className="text-4xl my-2 font-sans font-bold">
        Testimonial
      </section>
      <section className="bg-light_gray w-[60%] shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="px-5 py-7 border-0 ">
          <div className="flex flex-col justify-center">
            <div className="mb-5">
              <Controller
                control={control}
                name="name"
                rules={{
                  required: "Please fill up name",
                }}
                render={({ field }) => (
                  <TextInput
                    control={control}
                    {...field}
                    label="Full Name"
                    placeholder="Name"
                    size="lg"
                  />
                )}
              ></Controller>
              <p className="text-[red] px-3 font-semibold ">
                {errors.name?.message}
              </p>
            </div>

            <div className="mb-5">
              <Controller
                control={control}
                name="position"
                rules={{
                  required: "Please fill up Position",
                }}
                render={({ field }) => (
                  <TextInput
                    control={control}
                    {...field}
                    label="Position"
                    placeholder="Eg:- CEO"
                    size="lg"
                  />
                )}
              ></Controller>
              <p className="text-[red] px-3 font-semibold ">
                {errors.position?.message}
              </p>
            </div>

            <div className="mb-2 font-light text-lg">Testimonial Image</div>

            <div className="">
              <Controller
                name="image"
                control={control}
                rules={{ required: "Image required" }}
                render={({ field }) => (
                  <>
                    <div>
                      <Dropzone
                        {...field}
                        accept={IMAGE_MIME_TYPE}
                        onDrop={async (setFilessss) => {
                          const url = await firebaseImageUpload(setFilessss[0]);
                          setImgUrl(url);
                          setValue("image", url);
                        }}
                      >
                        <Text align="center">Drop images here</Text>
                      </Dropzone>

                      <SimpleGrid
                        cols={4}
                        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
                        className="pt-6"
                      >
                        {imgUrl && imgUrl !== null ? (
                          <img src={imgUrl} alt="upload" />
                        ) : null}
                        {imgUrl && imgUrl !== null ? (
                          <button
                            className="w-16 h-9 rounded-lg  bg-dark_gray text-white"
                            onClick={handleImageDelete}
                          >
                            delete
                          </button>
                        ) : null}
                      </SimpleGrid>
                    </div>
                  </>
                )}
              ></Controller>
              <p className="text-[red] px-3 font-semibold ">
                {errors.image?.message}
              </p>
            </div>
            <div className="mb-5">
              <Controller
                name="description"
                control={control}
                rules={{ required: "Fill up the description" }}
                render={({ field }) => (
                  <Textarea
                    control={control}
                    {...field}
                    placeholder="Description"
                    label="Description"
                    minRows={6}
                    size="lg"
                  />
                )}
              ></Controller>
              <p className="text-[red] px-3 font-semibold ">
                {errors.description?.message}
              </p>
            </div>
            {isEdit !== true ? (
              <Button
                type="submit"
                color="yellow"
                className="bg-yellow font-sans w-[20%] rounded-3xl"
              >
                CREATE
              </Button>
            ) : (
              <Button
                type="submit"
                color="yellow"
                className="bg-yellow font-sans w-[20%] rounded-3xl"
              >
                UPDATE
              </Button>
            )}
          </div>
        </form>
      </section>
      <section className="bg-light_gray w-[80%] shadow-2xl m-9">
        <div className="flex flex-col justify-center">
          <div>
            <Table
              horizontalSpacing="xl"
              verticalSpacing="lg"
              className="p-7"
              striped
              withColumnBorders
            >
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Description</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((ele) => (
                  <tr key={ele.id}>
                    <td>
                      <img
                        className="w-24 h-24 object-contain rounded-full bg-light_gray"
                        src={ele.image}
                        alt="upload name"
                      />
                    </td>
                    <td>{ele.name}</td>
                    <td>{ele.position}</td>
                    <td>{ele.description}</td>
                    <td className="w-36">
                      <Button
                        className="bg-yellow font-sans text-black"
                        onClick={() => handleEditButton(ele.id)}
                      >
                        <FaEdit />
                        Update
                      </Button>
                    </td>
                    <td className="w-36">
                      <Button
                        className="bg-red font-sans text-black"
                        onClick={() => handleDeleteButton(ele.id, ele.image)}
                      >
                        <MdOutlineDeleteOutline />
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminTestimonial;
