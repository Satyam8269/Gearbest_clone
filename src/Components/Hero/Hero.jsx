import React from 'react'
import { Text,Box,Flex, HStack, Image } from '@chakra-ui/react'
import Carousel from './HeroImageSlider'
import './hero.css'

function Hero() {
  return (
    <>
    <Box  className='heroNone'>
        <Flex justifyContent={'center'}>
            <Box display={['none','none','block']} height='560px' overflow='auto' bg='#ECF6FF' w='20%' minW='130px'>
                <Text h='40px' boxSizing='border-box' bg='black' p='3px 0' color='white' textAlign='center' fontWeight='bold' fontSize='1.45rem'>Category</Text>
                <Texty text="Consumer Electronics"/>
                <Texty text="Industrial & Scientific"/>
                <Texty text="Cell Phones & Accessories"/>
                <Texty text="Appliances"/>
                <Texty text="Outdoors, Fitness & Sports"/>
                <Texty text="Computers, Tablets & Office"/>
                <Texty text="Health & Personal Care"/>
                <Texty text="Home Improvement & Tools"/>
                <Texty text="Drones, Toys & Hobbies"/>
                <Texty text="Home & Garden"/>
                <Texty text="Motor's & Car Electronics"/>
                <Texty text="Men's Fashion"/>
                <Texty text="Watches & Jewellery"/>
                <Texty text="GearBest Promotion"/>
                <Texty text="Home & Garden"/>
                <Texty text="Motor's & Car Electronics"/>
                <Texty text="Men's Fashion"/>
                <Texty text="Watches & Jewellery"/>
                <Texty text="GearBest Promotion"/>
            </Box>
            <Box w='80%'>
                <Flex  justifyContent='space-between' py='8px' px='100px'  bg='#FFDA00'>
                    <Text fontWeight='bold' color='black'>SUPER DEALS</Text>
                    <Text fontWeight='bold' color='black'>APP ONLY</Text>
                    <Text fontWeight='bold' color='black'>NEW ARRIVAL</Text>
                </Flex>
                <Box>
                    <Box padding='24px'>
                   <Carousel/>
                    </Box>
                    <Flex w='90%' m='auto' justifyContent='space-between' gap='10px'>
                        <Image  width='25%'  cursor='pointer' src='https://gearbest.net/u_file/2212/13/photo/104998717332313949-53b3.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_636'></Image>
                        <Image width='25%' cursor='pointer' src='https://gearbest.net/u_file/2212/13/photo/105254957723937735-a022.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_636'></Image>
                        <Image width='25%' cursor='pointer' src='https://gearbest.net/u_file/2301/11/photo/SAMEBIKE-045d.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_314'></Image>                   
                        <Image  width='25%' cursor='pointer'src='https://gearbest.net/u_file/2302/09/photo/-6-f8dc.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_314'></Image>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    </Box>
    <Box  className='heroTop' mt='-60px' padding='24px'>
        <Carousel/>
    </Box>

    </>
  )
}

export default Hero


function Texty({text}){
    return(
        <Text   fontSize='.96rem'  ml='20px' padding='4.5px 0 '  _hover={{fontWeight:'500',cursor:'pointer'}}>    {text}</Text>
    )
}