import React,{useState} from 'react';
import { Text, Image, SimpleGrid,TextInput,Button} from '@mantine/core';
import {useForm,Controller} from "react-hook-form";
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

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
    const {handleSubmit,control,formState:{errors}}=useForm({
        defaultValues:{
            title1:"",
            title2:"",
            bgImage:"",
        }
    })
    const onSubmit = ()=>{
        
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
        </form>
    </section>
</ main >
  )
}

export default AdminCompanies