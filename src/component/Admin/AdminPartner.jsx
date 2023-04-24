import { TextInput, Button, Textarea, Text, Image, SimpleGrid } from '@mantine/core'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { MdAddPhotoAlternate } from 'react-icons/md'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { createPartner } from '../utils/Create.jsx'

const AdminPartner = () => {
    const [files, setFiles] = useState([]);
    const { handleSubmit, formState: { errors }, control } = useForm({
        defaultValues: {
            heading: "",
            subheading: "",
            description: "",
            image: ""
        }
    })

    const previews = files.map((file, index) => {
        const imageURL = URL.createObjectURL(file);
        return (
            <Image src={imageURL} caption={files[0].path} key={index} imageProps={{ onLoad: () => URL.revokeObjectURL(imageURL) }}
            />
        )
    })

    const onSubmit = async (data) => {
        createPartner(data, files[0]);

    }
    const removeImage = () => {
        setFiles([]);
    }
    const onError = () => {
        console.log("Error has occured", errors);
    }
    return (
        <main className='flex items-center justify-center flex-col' >
            <section className='text-4xl my-6 font-sans font-bold'>Partner Section</section>
            <section className='bg-light_gray w-[60%] shadow-2xl'>
                <form onSubmit={handleSubmit(onSubmit, onError)} className='px-5 py-7 border-0 '>
                    <div className='flex flex-col justify-center'>
                        <div className='mb-5'>
                            <Controller
                                control={control}
                                name='heading'
                                rules={{
                                    required: "Please fill up header"
                                }}
                                render={({ field }) => <TextInput control={control} {...field} placeholder='Heading' size='lg' />}
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
                                render={({ field }) => <TextInput control={control} {...field} placeholder='Write few words' size='lg' />}
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
                                render={({ field }) => <Textarea control={control} {...field} placeholder='Description' minRows={13} size='lg' />}
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
                                            onDrop={setFiles}
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
                                            breakpoints={[{ maxWidth: 'xl', cols: 1 }]}
                                            mt={previews.length > 0 ? 'xl' : 0}
                                        >
                                            {previews}
                                            {files.length > 0 && <Button className='text-black' onClick={removeImage}>Remove</Button>}
                                        </SimpleGrid>
                                    </>}
                            >

                            </Controller>

                        </div>
                        <Button type='submit' color='yellow' className='bg-yellow font-sans w-[20%] rounded-3xl mt-5'>CREATE</Button>
                    </div>
                </form>
            </section>
        </ main >
    )
}


export default AdminPartner
