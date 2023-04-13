import React from 'react'
import { Flex, Text, Tabs } from '@mantine/core'

const AboutUs = () => {
  const contents = [
    { id: 1, name: "Our Story", describe: "In addition, based on your idea or your preference we are ready to share the risk for your project. Reach out to us via WhatsApp or any other platform and let us assist you in your dream project.Do not hesitate to reach out to us cause this really could be project of your lifetime that is worth working at." },
    { id: 2, name: "Team", describe: "In addition, based on your idea or your preference we are ready to share the risk for your project. Reach out to us via WhatsApp or any other platform and let us assist you in your dream project.Do not hesitate to reach out to us cause this really could be project of your lifetime that is worth working at." },
    { id: 3, name: "Mission & Vision", describe: "In addition, based on your idea or your preference we are ready to share the risk for your project. Reach out to us via WhatsApp or any other platform and let us assist you in your dream project.Do not hesitate to reach out to us cause this really could be project of your lifetime that is worth working at." },

  ]
  const tabValues = [
    { id: 1, name: "Our Story" },
    { id: 2, name: "Team" },
    { id: 3, name: "Mission & Vision" },
  ]
  return (
    <div className='bg-[#f1f5f9]'>
      <Flex className=' flex-col h-40 bg-[white] justify-center items-center px-[1px] py-[30px] gap-[8px]'>
        <Text className='text-[#64748B] font-[Helvetica] font-bold tracking-[0.75px] text-[1.5rem] leading-7 w-[202px] h-[28px] order-0'>About Company</Text>
        <Text className='w-[492px] h-[37px] font-bold text-[32px] leading-9 text-center tracking-[0.75px] text-black font-[Helvetica] order-1'>Technology that works for you</Text>
        <Text className='w-[175px] h-[21px] font-[Helvetica] font-normal text-lg leading-5 text-center tracking-[0.75px] text-[#475569] order-2 '>Don't just dream, do</Text>
      </Flex>
      <Tabs defaultValue="Our Story" className='mx-auto h-[427px]'>
        <Tabs.List className='mt-[51px] justify-center w-[40%] mx-auto font-bold ' >
          {tabValues.map((tabValue) => (
            <Tabs.Tab key={tabValue.id} value={tabValue.name} color="yellow" className='focus:text-[#F0B62F] p-[20px] w-auto mr-[45px] h-[23px] font-[Helvetica]  text-[20px] leading-[23px] tracking-[0.75px] '>{tabValue.name}</Tabs.Tab>

          ))}
        </Tabs.List>
        {contents.map((content) => (
          <Tabs.Panel key={content.id} value={content.name} pt='xl' className='mb-[10px] w-[60%] mx-auto' >
            <Text className=' w-auto h-[28px] font-[Helvetica] font-bold text-[24px] leading-[28px] text-[#475569] order-0'>{content.name}</Text>
            <Text className=' mt-[10px] w-[980px] h-[112px] font-[Helvetica] font-normal text-[18px] leading-[28px] tracking-[0.75px] text-[#475569] order-1 self-stretch'>Our combined experience of over 40 years' diligent team is more than happy to help you make your dream come true.
              {content.describe}
            </Text>
          </Tabs.Panel>
        )

        )}
      </Tabs>
    </div>

  )
}

export default AboutUs