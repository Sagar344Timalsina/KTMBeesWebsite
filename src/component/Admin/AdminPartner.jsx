import { TextInput, Button, Textarea, Text, Image, SimpleGrid, Table } from '@mantine/core'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { MdAddPhotoAlternate } from 'react-icons/md'
import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md'
import firebaseImageUpload from '../../utils/firebaseImageUpload'
import { deleteFirebase, deleteStorageImage } from '../../utils/Delete'
import createServices from '../../utils/createServices'
import DisplayData from '../../utils/DisplayData'
import UpdateData, { getIndividualData } from '../../utils/UpdateData'


const AdminPartner = () => {
    const [display, setDisplay] = useState([]);
    const [imageUrl, setImageUrl] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState();

    const { handleSubmit, formState: { errors }, control,reset,setValue } = useForm({
        defaultValues: {
            heading: "",
            subheading: "",
            description: "",
            image: ""
        }
    })
  
    const onSubmit = (data) => {
        { isEdit === false ? createServices(data, imageUrl, "partner") : handleUpdate(data, id); };
        reset();
        fetchDatas();
        setImageUrl(null);
    }

    const handleDeleteButton = async (id, imageDelete) => {
        await deleteFirebase(id, "partner", imageDelete);
        fetchDatas();
    }
    const handleImageDelete = () => {
        deleteStorageImage(imageUrl);
        setImageUrl(null);
    }
    async function fetchDatas() {
        try {
            const fetchData = await DisplayData("partner");
            setDisplay(fetchData);
        } catch (error) {

        }

    }
  //handle update in firebase
  const handleUpdate = (data, id) => {
    UpdateData(data, id, "partner");
    fetchDatas();
}

//Handle edit/update function
const handleEditButton = async (id) => {
    setId(id);
    setIsEdit(true);
    const res = await getIndividualData(id,"partner");
    setImageUrl(res.image);
    Object.keys(res).forEach((key) => {
        setValue(key, res[key]);
      
    });

    deleteStorageImage(res.image);
    console.log(res);
}

    useEffect(() => {
       fetchDatas();
    }, []);

    
    return (
        <main className='flex items-center justify-center flex-col' >
            <section className='text-4xl my-6 font-sans font-bold'>Partner Section</section>
            <section className='bg-light_gray w-[60%] shadow-2xl'>
                <form onSubmit={handleSubmit(onSubmit)} className='px-5 py-7 border-0 '>
                    <div className='flex flex-col justify-center'>
                        <div className='mb-5'>
                            <Controller
                                control={control}
                                name='heading'
                                rules={{
                                    required: "Please fill up header"
                                }}
                                render={({ field }) => <TextInput control={control} {...field} label="Heading" placeholder='Heading' size='lg' />}
                            >
                            </Controller>
                            <p className='text-[red] px-3 font-[600] '>{errors.heading?.message}</p>
                        </div>
                        <div className='mb-5'>
                            <Controller
                                name='subheading'
                                control={control}
                                rules={
                                    { required: "Fill up the subHeading" }
                                }
                                render={({ field }) => <TextInput control={control} {...field} label="Sub-Heading" placeholder='Write few words' size='lg' />}
                            >
                            </Controller>
                        </div>
                        <p className='text-[red] px-3 font-[600] '>{errors.subheading?.message}</p>
                        <div className='mb-5'>
                            <Controller
                                name='description'
                                control={control}
                                rules={
                                    { required: "Fill up the description" }
                                }
                                render={({ field }) => <Textarea control={control} {...field} label="Descriptionn" placeholder='Description' minRows={13} size='lg' />}
                            >
                            </Controller>
                        </div>
                        <p className='text-[red] px-3 font-[600] '>{errors.description?.message}</p>
                        <div>
                            <Controller
                                name='image'
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) =>
                                    <>
                                        <Dropzone
                                            {...field}
                                            onDrop={async (setImage) => {
                                                const url = await firebaseImageUpload(setImage[0]);
                                                setImageUrl(url);
                                                setValue("image",url)
                                            }}
                                            onReject={(field) => console.log('rejected files', field)}
                                            accept={IMAGE_MIME_TYPE}
                                        >
                                            <div className='flex justify-center items-center'>
                                                <MdAddPhotoAlternate size="3rem" />
                                                <Text size="xl" inline>Drag or click here to upload images</Text>
                                            </div>
                                        </Dropzone>

                                        <SimpleGrid
                                            cols={4}
                                            breakpoints={[{ maxWidth: 'md', cols: 1 }]}
                                            className='mt-6 mb-5'
                                        >
                                            {imageUrl && imageUrl !== null ? <img src={imageUrl} alt="Uploaded Images" /> : null}
                                            {imageUrl && imageUrl !== null ? <button className='w-16 h-9 rounded-lg  bg-dark_gray text-white' onClick={handleImageDelete}>Delete</button> : null}
                                        </SimpleGrid>
                                    </>}
                            >

                            </Controller>

                        </div>
                        {isEdit !== true ? <Button type='submit' color='yellow' className='bg-yellow font-sans w-[20%] rounded-3xl'>CREATE</Button>
                        : <Button type='submit' color='yellow' className='bg-yellow font-sans w-[20%] rounded-3xl'>UPDATE</Button>}
              
                    </div>
                </form>
            </section>
            <section className='bg-light_gray w-[100%] shadow-2xl m-9'>
                <Table horizontalSpacing="xl" verticalSpacing="lg" fontSize="lg" className='p-7' striped withColumnBorders highlightOnHover>
                    <thead>
                        <tr >
                            <th>Heading</th>
                            <th>Sub-heading</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody >
                        {display && display.map((data) => (
                            <tr key={data.id}>
                                <td >{data.heading}</td>
                                <td >{data.subheading}</td>
                                <td>{data.description}</td>
                                <td ><img src={data.image} alt="Partners" className='w-24 h-24 rounded-full object-contain'></img></td>
                                <td ><Button className='bg-yellow font-sans text-black'  onClick={() => handleEditButton(data.id)}><FaEdit />Update</Button></td>
                                <td ><Button className='bg-red font-sans text-black' onClick={() => handleDeleteButton(data.id, data.image)}><MdOutlineDeleteOutline />Delete</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </section>
        </ main >
    )
}


export default AdminPartner
