import React, { useState, useEffect } from 'react';
import DisplayData from '../../utils/DisplayData';
import { Text, Image, SimpleGrid, Button, Table } from '@mantine/core';
import { useForm, Controller } from "react-hook-form";
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { createStartup } from '../../utils/Create';
import { deleteFirebase } from '../../utils/Delete';

const AdminStartupPartner = () => {
    const [files, setFiles] = useState([]);
    const [tableData, setTableData] = useState([]);
    // console.log(files);

    //Event handling of delete button
    const handleDeleteButton = (id, image) => {
        deleteFirebase(id, "startup", image);
        fetchDatas();
        console.log("URL id", id, image);
    }

    //fetching data from DisplayData.js
    async function fetchDatas() {
        const fetchData = await DisplayData("startup");
        console.log(fetchData);
        setTableData(fetchData);
        console.log("Tablke", tableData);

    }
    useEffect(() => {
        fetchDatas();
    }, [])

    const previews = files.map((file, index) => {
        const imageUrl = URL.createObjectURL(file);
        return (
            <Image
                caption={files[0].name}
                key={index}
                src={imageUrl}
                imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
            />
        );
    });

    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            image: "",
        }
    })

    const onsubmit = (data) => {

        createStartup(files);
        setFiles([]);
    }

    const removeImage = () => {
        setFiles([]);
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
                                <Dropzone  {...field} accept={IMAGE_MIME_TYPE} onDrop={setFiles}>
                                    <Text align="center">Drop images here</Text>
                                </Dropzone>

                                <SimpleGrid
                                    cols={4}
                                    breakpoints={[{ maxWidth: 'xl', cols: 1 }]}
                                    mt={previews.length > 0 ? 'xl' : 0}
                                >
                                    {previews}
                                    {files.length > 0 && <Button className='text-black' onClick={removeImage}>Remove</Button>}
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
                            tableData.map((ele) => (
                                <tr key={ele.id}>
                                    <td>
                                        <img className='w-36 h-36 object-contain rounded-full bg-light_gray' src={ele.imageurl} alt="Image name" />
                                    </td>

                                    <td><Button className='bg-yellow font-sans text-black'><FaEdit />Update</Button></td>

                                    <td>
                                        <Button className='bg-red font-sans text-black' onClick={() => handleDeleteButton(ele.id, ele.image)}><MdOutlineDeleteOutline />Delete</Button>
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