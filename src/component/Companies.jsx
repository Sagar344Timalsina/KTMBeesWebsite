import React, { useEffect, useState } from 'react'
import { Text, Grid } from '@mantine/core'
import Giz from "../assets/images/Giz.png"
import Precise from "../assets/images/Precise.png"
import SSEE from "../assets/images/SSEE.png"
import Collaborate from "../assets/images/Collaborate.png"
import QMED from "../assets/images/QMED.png"
import ABF from "../assets/images/ABF.png"
import Dami from "../assets/images/Dami.png"
import AWS2 from "../assets/images/AWS2.png"
import BitSquare from "../assets/images/BitSquare.png"
import CityTour from "../assets/images/CityTour.png"
import DisplayData from '../utils/DisplayData'

const Companies = () => {
    const [companiesDisplay,setCompaniesDisplay] =useState([]);
    const fetchData= async () =>{
        const companyData=await DisplayData("companies");
        setCompaniesDisplay(companyData);
        const companyData=await DisplayData("companies");
        setCompaniesDisplay(companyData);

    }
    useEffect(()=>{
        fetchData();
    }
,[])
    return (
        <div className='bg-light_gray'>
            <div>
                <Text className='flex flex-col items-center gap-2 font-sans font-bold text-3xl text-black p-12 '>Companies that trusted us</Text>
                <Grid className='flex items-start justify-between gap-16 order-1 mx-56 mt-6 pb-12'>
                    {display.map((data) => (
                        <Grid.Col span={3} key={data.id} className='flex justify-center'>
                            <img src={data.image} alt='Company' ></img>
                        </Grid.Col>
                    ))}
                </Grid>
            </div>
            <div>
                <Text className='flex flex-col items-center gap-2 font-sans font-bold text-3xl text-black p-12 '>Startup Partners</Text>
                <Grid className='flex items-center justify-between mx-56 pb-12'>
                    {d.map((data) => (
                        <Grid.Col md={2} key={data.id}>
                            <img src={data.image} alt='Partners' className='flex justify-center'></img>
                        </Grid.Col>
                    ))}
                </Grid>
            </div>
        </div>

    )
}

export default Companies
