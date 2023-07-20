import { Button, Select, Table, TextInput, Textarea } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import createServices from "../../utils/createServices";
import UpdateData, { getIndividualData } from "../../utils/UpdateData";
import DisplayData from "../../utils/DisplayData";
import { deleteFirebase } from "../../utils/Delete";
import { DatePickerInput } from "@mantine/dates";
import moment from "moment";
import { RichTextEditor, Link } from '@mantine/tiptap'
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import Highlight from '@tiptap/extension-highlight';
// import { BulletListControl } from "@mantine/tiptap/lib/controls";
import dayjs from "dayjs";

const AdminCareer = () => {
  const [tableData, setTableData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState();
  const jobType = ["Full Time", "Part Time"];
  const location = ["Kathmandu", "Pokhara", "Jhapa"];
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      jobTitle: "",
      // date: new Date(),
      description: "",
      jobType: "",
      location: "",
    },
  });

  const [desc, setdesc] = useState("");
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: desc
  });
  const onSubmit = (data) => {
    console.log(desc);
    // setdesc(data.description);
    const date = new Date(data.date);
    data.date = moment(date).format("LL");
    isEdit === false
      ? createServices(data, null, "career")
      : handleUpdate(data, id);
    reset();
    fetchDatas();
  };
  //handle update in firebase
  const handleUpdate = (data, id) => {
    const date = new Date(data.date);
    data.date = moment(date).format("LL");
    UpdateData(data, id, "career");
    fetchDatas();
  };

  //Handle edit/update function
  const handleEditButton = async (id) => {
    setId(id);
    setIsEdit(true);
    const res = await getIndividualData(id, "career");
    res.date = new Date(res.date);

    Object.keys(res).forEach((key) => {
      setValue(key, res[key]);
      console.log(key);
    });
  };

  async function fetchDatas() {
    try {
      const fetchData = await DisplayData("career");
      setTableData(fetchData);
    } catch (error) { }
  }

  useEffect(() => {
    fetchDatas();
  }, []);

  const handleDeleteButton = async (id, image) => {
    await deleteFirebase(id, "career", image);
    fetchDatas();
  };

  const onError = () => {
    console.log("Error has occured", errors);
  };
  return (
    <main className="flex items-center justify-center flex-col">
      <section className="text-4xl my-6 font-sans font-bold">Career</section>
      <section className="bg-light_gray w-[60%] shadow-2xl">
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="px-5 py-7 border-0 "
        >
          <div className="flex flex-col justify-center">
            <div className="flex justify-between">
              <div className="mb-5 w-2/5">
                <Controller
                  control={control}
                  name="jobTitle"
                  rules={{
                    required: "Please fill up Job title",
                  }}
                  render={({ field }) => (
                    <TextInput
                      control={control}
                      {...field}
                      placeholder="Title"
                      label="Title"
                      size="lg"
                    />
                  )}
                ></Controller>
                <p className="text-[red] px-3 font-semibold ">
                  {errors.jobTitle?.message}
                </p>
              </div>
              <div className="mb-5 w-2/4">
                <Controller
                  control={control}
                  name="date"
                  rules={{
                    required: "Please fill up Date",
                  }}
                  render={({ field }) => (
                    <DatePickerInput
                      {...field}
                      minDate={new Date()}
                      label="Expiry Date"
                      placeholder="Expiry Date"
                      valueFormat="YYYY MMM DD"
                      maw={400}
                      size="lg"
                    />
                  )}
                ></Controller>
                <p className="text-[red] px-3 font-semibold ">
                  {errors.date?.message}
                </p>
              </div>
            </div>
            <div className="mb-5">
              <Controller
                control={control}
                name={"description"}
                rules={{ required: "Fill up the description" }}
                render={({ field }) => (
                  <Textarea {...field} label="Job description" size="lg" placeholder="Description"></Textarea>
                )}
              ></Controller>
              <p className="text-[red] px-3 font-semibold ">
                {errors.description?.message}
              </p>
            </div>
            <div className="flex justify-between">
              <div className="mb-5 w-80 mr-1">
                <Controller
                  name="jobType"
                  control={control}
                  rules={{ required: "Fill up the Job Type" }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      label="Job Type"
                      placeholder="Pick one"
                      data={jobType}
                      size="lg"
                    />
                  )}
                ></Controller>
                <p className="text-[red] px-3 font-semibold ">
                  {errors.jobType?.message}
                </p>
              </div>

              <div className="mb-5  w-80">
                <Controller
                  name="location"
                  control={control}
                  rules={{ required: "Fill up the Location" }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      label="Location"
                      placeholder="Pick one"
                      data={location}
                      size="lg"
                    />
                  )}
                ></Controller>
                <p className="text-[red] px-3 font-semibold ">
                  {errors.location?.message}
                </p>
              </div>
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
      </section >
      <section className="bg-light_gray w-[80%] shadow-2xl m-9">
        <Table
          horizontalSpacing="xl"
          verticalSpacing="lg"
          fontSize="lg"
          className="p-7"
          striped
          withColumnBorders
          highlightOnHover
        >
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Expiry Date</th>
              <th>Job type</th>
              <th>Location</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {tableData &&
            tableData.map((data) => (
              <tbody key={data?.id}>
                <tr>
                  <td>{data?.jobTitle}</td>
                  <td ><div className="overflow-scroll h-64 w-72">{data?.description}</div></td>
                  <td>{data?.date}</td>
                  <td>{data?.jobType}</td>
                  <td>{data?.location}</td>
                  <td>
                    <Button
                      className="bg-yellow font-sans text-black border-4 "
                      onClick={() => handleEditButton(data?.id)}
                    >
                      <FaEdit />
                      Update
                    </Button>
                  </td>
                  <td>
                    <Button
                      className="bg-red font-sans text-black"
                      onClick={() => handleDeleteButton(data?.id, null)}
                    >
                      <MdOutlineDeleteOutline />
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
        </Table>
      </section>
    </main >
  );
};

export default AdminCareer;
