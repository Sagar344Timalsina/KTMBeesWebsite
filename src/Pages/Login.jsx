import React from 'react'
import Bees from '../assets/images/Bee.png';
import { Controller ,useForm } from 'react-hook-form';
import { Button, PasswordInput, TextInput } from '@mantine/core';
const Login = () => {
    const {handleSubmit , control , formState: {errors} }=useForm({
        defaultValues:{
            email:"",
            password:"",
        }
    });

    const onSubmit = (data) => {
      console.log(data);
    }

  return (
    <div className='bg-light_gray flex items-center justify-center h-[100vh] '>
        <div className='flex-col bg-white h-2/3 w-96'>
            <div className='text-center'>Welcome</div>
            <section className='images  flex items-baseline'>
            <img src={Bees} alt='Bees logo' className='w-16 m-auto relative left-16'/>
            <img src={Bees} alt='Bees logo' className='w-16 m-auto relative left-6 rotate-45'/>
            <img src={Bees} alt='Bees logo' className='w-16 m-auto relative -left-5'/>
            <img src={Bees} alt='Bees logo' className='w-16 m-auto relative  -left-16 rotate-45 '/>
            </section>
            <form className='login-container mt-4' onSubmit={handleSubmit(onSubmit)}>
                <div className='email w-[80%] m-auto mb-5'>
                <Controller
                  name='email'
                  control={control}
                  rules={{
                    required: "*Please enter email*",
                    pattern: {
                      value: /^[^@]+@[^@]+\.[^@.]{2,}$/,
                      message: "*Email is invalid*"
                    }
                  }}
                  render={({ field }) => <TextInput control={control} {...field} className='w-[100%] px-3 ' fw={600}
                    placeholder="Email"
                    label="Email"
                    radius="md"
                    size="md"
                  />}
                />
                <p className='text-[red] px-3 font-light text-sm'>{errors.email?.message}</p>
                </div>

                <div className='password w-[80%] m-auto'>
                <Controller
                  name='password'
                  control={control}
                  rules={{
                    required: "*Please enter password* ",
                    minLength: {
                      value:3 ,
                      message: "*Password must be greater than 3 character*"
                    }
                  }}
                  render={({ field }) => <PasswordInput control={control} {...field} className='w-[100%] px-3 ' fw={600}
                    placeholder="Password"
                    label="Pasword"
                    radius="md"
                    size="md"
                  />}
                />
                <p className='text-[red] px-3 font-light text-sm'>{errors.password?.message}</p>
                </div>
            <div className='w-[75%] m-auto text-white'>
                <button type="submit" className='mt-10 m-auto w-[100%] h-10 rounded-xl hover:bg-dark_gray bg-black'>Login</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Login