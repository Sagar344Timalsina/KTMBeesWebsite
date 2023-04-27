import React, { useState, useEffect } from 'react';
import { Text, SimpleGrid, Button, Table } from '@mantine/core';
import { useForm, Controller } from "react-hook-form";
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { deleteFirebase, deleteStorageImage } from '../../utils/Delete';
import firebaseImageUpload from '../../utils/firebaseImageUpload';
import createServices from '../../utils/createServices';
import DisplayData from '../../utils/DisplayData';

const AdminStartupPartner = () => {
    const [imgUrl, setImgUrl] = useState();
    const [tableData, setTableData] = useState([]);

    const handleImageDelete = () => {
        deleteStorageImage(imgUrl);
        setImgUrl(null);
    }


    useEffect(() => {
        fetchDatas();
    }, [])

 
    const { handleSubmit, control, formState: { errors },reset,setValue } = useForm({
        defaultValues: {
            image: "",
        }
    })

    const onSubmit = (data) => {
        createServices(data, imgUrl, "startup");
        reset();
        fetchDatas();
        setImgUrl(null);
    }
    //Fetching data from Displaydata.js Page
    async function fetchDatas() {
        try {
            const fetchData = await DisplayData("startup");
            setTableData(fetchData);
        } catch (error) {
            console.error(error);
        }
    }

    //Event handling of delete button
    const handleDeleteButton = async(id, image) => {
        await deleteFirebase(id, "startup", image);
        fetchDatas();
    }
    useEffect(() => {
        fetchDatas();
    }, [])
    return (
        <main className='flex items-center justify-center flex-col' >
            <section className='text-4xl my-2 font-sans font-bold'>Startup Partner</section>
            <section className='bg-light_gray w-[60%] shadow-2xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='px-5 py-7 border-0 '>
                    <div className='mb-5'>
                        <Controller
                            name='image'
                            control={control}
                            rules={
                                { required: "Image reqired" }
                            }
                            render={({ field }) => <>
                                <Dropzone
                                            {...field}
                                            onDrop={async (setImage) => {
                                                const url = await firebaseImageUpload(setImage[0]);
                                                setImgUrl(url);
                                                setValue("image",url)
                                            }}
                                >
                                    <Text align="center">Drop images here</Text> 
                                </Dropzone>

                                <SimpleGrid
                                    cols={4}
                                    breakpoints={[{ maxWidth: 'xl', cols: 1 }]}
                                   
                                >
                                     {imgUrl && imgUrl !== null ? <img src={imgUrl} alt="Uploaded Images" /> : null}
                                    {imgUrl && imgUrl !== null ? <Button className=' rounded-lg  bg-dark_gray text-white' onClick={handleImageDelete}>REMOVE</Button> : null}
                                   
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
                <div className='flex flex-col justify-center'>
                    <div >
                        <Table horizontalSpacing="xl" verticalSpacing="lg" className='p-7' striped withColumnBorders>
                            <thead>
                                <tr>
                                    <th>Photo</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    tableData.map((ele) => (
                                        <tr key={ele.id}>
                                            <td>
                                                <img className='w-24 h-24 object-contain rounded-full bg-light_gray' src={ele.image} alt="Upload" />
                                            </td>
                                         
                                            <td className='w-36'><Button className='bg-yellow font-sans text-black'><FaEdit />Update</Button></td>
                                            <td className='w-36'><Button className='bg-red font-sans text-black' onClick={() => handleDeleteButton(ele.id, ele.image)}><MdOutlineDeleteOutline />Delete</Button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </section>
        </ main >

    )
}

export default AdminStartupPartner