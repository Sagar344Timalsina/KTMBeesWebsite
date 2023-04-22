import React, { useState } from 'react'
import { TextInput, Button, Image, SimpleGrid, Text } from '@mantine/core'
import { useForm, Controller } from 'react-hook-form'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useEffect } from 'react';

const AdminServices = () => {

    const [files, setFiles] = useState([]);

    const previews = files.map((file, index) => {
        const imageUrl = URL.createObjectURL(file);
        console.log(files)
        return (
            <Image
                caption={files[0].path}
                key={index}
                src={imageUrl}
                imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
            />
        );
    });

    const { handleSubmit, formState: { errors },watch, control } = useForm({
        defaultValues: {
            bgimage:"",
            text: "",
            headingtitle: "",
        }
    });

useEffect(()=>{
    const subscribe=watch((data)=>console.log(data));
    return()=>{subscribe.unsubscribe();}
},[watch])


    const onSubmit = (data) => {
        console.log("New data added", data);
    }
    // const onError = () => {
    //     console.log("Error has occured", errors);
    // }
    return (
        <main className='flex items-center justify-center flex-col' >
            <section className='text-4xl my-6 font-sans font-bold'>Services</section>
            <section className='bg-light_gray w-[60%] shadow-[0_5px_24px_1px_rgba(0,0,0,0.2)] rounded-lg'>
                <form onSubmit={handleSubmit(onSubmit)} className='p-8 border-0 '>
                    <div className='flex flex-col justify-center'>
                        <div className='mb-5'>
                            {/* <Controller
                                control={control}
                                name='bgImage'
                                rules={{
                                    required: "Please Insert image"
                                }}
                                render={({ field }) => <>
                                    <Dropzone accept={IMAGE_MIME_TYPE} onDrop={setFiles}>
                                        <Text align="center">Drop images here</Text>
                                    </Dropzone>
                                    <SimpleGrid
                                        cols={4}
                                        breakpoints={[{ maxWidth: 'xl', cols: 1 }]}
                                        mt={previews.length > 0 ? 'xl' : 0}
                                    >
                                        {previews}
                                    </SimpleGrid>
                                </>}
                            >
                            </Controller> */}
                            {/* <Controller
                                control={control}
                                name='bgimage'
                                rules={{
                                    required:"Please enter image"
                                }}
                                render={({ field }) => <>
                                    <div  {...field}>
                                    <Dropzone  accept={IMAGE_MIME_TYPE} onDrop={setFiles}>
                                        <Text align="center">Drop images here</Text>
                                    </Dropzone>
                                    <SimpleGrid
                                        cols={4}
                                        breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
                                        mt={previews.length > 0 ? 'xl' : 0}
                                    >
                                        {previews}
                                    </SimpleGrid>
                                    </div>
                                </>}
                            >
                            </Controller> */}

                    <Controller
                        name='bgimage'
                        control={control}
                        // rules={{}
                           
                        // }
                        render={({ field }) =><>
                            <Dropzone   control={control} {...field} accept={IMAGE_MIME_TYPE} onDrop={setFiles}>
                                <Text align="center">Drop images here</Text>
                            </Dropzone>

                            <SimpleGrid
                                cols={4}
                                breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
                                mt={previews.length > 0 ? 'sm' : 0}
                            >
                                {previews}
                                {files.length>0 && <Button className='text-black' >Remove</Button>}
                            </SimpleGrid>
    
                            <p className='text-[red] px-3 font-[600] '>{errors.bgimage?.message}</p>
                        </>
                }
                    > 
                     </Controller>
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
        </main>
    )
}

export default AdminServices