import React, { useState, useEffect } from 'react';
import DisplayData from '../../utils/DisplayData';
import { Text, Image, SimpleGrid, Button, Table } from '@mantine/core';
import { useForm, Controller } from "react-hook-form";
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { createStartup } from '../../utils/Create';
import { deleteFirebase, deleteStorageImage } from '../../utils/Delete';
import firebaseImageUpload from '../../utils/firebaseImageUpload';

const AdminStartupPartner = () => {
    const [imgUrl, setImgUrl] = useState();
    const [tableData, setTableData] = useState([]);
    const { handleSubmit, control, formState: { errors }, reset } = useForm({
        defaultValues: {
            image: "",
        }
    })

    const handleImageDelete = () => {
        deleteStorageImage(imgUrl);
        setImgUrl(null);
    }
    const onsubmit = (data) => {
        createStartup(imgUrl);
        alert("Data inserted");
        reset();
        fetchDatas();
        setImgUrl(null);
    }
    //fetching data from DisplayData.js
    async function fetchDatas() {
        const fetchData = await DisplayData("startup");
        setTableData(fetchData);
    }

    //Event handling of delete button
    const handleDeleteButton = (id, image) => {
        deleteFirebase(id, "startup", image);
        deleteStorageImage(image);
        console.log("Deleted from storage");
        fetchDatas();
        reset();
    }

    useEffect(() => {
        fetchDatas();
    }, [])

    // const previews = files.map((file, index) => {
    //     const imageUrl = URL.createObjectURL(file);
    //     return (
    //         <Image
    //             caption={files[0].name}
    //             key={index}
    //             src={imageUrl}
    //             imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
    //         />
    //     );
    // });


    const removeImage = () => {
        setImgUrl(null)
        handleImageDelete();
    }

    return (
        <main className='flex items-center justify-center flex-col' >
            <section className='text-4xl my-2 font-sans font-bold'>Startup Partner</section>
            <section className='bg-light_gray w-[60%] shadow-2xl'>
                <form onSubmit={handleSubmit(onsubmit)} className='px-5 py-7 border-0 '>
                    <div className='mb-5'>
                        <Controller
                            name='image'
                            control={control}
                            rules={
                                { required: "Image reqired" }
                            }
                            render={({ field }) => <>
                                <Dropzone  {...field} accept={IMAGE_MIME_TYPE} onDrop={async (setFilessss) => {
                                    const url = await firebaseImageUpload(setFilessss[0])
                                    setImgUrl(url);
                                }}>
                                    <Text align="center">Drop images here</Text>
                                </Dropzone>

                                <SimpleGrid
                                    cols={4}
                                    breakpoints={[{ maxWidth: 'xl', cols: 1 }]}

                                >
                                    {imgUrl && imgUrl !== null ? <img src={imgUrl} alt='Image' /> : null}
                                    {imgUrl && imgUrl !== null ? <button className='w-16 h-9 rounded-lg  bg-dark_gray text-white' onClick={handleImageDelete}>Delete</button> : null}

                                </SimpleGrid>
                            </>
                            }
                        >
                        </Controller>
                    </div>
                    <p className='text-[red] px-3 font-semibold '>{errors.image?.message}</p>
                    <Button type='submit' color='yellow' className='bg-yellow font-sans w-[20%] rounded-3xl'>CREATE</Button>
                </form>
            </section>
            <section className='bg-light_gray w-[60%] shadow-2xl m-9'>


                <Table horizontalSpacing="xl" verticalSpacing="lg" fontSize="lg" striped withColumnBorders highlightOnHover>
                    <thead>
                        <tr>
                            <th>Partners</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData && tableData.map((data) => (
                                <tr key={data.id}>
                                    <td>
                                        <img className='w-36 h-36 object-contain rounded-full bg-light_gray' src={data.imageurl} alt="Image name" />
                                    </td>

                                    <td><Button className='bg-yellow font-sans text-black'><FaEdit />Update</Button></td>

                                    <td>
                                        <Button className='bg-red font-sans text-black' onClick={() => handleDeleteButton(data.id, data.imageurl)}><MdOutlineDeleteOutline />Delete</Button>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </Table>

            </section>
        </ main >

    )
}

export default AdminStartupPartner