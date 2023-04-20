import React,{useState} from 'react';
import { Text, Image, SimpleGrid,TextInput,Button} from '@mantine/core';
import {useForm,Controller} from "react-hook-form";
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
const Hero = () => {
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
    const {handleSubmit,control,formState:{errors}}=useForm({
        defaultValues:{
            title1:"",
            title2:"",
            bgImage:"",
        }
    })
    const onSubmit = ()=>{
        
    }
    const onError = ()=>{
        
    }
  return (
    <main className='flex items-center justify-center flex-col' >
    <section className='text-4xl my-2 font-sans font-bold'>Hero Section</section>
    <section className='bg-light_gray w-[60%] shadow-2xl'>
        <form onSubmit={handleSubmit(onSubmit, onError)} className='px-5 py-7 border-0 '>
            <div className='flex flex-col justify-center'>
                <div className='mb-5'>
                    <Controller
                        control={control}
                        name='title1'
                        rules={{
                            required: "Please fill up title"
                        }}
                        render={({ field }) => <TextInput control={control} {...field} placeholder='Title-1' size='lg' />}
                    >
                    </Controller>
                    <p className='text-[red] px-3 font-semibold '>{errors.title1?.message}</p>
                </div>

                <div className='mb-5'>
                    <Controller
                        control={control}
                        name='title2'
                        rules={{
                            required: "Please fill up title"
                        }}
                        render={({ field }) => <TextInput control={control} {...field} placeholder='Title-2' size='lg' />}
                    >
                    </Controller>
                    <p className='text-[red] px-3 font-semibold '>{errors.title2?.message}</p>
                </div>

                <div className='mb-2 font-light text-gray'>Background Image
                </div>

                <div className='mb-5'>
                    <Controller
                        name='bgImage'
                        control={control}
                        rules={
                            { required: "Image reqired" }
                        }
                        render={({ field }) =><>
                        <div>
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
                            </div>
                        </>
                }
                    >
                    </Controller>
                </div>
                <p className='text-[red] px-3 font-semibold '>{errors.description?.message}</p>
                <Button type='submit' color='yellow' className='bg-yellow font-sans w-[20%] rounded-3xl'>CREATE</Button>
            </div>
        </form>
    </section>
</ main >
  )
}

export default Hero