import React,{useState , useEffect} from 'react';
import { Text, Image, SimpleGrid,TextInput,Button ,Table} from '@mantine/core';
import {useForm,Controller} from "react-hook-form";
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { createHeroSection } from '../utils/Create';
import { displayRecord } from '../utils/Display';
import {FaEdit} from 'react-icons/fa'; 
import {MdOutlineDeleteOutline} from 'react-icons/md'; 
import {deleteRecord} from '../utils/Delete';
const Hero = () => {
    const [files, setFiles] = useState([]);
    const [display,setDisplay] = useState([]);
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
            heading:"",
            subheading:"",
            bgImage:"",
        }
    })
    const onSubmit = async (data) => {
        await createHeroSection(files,"herosection",data);
        setFiles([]);
    }
    useEffect(() => {
        const display=displayRecord("herosection");
        display.then((data)=>{
            setDisplay(data);
        }).catch((err)=>console.error(err))
    }, [display]);

    const removeImage = () => {
        setFiles([]);
    }
  return (
    <main className='flex items-center justify-center flex-col' >
    <section className='text-4xl my-2 font-sans font-bold'>Hero Section</section>
    <section className='bg-light_gray w-[60%] shadow-2xl'>
        <form onSubmit={handleSubmit(onSubmit)} className='px-5 py-7 border-0 '>
            <div className='flex flex-col justify-center'>
                <div className='mb-5'>
                    <Controller
                        control={control}
                        name='heading'
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
                        name='subheading'
                        rules={{
                            required: "Please fill up title"
                        }}
                        render={({ field }) => <TextInput control={control} {...field} placeholder='Title-2' size='lg' />}
                    >
                    </Controller>
                    <p className='text-[red] px-3 font-semibold '>{errors.subheading?.message}</p>
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
                            <Dropzone {...field} accept={IMAGE_MIME_TYPE} onDrop={setFiles}>
                                <Text align="center">Drop images here</Text>
                            </Dropzone>

                            <SimpleGrid
                                cols={4}
                                breakpoints={[{ maxWidth: 'xl', cols: 1 }]}
                                mt={previews.length > 0 ? 'xl' : 0}
                            >
                                {previews}
                                {files.length > 0 && <Button className='text-black' onClick={removeImage}>Remove</Button>}
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
    <section className='bg-light_gray w-[60%] shadow-2xl m-9'>
                <Table horizontalSpacing="xl" verticalSpacing="lg" className='p-7' striped withColumnBorders>
                    <thead>
                        <tr >
                            <th>Title</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {display && display.map((data) => (
                        <tbody key={data.id}>
                            <tr>
                                <td>{data.heading}</td>
                                <td>{data.subheading}</td>
                                <td><img src={data.image} alt="Abc" className='w-44'/></td>
                                <td><Button className='bg-yellow font-sans text-black'><FaEdit />Update</Button></td>
                                <td><Button onClick={()=> deleteRecord(data.id,"herosection",data.image)} className='bg-red font-sans text-black'><MdOutlineDeleteOutline />Delete</Button></td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </section>
</ main >
  )
}

export default Hero