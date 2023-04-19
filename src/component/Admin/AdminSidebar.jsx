import React, {useState} from 'react'
import {   AppShell,
    Navbar,
    Header,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme
     } from '@mantine/core';

const AdminSidebar = () => {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
  return (
    <AppShell
        styles={{
            main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            },
        }}
  navbarOffsetBreakpoint="sm"
  asideOffsetBreakpoint="sm"
   
  header={
    <Header height={{ base: 50, md: 70 }} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }} className='text-4xl'>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <img src="../assests/logo/bees.png" alt="Bees" className='w-44' />
      </div>
    </Header>
  }
  navbar={
    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
     
      <Navbar.Section grow mt="sm" className='text-xl  '>
        <Text className='px-3 font-sans py-3 hover:bg-yellow transition-all hover:text-white hover:rounded-lg cursor-pointer '>Landing Page</Text>
        <Text className='px-3 font-sans py-3 hover:bg-yellow transition-all hover:text-white hover:rounded-lg cursor-pointer '>Our Projects</Text>
        <Text className='px-3 font-sans py-3 hover:bg-yellow transition-all hover:text-white hover:rounded-lg cursor-pointer '>Partner With Us</Text>
        <Text className='px-3 font-sans py-3 hover:bg-yellow transition-all hover:text-white hover:rounded-lg cursor-pointer '>Services</Text>
        <Text className='px-3 font-sans py-3 hover:bg-yellow transition-all hover:text-white hover:rounded-lg cursor-pointer '>Our Process</Text>
        <Text className='px-3 font-sans py-3 hover:bg-yellow transition-all hover:text-white hover:rounded-lg cursor-pointer '>Companies That Trusted</Text>
        <Text className='px-3 font-sans py-3 hover:bg-yellow transition-all hover:text-white hover:rounded-lg cursor-pointer '>Startup Partners</Text>
      </Navbar.Section>
      <Navbar.Section>
        <Text className='text-3xl font-sans flex items-center justify-center transition-all text-white  bg-gray h-12 hover:bg-yellow hover:cursor-pointer hover:scale-105 rounded-lg'>Logout</Text>
      </Navbar.Section>
    </Navbar>
  }
 
>
  <Text>Resize app to see responsive navbar in action</Text>
</AppShell>


  )
}

export default AdminSidebar