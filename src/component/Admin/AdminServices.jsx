import React, { useState } from 'react'
import { TextInput, Button, SimpleGrid, Text, Table } from '@mantine/core'
import { useForm, Controller } from 'react-hook-form'
import { notifications } from '@mantine/notifications';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import firebaseImageUpload from '../../utils/firebaseImageUpload';

import createServices from '../../utils/createServices';
import { deleteFirebase, deleteStorageImage } from '../../utils/Delete';
import { useEffect } from 'react';
import DisplayData from '../../utils/DisplayData';

const AdminServices = () => {
    const [imgUrl, setImgUrl] = useState();
    const [tableData, setTableData] = useState([]);

    const handleImageDelete = () => {
        deleteStorageImage(imgUrl);
        setImgUrl(null);
    }


    const { handleSubmit, formState: { errors }, control, reset, setValue } = useForm({
        defaultValues: {
            image: "",
            text: "",
            headingtitle: "",
        }
    });




    const onSubmit = (data) => {
        console.log("New data added", data);
        createServices(data, imgUrl, "services");
        // alert("Data inserted");
        reset();
        fetchDatas();
        setImgUrl(null);
    }
    //Fetching data from Displaydata.js Page
    async function fetchDatas() {
        try {
            const fetchData = await DisplayData("services");
            console.log(fetchData);
            setTableData(fetchData);
            console.log("Tablke", tableData);
        } catch (error) {

        }

    }

    //Event handling of delete button
    const handleDeleteButton = (id, image) => {
        deleteFirebase(id, "services", image);
        fetchDatas();
        console.log("URL id", id, image);
    }
    useEffect(() => {
        fetchDatas();
    }, [])



    return (
        <main className='flex items-center justify-center flex-col' >
            <section className='text-4xl my-6 font-sans font-bold'>Services</section>
            <section className='bg-light_gray w-[60%] shadow-[0_5px_24px_1px_rgba(0,0,0,0.2)] rounded-lg'>
                <form onSubmit={handleSubmit(onSubmit)} className='p-8 border-0 '>
                    <div className='flex flex-col justify-center'>
                        <div className='mb-5'>
                            <Controller
                                name='image'
                                control={control}
                                rules={{ required: "Please enter the image" }}
                                render={({ field }) =>
                                    <div >
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


                                }
                            >
                            </Controller>

                            <p className='text-[red] px-3 font-[600] '>{errors.image?.message}</p>


                        </div>
                        <div className='mb-5'>
                            <Controller
                                control={control}
                                name='headingtitle'

                                rules={{
                                    required: "Please fill up title"
                                }}
                                render={({ field }) => <TextInput control={control} {...field} placeholder='Title' label="Heading-Title" size='lg' />}
                            >
                            </Controller>
                            <p className='text-[red] px-3 font-[600] '>{errors.headingtitle?.message}</p>
                        </div>
                        <div className='mb-5'>
                            <Controller
                                control={control}
                                name='text'
                                rules={{
                                    required: "Please fill up title"
                                }}
                                render={({ field }) => <TextInput control={control} {...field} placeholder='Enter text' label="Text" size='lg' />}
                            >
                            </Controller>
                            <p className='text-[red] px-3 font-[600] '>{errors.text?.message}</p>
                        </div>
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
                                                <img className='w-24 h-24 object-contain rounded-full bg-light_gray' src={ele.image} alt="Image name" />
                                            </td>
                                            <td>
                                                {ele.headingtitle}
                                            </td>
                                            <td>
                                                {ele.text}
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
        </main>
    )
}

export default AdminServices