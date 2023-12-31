import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column','row']}>
            <VStack alignItems={'streach'} w={'full'} px={'4'}>
                <Heading size={'md'} textTransform={'uppercase'}>
                    Subscribe to get updates
                </Heading>
                <HStack borderBottom={'2px solid white'} py={'2'}>
                    <Input placeholder='Enter Email here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor={'none'} transition-timing-function={ 'ease-in-out'}/>
                    <Button p={'0'} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend size={20}/>
                    </Button>
                </HStack>
            </VStack>
            <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']} >
                <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>VIdeo hub</Heading>
                <Text>All rights reserved</Text>
            </VStack>
            <VStack w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'}>Social media</Heading>
                <Button variant={'link'} colorScheme={'whiteAplha'}>
                    <a under target={'blank'} href='http://youtube.com'>Youtube</a>
                </Button>
                <Button variant={'link'} colorScheme={'whiteAplha'}>
                    <a under target={'blank'} href='http://instagram.com'>Instagram</a>
                </Button>
                <Button variant={'link'} colorScheme={'whiteAplha'}>
                    <a under target={'blank'} href='http://github.com'>GitHub</a>
                </Button>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer