import React from 'react'
import { Text, Grid } from '@mantine/core'
import Giz from "../assets/images/Giz.png"
import Precise from "../assets/images/Precise.png"
import SSEE from "../assets/images/SSEE.png"
import Collaborate from "../assets/images/Collaborate.png"
import QMED from "../assets/images/QMED.png"
import ABF from "../assets/images/ABF.png"
import Dami from "../assets/images/Dami.png"
import AWS from "../assets/images/AWS.png"
import BitSquare from "../assets/images/BitSquare.png"
import CityTour from "../assets/images/CityTour.png"

const Companies = () => {
    const companyImages = [
        { id: 1, image: Giz },
        { id: 2, image: Precise },
        { id: 3, image: SSEE },
        { id: 4, image: Collaborate },
        { id: 5, image: QMED },
        { id: 6, image: ABF }
    ]
    const partners = [
        { id: 1, image: Dami },
        { id: 2, image: AWS },
        { id: 3, image: BitSquare },
        { id: 4, image: CityTour },
    ]
    return (
        <div className='bg-light_gray'>
            <div>
                <Text className='flex flex-col items-center gap-2 font-sans font-bold text-3xl text-black p-12 '>Companies that trusted us</Text>
                <Grid className='flex items-start justify-center gap-12 order-1 mx-56 mt-6 pb-12'>
                    {companyImages.map((data) => (
                        <Grid.Col span={3} key={data.id}>
                            <img src={data.image} alt='Company'></img>
                        </Grid.Col>
                    ))}
                </Grid>
            </div>
            <div>
                <Text className='flex flex-col items-center gap-2 font-sans font-bold text-3xl text-black p-12 '>Startup Partners</Text>
                <Grid className='flex items-center justify-between gap-6 order-1 mx-56 pb-12'>
                    {partners.map((data) => (
                        <Grid.Col md={2} key={data.id}>
                            <img src={data.image} alt='Partners'></img>
                        </Grid.Col>
                    ))}
                </Grid>
            </div>
        </div>

    )
}

export default Companies
