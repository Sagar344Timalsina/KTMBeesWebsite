import React, { useState, useEffect } from 'react';
import { Text, SimpleGrid, Button, Table, TextInput } from '@mantine/core';
import { useForm, Controller } from "react-hook-form";
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { deleteFirebase, deleteStorageImage } from '../../utils/Delete';
import firebaseImageUpload from '../../utils/firebaseImageUpload';
import createServices from '../../utils/createServices';
import DisplayData from '../../utils/DisplayData';
import UpdateData, { getIndividualData } from '../../utils/UpdateData';

const AdminStartupPartner = () => {
    const [imgUrl, setImgUrl] = useState();
    const [tableData, setTableData] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState();

    const handleImageDelete = () => {
        deleteStorageImage(imgUrl);
        setImgUrl(null);
    }


    useEffect(() => {
        fetchDatas();
    }, [])


    const { handleSubmit, control, formState: { errors }, reset, setValue } = useForm({
        defaultValues: {
            url: "",
            image: "",
        }
    })

    const onSubmit = (data) => {
        isEdit === false ? createServices(data, imgUrl, "startup") : handleUpdate(data, id);
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
    const handleDeleteButton = async (id, image) => {
        await deleteFirebase(id, "startup", image);
        fetchDatas();
    }
    //handle update in firebase
    const handleUpdate = (data, id) => {
        UpdateData(data, id, "startup");
        fetchDatas();
    }

    //Handle edit/update function
    const handleEditButton = async (id) => {
        setId(id);
        setIsEdit(true);
        const res = await getIndividualData(id, "startup");
        setImgUrl(res.image);
        Object.keys(res).forEach((key) => {
            setValue(key, res[key]);
        })

        deleteStorageImage(res.image);
        console.log(res);
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
                        <div className='mb-5'>
                            <Controller
                                control={control}
                                name='url'
                                rules={{
                                    required: "Please fill up title"
                                }}
                                render={({ field }) => <TextInput control={control} {...field} label="Image Url" placeholder='www.example.com' size='lg' />}
                            >
                            </Controller>
                            <p className='text-[red] px-3 font-semibold '>{errors.url?.message}</p>
                        </div>
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
                                        setValue("image", url)

                                    }}
                                >
                                    <Text align="center">Drop images here</Text>
                                </Dropzone>

                                <SimpleGrid
                                    cols={4}
                                    breakpoints={[{ maxWidth: 'xl', cols: 1 }]}
                                    className='pt-6'
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
                    {isEdit !== true ? <Button type='submit' color='yellow' className='bg-yellow font-sans w-[20%] rounded-3xl'>CREATE</Button>
                        : <Button type='submit' color='yellow' className='bg-yellow font-sans w-[20%] rounded-3xl'>UPDATE</Button>}
                </form>
            </section>
            <section className='bg-light_gray w-[80%] shadow-2xl m-9'>
                <div className='flex flex-col justify-center'>
                    <div >
                        <Table horizontalSpacing="xl" verticalSpacing="lg" className='p-7 ' striped withColumnBorders>
                            <thead>
                                <tr>
                                    <th>Photo</th>
                                    <th>Url</th>
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
                                            <td>
                                                {ele.url}
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
        </ main >

    )
}

export default AdminStartupPartner