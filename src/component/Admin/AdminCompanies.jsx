import React, { useState, useEffect } from 'react';
import { Text, Image, SimpleGrid, Button,Table } from '@mantine/core';
import { useForm, Controller } from "react-hook-form";
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { createCompanies } from '../../utils/Create';
import { Display } from '../../utils/Display'
import { deleteFirebase, deleteStorageImage } from '../../utils/Delete'
import firebaseImageUpload from '../../utils/firebaseImageUpload';
import createServices from '../../utils/createServices';
import DisplayData from '../../utils/DisplayData';

const AdminCompanies = () => {
   
    const [imgUrl, setImgUrl] = useState();
    const [display, setDisplay] = useState([]);
   
    const { handleSubmit, control, formState: { errors },setValue,reset } = useForm({
        defaultValues: {
            title1: "",
            title2: "",
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
    createServices(data, imgUrl, "companies");
    // alert("Data inserted");
    reset();
    fetchDatas();
    setImgUrl(null);
}

//fetching data from firebase
async function fetchDatas() {
    try {
        const fetchData = await DisplayData("companies");
        console.log(fetchData);
        setDisplay(fetchData);
      
    } catch (error) {

    }

}

 //Event handling of delete button
 const handleDeleteButton = (id, image) => {
    deleteFirebase(id, "companies", image);
    fetchDatas();
    console.log("URL id", id, image);
}
useEffect(() => {
    fetchDatas();
}, [])


    const deleteRecord = (id, imageDelete) => {
        deleteFirebase(id, "services", imageDelete);
        deleteStorageImage(imageDelete);
    }

    return (
        <main className='flex items-center justify-center flex-col' >
            <section className='text-4xl my-2 font-sans font-bold'>Companies that trusted us</section>
            <section className='bg-light_gray w-[60%] shadow-2xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='px-5 py-7 border-0 '>
                    <div className='mb-5'>
                        <Controller
                            name='bgImage'
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
                                        breakpoints={[{ maxWidth: 'xl', cols: 1 }]}
                                       
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
                </form>
            </section>
            <section className='bg-light_gray w-[100%] shadow-2xl m-9'>
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

                                    display.map((ele) => (
                                        <tr key={ele.id}>
                                            <td>
                                                <img className='w-24 h-24 object-contain rounded-full bg-light_gray' src={ele.image} alt="Image name" />
                                            </td>
                                         
                                            <td>
                                                <button >Edit</button>
                                            </td>
                                            <td>
                                                <button className='bg-yellow w-32 h-12 rounded-xl' onClick={() => handleDeleteButton(ele.id, ele.image)}>Delete</button>
                                            </td>
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

export default AdminCompanies