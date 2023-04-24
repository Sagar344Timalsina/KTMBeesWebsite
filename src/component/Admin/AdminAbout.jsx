import { TextInput, Button, Textarea } from '@mantine/core'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { createAbout } from '../utils/Create.jsx'

const AdminAbout = () => {
    const { handleSubmit, formState: { errors }, control } = useForm({
        defaultValues: {
            title: "",
            description: ""
        }
    })
    const onSubmit = (data) => {
        createAbout(data);
    }

    const onError = () => {
        console.log("Error has occured", errors);
    }
    return (
        <main className='flex items-center justify-center flex-col' >
            <section className='text-4xl my-6 font-sans font-bold'>About Us</section>
            <section className='bg-light_gray w-[60%] shadow-2xl'>
                <form onSubmit={handleSubmit(onSubmit, onError)} className='px-5 py-7 border-0 '>
                    <div className='flex flex-col justify-center'>
                        <div className='mb-5'>
                            <Controller
                                control={control}
                                name='title'
                                rules={{
                                    required: "Please fill up title"
                                }}
                                render={({ field }) => <TextInput control={control} {...field} placeholder='Title' size='lg' />}
                            >
                            </Controller>
                            <p className='text-[red] px-3 font-semibold '>{errors.title?.message}</p>
                        </div>
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
                        <p className='text-[red] px-3 font-semibold '>{errors.description?.message}</p>
                        <Button type='submit' color='yellow' className='bg-yellow font-sans w-[20%] rounded-3xl'>CREATE</Button>
                    </div>
                </form>
            </section>
        </main >
    )
}

export default AdminAbout
