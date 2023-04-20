import { TextInput, Button, Textarea, Group, Text } from '@mantine/core'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { MdAddPhotoAlternate } from 'react-icons/md'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'

const AdminPartner = () => {
    const { handleSubmit, formState: { errors }, control } = useForm({
        defaultValues: {
            image: "",
            heading: "",
            subHeading: "",
            description: ""
        }
    })
    const onSubmit = (data) => {
        console.log("New data added", data);
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
                                name='subHeading'
                                control={control}
                                rules={
                                    { required: "Fill up the subHeading" }
                                }
                                render={({ field }) => <TextInput control={control} {...field} placeholder='Write few words' size='lg' />}
                            >
                            </Controller>
                        </div>
                        <p className='text-[red] px-3 font-[600] '>{errors.subHeading?.message}</p>
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
                            <Dropzone
                                onDrop={(files) => console.log('accepted files', files)}
                                oonReject={(files) => console.log('rejected files', files)}
                                maxSize={3 * 1024 ** 2}
                                accept={IMAGE_MIME_TYPE}

                            >
                                <Group position='center' styles={{ minRows: 30 }}>
                                    <MdAddPhotoAlternate size="3rem" />
                                    <Text size="xl" inline>Drag or click here to upload images</Text>
                                </Group>
                            </Dropzone>
                        </div>
                        <Button type='submit' color='yellow' className='bg-yellow font-sans w-[20%] rounded-3xl mt-5'>CREATE</Button>
                    </div>
                </form>
            </section>
        </ main >
    )
}

export default AdminPartner
