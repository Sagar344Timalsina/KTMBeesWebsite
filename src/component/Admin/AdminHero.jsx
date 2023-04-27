import React, { useEffect, useState } from 'react';
import { Text, Table, SimpleGrid, TextInput, Button } from '@mantine/core';
import { useForm, Controller } from "react-hook-form";
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import firebaseImageUpload from '../../utils/firebaseImageUpload';
import { deleteFirebase, deleteStorageImage } from '../../utils/Delete';
import createServices from '../../utils/createServices';
import DisplayData from '../../utils/DisplayData';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md';
const Hero = () => {
    const [imgUrl, setImgUrl] = useState();
    const [tableData, setTableData] = useState([]);

   
    const { handleSubmit, control, formState: { errors },setValue,reset } = useForm({
        defaultValues: {
            heading: "",
            subheading: "",
            image: "",
        }
    })
    //delete the data stored in storage 
    const handleImageDelete = () => {
        deleteStorageImage(imgUrl);
        setImgUrl(null);
    }
    const onSubmit = (data) => {
        console.log("New data added", data);
        createServices(data, imgUrl, "herosection");
        // alert("Data inserted");
        reset();
        fetchDatas();
        setImgUrl(null);
    }

    //fetching data from firebase
    async function fetchDatas() {
        try {
            const fetchData = await DisplayData("herosection");
            console.log(fetchData);
            setTableData(fetchData);
            console.log("Tablke", tableData);
        } catch (error) {

        }

    }

     //Event handling of delete button
     const handleDeleteButton = (id, image) => {
        deleteFirebase(id, "herosection", image);
        fetchDatas();
        console.log("URL id", id, image);
    }
    useEffect(() => {
        fetchDatas();
    }, [])

    return (
        <main className='flex items-center justify-center flex-col' >
            <section className='text-4xl my-2 font-sans font-bold'>Hero Section</section>
            <section className='bg-light_gray w-[60%] shadow-2xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='px-5 py-7 border-0 '>
                    <div className='flex flex-col justify-center'>
                        <div className='mb-5'>
                            <Controller
                                control={control}
                                name='heading'
                                rules={{
                                    required: "Please fill up title"
                                }}
                                render={({ field }) => <TextInput control={control} {...field}  label="Heading-Title" placeholder='Title-1' size='lg' />}
                            >
                            </Controller>
                            <p className='text-[red] px-3 font-semibold '>{errors.title1?.message}</p>
                        </div>

                        <div className='mb-5'>
                            <Controller
                                control={control}
                                name='subheading'
                                rules={{
                                    required: "Please fill up title"
                                }}
                                render={({ field }) => <TextInput control={control} {...field}  label="Title" placeholder='Title-2' size='lg' />}
                            >
                            </Controller>
                            <p className='text-[red] px-3 font-semibold '>{errors.subheading?.message}</p>
                        </div>

                        <div className='mb-2 font-light text-gray'>Background Image
                        </div>

                        <div className='mb-5'>
                            <Controller
                                name='image'
                                control={control}
                                rules={
                                    { required: "Image reqired" }
                                }
                                render={({ field }) => <>
                                    <div>
                                        <Dropzone {...field} accept={IMAGE_MIME_TYPE} onDrop={async (setFilessss) => {
                                            const url = await firebaseImageUpload(setFilessss[0])
                                            setImgUrl(url);
                                            setValue("image", url);
                                        }}>
                                            <Text align="center">Drop images here</Text>
                                        </Dropzone>

                                        <SimpleGrid
                                            cols={4}
                                            breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
                                            className='pt-6'
                                        >
                                            {imgUrl && imgUrl !== null ? <img src={imgUrl} alt='Image' /> : null}
                                            {imgUrl && imgUrl !== null ? <button className='w-16 h-9 rounded-lg  bg-dark_gray text-white' onClick={handleImageDelete}>delete</button> : null}
                                        
                                        </SimpleGrid>
                                    </div>
                                </>
                                }
                            >
                            </Controller>
                        </div>
                        <p className='text-[red] px-3 font-semibold '>{errors.description?.message}</p>
                        <Button type='submit' color='yellow' className='bg-yellow font-sans w-[20%] rounded-3xl'>CREATE</Button>
                    </div>
                </form>
            </section>
            <section className='bg-light_gray w-[100%] shadow-2xl m-9'>
                <div className='flex flex-col justify-center'>
                    <div >
                    <Table horizontalSpacing="xl" verticalSpacing="lg" className='p-7' striped withColumnBorders>
                            <thead>
                                <tr>
                                    <th>Photo</th>
                                    <th>Heading</th>
                                    <th>Text</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    tableData.map((ele) => (
                                        <tr key={ele.id}>
                                            <td>
                                                <img className='w-24 h-24 object-contain rounded-full bg-light_gray' src={ele.image} alt="upload name" />
                                            </td>
                                            <td>
                                                {ele.heading}
                                            </td>
                                            <td>
                                                {ele.subheading}
                                            </td>
                                            <td className='w-36'><Button className='bg-yellow font-sans text-black'><FaEdit />Update</Button></td>
                                            <td className='w-36'><Button className='bg-red font-sans text-black' onClick={() => handleDeleteButton(ele.id, ele.imageUrl)}><MdOutlineDeleteOutline />Delete</Button></td>
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

export default Hero