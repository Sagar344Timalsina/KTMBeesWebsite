import React, { useEffect, useState } from 'react'
import { Text, Grid } from '@mantine/core'
import DisplayData from '../utils/DisplayData'
import { Link } from 'react-router-dom';

const Companies = () => {
    const [company, setCompany] = useState([]);
    const displayCompany = async () => {

        const listCompanies = await DisplayData("companies");
        setCompany(listCompanies);
    }
    const [startup, setStartup] = useState([]);
    const displayStartup = async () => {

        const listStartup = await DisplayData("startup");
        setStartup(listStartup);
    }
    useEffect(() => {
        displayCompany();
        displayStartup();
    }, []);

    return (
        <div className='bg-light_gray'>
            <div>
                <Text className='flex flex-col items-center gap-2 font-sans font-bold text-3xl text-black p-12 '>Companies that trusted us</Text>
                <Grid className='flex items-start justify-between gap-16 order-1 mx-56 mt-6 pb-12'>
                    {company.map((data) => (
                        <Grid.Col span={3} key={data.id} className='flex justify-center'>
                            <Link to={data.url}><img src={data.image} alt='Partners' className='flex justify-center' onClick={console.log(data.url)} /></Link>
                        </Grid.Col>
                    ))}
                </Grid>
            </div>
            <div>
                <Text className='flex flex-col items-center gap-2 font-sans font-bold text-3xl text-black p-12 '>Startup Partners</Text>
                <Grid className='flex items-center justify-between mx-56 pb-12'>
                    {startup.map((data) => (
                        <Grid.Col md={2} key={data.id}>
                            <Link to={data.url}><img src={data.image} alt='Partners' className='flex justify-center' onClick={console.log(data.url)} /></Link>
                        </Grid.Col>
                    ))}
                </Grid>
            </div>
        </div>

    )
}

export default Companies
