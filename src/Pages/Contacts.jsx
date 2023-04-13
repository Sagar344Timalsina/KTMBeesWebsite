import React from 'react'
import { Text,TextInput,Textarea ,Checkbox} from '@mantine/core'
import captcha from "../assets/images/Captcha.png";
import { Controller, useForm } from "react-hook-form";
import Navbar from '../component/Navbar';
import { Footer } from '../component/Footer';

const Contacts = () => {

  const {handleSubmit,formState:{errors},control}=useForm({
    defaultValues:{
        email:"",
        name:"",
        textArea:"",
        company:""
      }
  });

  const onSubmit=(data)=>{
    console.log(data);
  }

  return (
    // <Navbar/>
    <>
    <Navbar/>
    <div className='bg-[#2D3B52]   flex items-center justify-center  flex-col'>
      <section className='my-8'>
        <Text className="text-[#ffff] text-center text-[32px] space-y-7 font-[Helvetica] "  fw={700}>Contact</Text>
        <Text className="text-[#ffff] text-center text-[18px] space-y-7 font-[Helvetica]" fw={400}>Have a question? Write to us</Text>
      </section>
      <section className='w-[60%]  rounded-[16px] mb-[3rem] bg-white' >
        <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' className='px-[1rem] py-[3rem] focus:none border-0 '>
          <div className='flex mb-[1rem]'>
            <div className='w-[50%]'>
              <Controller
                control={control}
                name='name'
                rules={{
                  required:"**Please enter a name",
                }}
                render={({field})=><TextInput control={control} {...field} className='w-[100%] px-3  '  fw={600}
                placeholder="Full Name"
                label="Name"
                radius="md"
                size="md"
              />}
              />
            <p className='text-red-500 px-3 font-[600] '>{errors.name?.message}</p>
            </div>
            <div className='w-[50%]'>
              <Controller
                name='email'
                control={control}
                rules={{
                  required:"**Please enter email ",
                  pattern:{
                    value:/^[^@]+@[^@]+\.[^@.]{2,}$/,
                    message:"**Email is invalid"
                  }
                }}
                render={({field})=><TextInput control={control} {...field}  className='w-[100%] px-3 ' fw={600}
                    placeholder="Email"
                    label="Email"
                    radius="md"
                    size="md"
                  />}
              />
             <p className='text-red-500 px-3 font-[600] '>{errors.email?.message}</p>
            </div>
        </div>


        <div className='flex mb-[1rem] '>
          <div className='w-[50%]'>
            <Controller
              name='contact'
              control={control}
              rules={{
                required:"Please enter the number",
                pattern:{
                  value:/^([+]\d{2})?\d{10}$/,
                  message:"Mobile number must be 10 digit or 7 digit"
                },
                
              }}
              render={({field})=> <TextInput control={control} {...field} type='number' className='w-[100%] px-3 ' fw={600}
              placeholder="Mobile Number"
              label="Contact"
              radius="md"
              size="md"
            />}          
            />
          <p className='text-red-500 px-3 font-[600] '>{errors.contact?.message}</p>
          </div>

          <div className='w-[50%]'>
              <Controller
              name='company'
              control={control}
              rules={{
                required:"**Please enter the company"
              }}
              render={({field})=><TextInput control={control} {...field}  className='w-[100%] px-3 ' fw={600}
                  placeholder="Your Company"
                  label="Comany Name"
                  radius="md"
                  size="md"
                />}
              />
            <p className='text-red-500 px-3 font-[600] '>{errors.company?.message}</p>
          </div>
        </div>

        <Controller
        name='textArea'
        control={control}
        render={({field})=><Textarea control={control} {...field} className='px-3 mb-[1rem] ' fw={600}
                placeholder="Tell us about your product, current challenges and objectives."
                label="Message"
                minRows={6}
                size="md"
                radius="md"
              />}
        
        />


        <div className='bg-[#F2F2F2] w-[452px] h-[107px] mx-3 mb-[0rem]  border border-[#D9DBE9] flex justify-around items-center'>
        <Controller
          name='checkbox'
          rules={{
            required:"Please check the Captcha box"
          }}
          control={control}
          render={({field})=><Checkbox control={control} {...field} fw={700} className="w-[60%]"
            label="I'm not a robot "
            size="md"
            border=""
          />}
        
        />
        <img className='w-[85px] h-[85px]'  src={captcha} alt="ReCaptcha" />
        </div>
        <p className='text-red-500 px-3 font-[600] mb-[1rem] '>{errors.checkbox?.message}</p>

        <button type='submit' className='bg-[#F0B62F] w-[200px] h-[64px] mx-3 rounded-[40px] tracking-[.06rem] font-[Poppins] text-white text-[20px] font-semibold'>
          Send
        </button>

        </form>
      </section>
    </div>
    <Footer/>
    </>
  )
}

export default Contacts