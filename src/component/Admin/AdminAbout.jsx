import React, { useEffect, useState } from 'react'
import { TextInput, Textarea, Button, Table } from '@mantine/core'
import { useForm, Controller } from 'react-hook-form'
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { deleteFirebase} from '../../utils/Delete'
import createServices from '../../utils/createServices';
import DisplayData from '../../utils/DisplayData';
import UpdateData, { getIndividualData } from '../../utils/UpdateData';

const AdminAbout = () => {
    const [tableData, setTableData] = useState([]);
    const [isEdit,setIsEdit]=useState(false);
    const [id,setId]=useState();

    const { handleSubmit, formState: { errors }, control, reset,setValue } = useForm({
        defaultValues: {
            title: "",
            description: ""
        }
    })
    
    const onSubmit = (data) => {
        {isEdit===false?createServices(data, null, "about"):handleUpdate(data,id)}
        reset();
        fetchDatas();
    }
    //handle update in firebase
    const handleUpdate=(data,id)=>{
        UpdateData(data,id,"about");
        fetchDatas();
    }
    
    //Handle edit/update function
    const handleEditButton=async(id)=>{
        setId(id);
        setIsEdit(true);
        const res=await getIndividualData(id,"about");
        const {description,title}=res;
        setValue("title",title);
        setValue("description",description);
        console.log(res);
    }

    async function fetchDatas() {
        try {
            const fetchData = await DisplayData("about");
            setTableData(fetchData);
        } catch (error) {
        }
    }
    
    useEffect(() => {
            fetchDatas();
    }, []);

    const handleDeleteButton = async(id, image) => {
        await deleteFirebase(id, "about", image);
        fetchDatas();
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
                        {isEdit!==true? <Button type='submit' color='yellow' className='bg-yellow font-sans w-[20%] rounded-3xl'>CREATE</Button>
                   : <Button type='submit' color='yellow' className='bg-yellow font-sans w-[20%] rounded-3xl'>UPDATE</Button>}
                    </div>
                </form>
            </section>
            <section className='bg-light_gray w-[80%] shadow-2xl m-9'>
                <Table horizontalSpacing="xl" verticalSpacing="lg" fontSize="lg" className='p-7' striped withColumnBorders highlightOnHover>
                    <thead>
                        <tr >
                            <th>Title</th>
                            <th>Description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {tableData && tableData.map((data) => (
                        <tbody key={data.id}>
                            <tr>
                                <td>{data.title}</td>
                                <td>{data.description}</td>
                                <td><Button className='bg-yellow font-sans text-black'  onClick={()=>handleEditButton(data.id)}><FaEdit />Update</Button></td>
                                <td><Button className='bg-red font-sans text-black' onClick={() => handleDeleteButton(data.id, null)}><MdOutlineDeleteOutline />Delete</Button></td>
                            </tr>
                            </tbody>
                        ))}
                   
                </Table>
            </section>
        </main >
    )
}

export default AdminAbout
