import { Button, SimpleGrid, Table, Text, TextInput } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import firebaseImageUpload from '../../utils/firebaseImageUpload';
import createServices from '../../utils/createServices';
import DisplayData from '../../utils/DisplayData';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { deleteFirebase, deleteStorageImage } from '../../utils/Delete';
import UpdateData, { getIndividualData } from '../../utils/UpdateData';

const AdminTeam = () => {
    const { handleSubmit, control, formState: { errors }, setValue, reset } = useForm({
        defaultValues: {
            name: "",
            post: "",
            image: ""
        }
    })
    const [imageUrl, setImageUrl] = useState();
    const [isEdit, setIsEdit] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [id, setId] = useState();
    const [preimgUrl, setPreImgUrl] = useState();

    const onSubmit = ((data) => {
        isEdit === false ? createServices(data, imageUrl, "teams") : handleUpdate(data, id);
        reset();
        fetchData();
        setImageUrl(null);
    })

    async function fetchData() {
        try {
            const fetchData = await DisplayData("teams");
            setTableData(fetchData);
        } catch (errors) {
            console.log(errors.message);
        }
    }
    const handleDeleteButton = async (id, image) => {
        await deleteFirebase(id, "teams", image);
        fetchData();
    }
    const handleImageDelete = () => {
        deleteStorageImage(imageUrl);
        setImageUrl(null);
    }
    const handleEditButton = async (id) => {
        setIsEdit(true);
        setId(id);
        const res = await getIndividualData(id, "teams");
        setImageUrl(res.image);
        Object.keys(res).forEach((key) => {
            setValue(key, res[key]);
        });
        setPreImgUrl(res.image);

    }
    const handleUpdate = (data, id) => {
        UpdateData(data, id, "teams");
        if (preimgUrl !== imageUrl)
            deleteStorageImage(preimgUrl);

        fetchData();
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <main className='flex items-center justify-center flex-col'>
            <section className='text-4xl my-2 font-sans font-bold'>Our Teams</section>
            <section className='bg-light_gray w-[60%] shadow-2xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='px-5 py-7 border-0'>
                    <div className='flex flex-col justify-center'>
                        <div className='mb-5'>
                            <Controller
                                control={control}
                                name="name"
                                rules={{
                                    required: "Please fill the name"
                                }}
                                render={({ field }) => <TextInput control={control} {...field} label="Name" placeholder="Name" size="lg" />}
                            ></Controller>
                            <p className='text-[red] px-3 font-semibold '>{errors.name?.message}</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <div className='mb-5'>
                            <Controller
                                control={control}
                                name="post"
                                rules={{ required: "Please fill the post" }}
                                render={({ field }) => <TextInput control={control} {...field} label="Post" placeholder='Post' size="lg" />}
                            >
                            </Controller>
                            <p className='text-[red] px-3 font-semibold '>{errors.post?.message}</p>
                        </div>
                    </div>
                    <div className='mb-2 font-light text-gray'>Image</div>
                    <div className='mb-5'>
                        <Controller
                            control={control}
                            name="image"
                            rules={{ required: "Please select image" }}
                            render={({ field }) =>
                                <div>
                                    <Dropzone {...field} accept={IMAGE_MIME_TYPE} onDrop={async (setFiles) => {
                                        const url = await firebaseImageUpload(setFiles[0])
                                        setImageUrl(url);
                                        setValue("image", url);
                                    }}>
                                        <Text align="center">Drop image here</Text>
                                    </Dropzone>
                                    <SimpleGrid
                                        cols={4}
                                        breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
                                        className='pt-6'
                                    >
                                        {imageUrl && imageUrl !== null ? <><img src={imageUrl} alt='upload' />
                                            <button className='w-16 h-9 rounded-lg  bg-dark_gray text-white' onClick={handleImageDelete}>delete</button></> : null}
                                    </SimpleGrid>
                                </div>}
                        ></Controller>
                        <p className='text-[red] px-3 font-semibold '>{errors.image?.message}</p>
                        {isEdit !== true ? <Button type='submit' color='yellow' className='bg-yellow font-sans w-[20%] rounded-3xl'>CREATE</Button>
                            : <Button type='submit' color='yellow' className='bg-yellow font-sans w-[20%] rounded-3xl'>UPDATE</Button>}
                    </div>
                </form>
            </section>
            <section className='bg-light_gray w-[80%] shadow-2xl m-9'>
                <div className='flex flex-col justify-center'>
                    <div >
                        <Table horizontalSpacing="xl" verticalSpacing="lg" className='p-7' striped withColumnBorders>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Post</th>
                                    <th>Image</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tableData.map((ele) => (
                                        <tr key={ele.id}>
                                            <td>{ele.name}</td>
                                            <td>{ele.post}</td>
                                            <td>
                                                <img className='w-24 h-24 object-contain rounded-full bg-light_gray' src={ele.image} alt="upload name" />
                                            </td>
                                            <td className='w-36'><Button className='bg-yellow font-sans text-black' onClick={() => handleEditButton(ele.id)}><FaEdit />Update</Button></td>
                                            <td className='w-36'><Button className='bg-red font-sans text-black' onClick={() => handleDeleteButton(ele.id, ele.image)}><MdOutlineDeleteOutline />Delete</Button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AdminTeam
