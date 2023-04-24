import React, { useState } from 'react'
import { TextInput, Button, Image, SimpleGrid, Text ,Table} from '@mantine/core'
import {
    useForm, Controller
} from 'react-hook-form'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

import firebaseImageUpload from '../../utils/firebaseImageUpload';

import createServices from '../../utils/createServices';
import deleteServicesImage from '../../utils/deleteServicesImage';
import { useEffect } from 'react';
import DisplayData from '../../utils/DisplayData';

const AdminServices = () => {
    const [imgUrl, setImgUrl] = useState();
    const [tableData,setTableData]=useState([]);

    const handleImageDelete = () => {
        deleteServicesImage(imgUrl);
        setImgUrl(null);
    }


    const { handleSubmit, formState: { errors }, control } = useForm({
        defaultValues: {
            bgImage: "",
            text: "",
            headingtitle: "",
        }
    });




    const onSubmit = (data) => {
        console.log("New data added", data);
        createServices(data, imgUrl);
        alert("Data inserted")
        fetchDatas();
    }
async function fetchDatas(){
    const fetchData= await DisplayData("services");
    console.log(fetchData);
    setTableData(fetchData);
    console.log("Tablke",tableData);

}
useEffect( () => {
fetchDatas();
}, [])



    return (
        <main className='flex items-center justify-center flex-col' >
            <section className='text-4xl my-6 font-sans font-bold'>Services</section>
            <section className='bg-light_gray w-[60%] shadow-[0_5px_24px_1px_rgba(0,0,0,0.2)] rounded-lg'>
                <form onSubmit={handleSubmit(onSubmit)} className='p-8 border-0 '>
                    <div className='flex flex-col justify-center'>
                        <div className='mb-5'>
                            {/* <Controller
                                name='bgImage'
                                control={control}
                                rules={{ required: "Please enter the image" }}
                                render={({ field }) => 
                                    //  <div >
                                    //     <Dropzone {...field} accept={IMAGE_MIME_TYPE} onDrop={setImgUrl }>
                                    //         <Text align="center">Drop images here</Text>
                                    //     </Dropzone>

                                    //     <SimpleGrid
                                    //         cols={4}
                                    //         breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
                                    //         className='pt-6'
                                    //     >
                                    //         {imgUrl && imgUrl !== null ? <img src={imgUrl} alt='Image' /> : null}
                                    //         {imgUrl && imgUrl !== null ? <button className='w-16 h-9 rounded-lg  bg-dark_gray text-white' onClick={handleImageDelete}>delete</button> : null}
                                    //     </SimpleGrid>
                                    // </div>
                                    

                                }
                            >
                            </Controller> */}
                                    <div>
                                        <Dropzone accept={IMAGE_MIME_TYPE} onDrop={async (setFilessss) => {
                                            const url = await firebaseImageUpload(setFilessss[0])
                                            setImgUrl(url);
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
                            {/* <p className='text-[red] px-3 font-[600] '>{errors.bgImage?.message}</p> */}


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
            <section>
                <div className='flex flex-col justify-center'>
                    <div className='mt-12'>
                    <Table horizontalSpacing="md" verticalSpacing="sm" fontSize="lg">
                        <thead>
                           <tr>
                            <td>Photo</td>
                            <td>Heading</td>
                            <td>Text</td>
                            <td>Edit</td>
                            <td>Delete</td>
                            </tr> 
                        </thead>        
                          <tbody>
                        {
                            
                            tableData.map((ele)=>(
                                <tr key={ele.id}>
                                    <td>
                                        <img className='w-36 h-36 object-contain rounded-full bg-light_gray' src={ele.image} alt="Image name" />
                                    </td>
                                    <td>
                                        {ele.heading}
                                    </td>
                                    <td>
                                        {ele.subheading}
                                    </td>
                                    <td>
                                        <button>Edit</button>
                                    </td>
                                    <td>
                                    <button>Delete</button>
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