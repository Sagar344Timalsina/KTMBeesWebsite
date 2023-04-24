import React,{useState , useEffect} from 'react';
import { Text, Image, SimpleGrid,Button ,Table} from '@mantine/core';
import {useForm,Controller} from "react-hook-form";
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { createCompanies } from '../utils/Create';
import { displayComapnies } from '../utils/Display';
import {FaEdit} from 'react-icons/fa'; 
import {MdOutlineDeleteOutline} from 'react-icons/md'; 

const AdminCompanies = () => {
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
            title1:"",
            title2:"",
            bgImage:"",
        }
    })
    const onSubmit = ()=>{
        createCompanies(files);
        setFiles([]);
    }
    useEffect(() => {
        const display=displayComapnies();
        display.then((data)=>{
            setDisplay(data);
        }).catch((err)=>console.error(err))
    }, [display]);
    
    const removeImage = () => {
        setFiles([]);
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
        </form>
    </section>
    <section className='bg-light_gray w-[60%] shadow-2xl m-9'>
                <Table horizontalSpacing="xl" verticalSpacing="lg" className='p-7' striped withColumnBorders>
                    <thead>
                        <tr >
                            <th>Image</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {display && display.map((data) => (
                        <tbody key={data.id}>
                            <tr>
                                <td><img src={data.image} alt="Abc" className='w-24'/></td>
                                <td><Button className='bg-yellow font-sans text-black'><FaEdit />Update</Button></td>
                                <td><Button className='bg-red font-sans text-black'><MdOutlineDeleteOutline />Delete</Button></td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </section>
</ main >
  )
}

export default AdminCompanies