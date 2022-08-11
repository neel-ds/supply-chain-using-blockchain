import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function UpdateProduct() {

    const [data, setData] = useState("");

    const handleData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <Flex
            minH={'80vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
        >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Update product</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool features ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}
                    w={['xs', 'sm']}
                >
                    <Stack spacing={4}>
                        <FormControl id="product-id">
                            <FormLabel>Product Id</FormLabel>
                            <Input type="number" name='id' onChange={handleData}/>
                        </FormControl>
                        <FormControl id="discription">
                            <FormLabel>Description Of Product</FormLabel>
                            <Textarea name='description' onChange={handleData}></Textarea>
                        </FormControl>
                        <Button
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            Submit
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}