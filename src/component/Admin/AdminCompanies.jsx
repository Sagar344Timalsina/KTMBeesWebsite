import React, { useState, useEffect } from 'react';
import { Text, Image, SimpleGrid, Button, Table } from '@mantine/core';
import { useForm, Controller } from "react-hook-form";
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { createCompanies } from '../../utils/Create';
import { Display } from '../../utils/Display'
import { deleteFirebase, deleteStorageImage } from '../../utils/Delete'
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md'


const AdminCompanies = () => {
    const [files, setFiles] = useState([]);

    const previews = files.map((file, index) => {
        const imageUrl = URL.createObjectURL(file);

        return (
            <Image
                caption={files[0].path}
                key={index}
                src={imageUrl}
                imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
            />
        );
    });
    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            title1: "",
            title2: "",
            bgImage: "",
        }
    })
    const onSubmit = () => {
        createCompanies(files);
    }

    const [display, setDisplay] = useState([]);
    useEffect(() => {
        Display("companies").then((data) => { setDisplay(data) }).catch((error) => { console.error(error) });
    }, []);

    const deleteRecord = (id, imageDelete) => {
        deleteFirebase(id, "companies", imageDelete);
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
                                    <Dropzone {...field} accept={IMAGE_MIME_TYPE} onDrop={setFiles}>
                                        <Text align="center">Drop images here</Text>
                                    </Dropzone>

                                    <SimpleGrid
                                        cols={4}
                                        breakpoints={[{ maxWidth: 'xl', cols: 1 }]}
                                        mt={previews.length > 0 ? 'xl' : 0}
                                    >
                                        {previews}
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
            <section className='bg-light_gray w-[60%] shadow-2xl m-9'>
                <Table horizontalSpacing="xl" verticalSpacing="lg" fontSize="lg" className='p-7' striped withColumnBorders highlightOnHover>
                    <thead>
                        <tr >
                            <th>Companies</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody >
                        {display && display.map((data) => (
                            <tr key={data.id}>
                                <td className='w-56'><img src={data.image} alt="Partners" className='w-44 h-44 rounded-full'></img></td>
                                <td className='w-36'><Button className='bg-yellow font-sans text-black'><FaEdit />Update</Button></td>
                                <td className='w-36'><Button className='bg-red font-sans text-black' onClick={() => deleteRecord(data.id, null)}><MdOutlineDeleteOutline />Delete</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </section>
        </ main >
    )
}

export default AdminCompanies