import React, { useState, useEffect } from "react";
import {
  Text,
  SimpleGrid,
  Button,
  Table,
  TextInput,
  Select,
} from "@mantine/core";
import { useForm, Controller } from "react-hook-form";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { deleteFirebase, deleteStorageImage } from "../../utils/Delete";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import firebaseImageUpload from "../../utils/firebaseImageUpload";
import createServices from "../../utils/createServices";
import DisplayData from "../../utils/DisplayData";
import UpdateData, { getIndividualData } from "../../utils/UpdateData";

const AdminCompanies = () => {
  const [imgUrl, setImgUrl] = useState();
  const [smallImgUrl, setSmallImgUrl] = useState();
  const [preimgUrl, setPreImgUrl] = useState();
  const [display, setDisplay] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState();
  const [category, setCategory] = useState([]);
  const listCategory = [];

  const displayProjects = async () => {
    const listProjects = await DisplayData("projects");
    listProjects.map((data) => {
      listCategory.push(data.category);
    });
    const unique = [...new Set(listCategory)];
    setCategory(unique);
  };
  useEffect(() => {
    displayProjects();
  }, []);

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      url: "",
      image: "",
    },
  });
  //delete the data stored in storage
  const handleImageDelete = () => {
    deleteStorageImage(imgUrl);
    setImgUrl(null);
  };
  const handleSmallImageDelete = () => {
    deleteStorageImage(smallImgUrl);
    setSmallImgUrl(null);
  };
  const onSubmit = (data) => {
    isEdit === false
      ? createServices(data, imgUrl, "projects")
      : handleUpdate(data, id);
    reset();
    fetchDatas();
    setImgUrl(null);
    setSmallImgUrl(null);
  };

  //fetching data from firebase
  async function fetchDatas() {
    try {
      const fetchData = await DisplayData("projects");
      setDisplay(fetchData);
    } catch (error) {}
  }

  //Event handling of delete button
  const handleDeleteButton = async (id, smallImage, largeImage) => {
    await deleteFirebase(id, "projects", { smallImage, largeImage });
    fetchDatas();
  };

  //handle update in firebase
  const handleUpdate = (data, id) => {
    UpdateData(data, id, "projects");
    if (preimgUrl !== imgUrl) deleteStorageImage(preimgUrl);

    fetchDatas();
  };

  //Handle edit/update function
  const handleEditButton = async (id) => {
    setId(id);
    setIsEdit(true);
    const res = await getIndividualData(id, "projects");
    setImgUrl(res.largeImage);
    setSmallImgUrl(res.smallImage);
    Object.keys(res).forEach((key) => {
      setValue(key, res[key]);
    });
    setPreImgUrl(res.image);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  return (
    <main className="flex items-center justify-center flex-col">
      <section className="text-4xl my-2 font-sans font-bold">
        Our Projects
      </section>
      <section className="bg-light_gray w-[60%] shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="px-5 py-7 border-0 ">
          <div className="mb-5">
            <Controller
              control={control}
              name="category"
              rules={{
                required: "Please select category",
              }}
              render={({ field }) => (
                <Select
                  {...field}
                  control={control}
                  label="Project Category"
                  data={category}
                  placeholder="Select items"
                  nothingFound="Nothing found"
                  searchable
                  creatable
                  getCreateLabel={(query) => `+ Create ${query}`}
                  onCreate={(query) => {
                    console.log(query);
                    const item = { value: query, label: query };
                    setCategory((current) => [...current, item]);
                    return item;
                  }}
                />
              )}
            ></Controller>
            <p className="text-[red] px-3 font-semibold">
              {errors.category?.message}
            </p>
          </div>
          <div className="mb-5">
            <Controller
              control={control}
              name="url"
              rules={{
                required: "Please insert url",
              }}
              render={({ field }) => (
                <TextInput
                  control={control}
                  {...field}
                  label="Image Url"
                  placeholder="www.example.com"
                  size="lg"
                />
              )}
            ></Controller>
            <p className="text-[red] px-3 font-semibold ">
              {errors.url?.message}
            </p>
          </div>
          <div className="mb-5">
            <Controller
              name="largeImage"
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
                        setValue("largeImage", url);
                      }}
                    >
                      <Text align="center">Drop large image here</Text>
                    </Dropzone>

                    <SimpleGrid
                      cols={4}
                      breakpoints={[{ maxWidth: "md", cols: 1 }]}
                      className="p-5 flex"
                    >
                      {imgUrl && imgUrl !== null ? (
                        <img
                          src={imgUrl}
                          className="object-contain"
                          alt="upload"
                        />
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
              {errors.largeImage?.message}
            </p>
          </div>
          <div className="mb-5">
            <Controller
              name="smallImage"
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
                        setSmallImgUrl(url);
                        setValue("smallImage", url);
                      }}
                    >
                      <Text align="center">Drop small image here</Text>
                    </Dropzone>

                    <SimpleGrid
                      cols={4}
                      breakpoints={[{ maxWidth: "md", cols: 1 }]}
                      className="p-5 flex"
                    >
                      {smallImgUrl && smallImgUrl !== null ? (
                        <img
                          src={smallImgUrl}
                          className="object-contain"
                          alt="upload"
                        />
                      ) : null}
                      {smallImgUrl && smallImgUrl !== null ? (
                        <button
                          className="w-16 h-9 rounded-lg  bg-dark_gray text-white"
                          onClick={handleSmallImageDelete}
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
              {errors.smallImage?.message}
            </p>
          </div>
          {/* <p className='text-[red] px-3 font-semibold '>{errors.description?.message}</p> */}
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
                  <th>Category</th>
                  <th>Large Image</th>
                  <th>Small Image</th>
                  <th>Image url</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {display.map((ele) => (
                  <tr key={ele.id}>
                    <td>{ele.category}</td>
                    <td>
                      <img
                        className="w-24 h-24 object-contain rounded-full bg-light_gray"
                        src={ele.largeImage}
                        alt="Upload"
                      />
                    </td>
                    <td>
                      <img
                        className="w-24 h-24 object-contain rounded-full bg-light_gray"
                        src={ele.smallImage}
                        alt="Upload"
                      />
                    </td>
                    <td>{ele.url}</td>
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
                        onClick={() =>
                          handleDeleteButton(
                            ele.id,
                            ele.largeImage,
                            ele.smallImage
                          )
                        }
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

export default AdminCompanies;
