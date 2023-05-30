import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Image,Stack,Heading,Text,Divider,ButtonGroup,Button,Center } from "@chakra-ui/react";
export default function Home() {
  return (
    <div>
      <div className="Carousal" >
     <Carousel style={{padding:"40px",width:"70%",marginLeft:"190px"}} >
      <Carousel.Item>
        <img
           style={{borderRadius:"30px"}}
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVSl34LIFMKrFkH38PRDvUWzfNjnBlE34zEQ&usqp=CAU"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           style={{borderRadius:"30px"}}
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQ9BfVkJ0Un-aIedUykDli7TN_ER0HEAbxQ&usqp=CAU"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           style={{borderRadius:"30px"}}
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSu58MneNTfJLJRrwj5u1LzBoWKayE2i703g&usqp=CAU"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <br /><br />
    <div style={{paddingLeft:"150px", display:"flex",height:"600px", gap:"150px"}}>
      <img  style={{borderRadius:"10px"}} width="40%" src="data:image/jpeg;base64,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" alt="" />
      <Card maxW='sm' >
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <Center>
  <CardFooter>
   
    <ButtonGroup spacing='2'>
    <Button borderRadius={"25px"} style={{padding:"0 80px 0 80px"}}variant='solid' colorScheme='blue'>
        Book now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
    
   
  </CardFooter>
  </Center>
</Card>
    </div>
    <br />
    <Heading color={"blue"}>Browse out Top Sedans for Rent</Heading>

    <div style={{display:"flex", gap:"50px"}}>
    <Card maxW='sm' >
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <Center>
  <CardFooter>
   
    <ButtonGroup spacing='2'>
    <Button borderRadius={"25px"} style={{padding:"0 80px 0 80px"}}variant='solid' colorScheme='blue'>
        Book now
      </Button>
     
    </ButtonGroup>
    
   
  </CardFooter>
  </Center>
</Card>


<Card maxW='sm' >
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <Center>
  <CardFooter>
   
    <ButtonGroup spacing='2'>
    <Button borderRadius={"25px"} style={{padding:"0 80px 0 80px"}}variant='solid' colorScheme='blue'>
        Book now
      </Button>
      
    </ButtonGroup>
    
   
  </CardFooter>
  </Center>
</Card>


<Card maxW='sm' >
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <Center>
  <CardFooter>
   
    <ButtonGroup spacing='2'>
    <Button borderRadius={"25px"} style={{padding:"0 80px 0 80px"}}variant='solid' colorScheme='blue'>
        Book now
      </Button>
     
    </ButtonGroup>
    
   
  </CardFooter>
  </Center>
</Card>
    </div>
    <br />
    <br />
    <Heading color={"blue"}>Browse our Top coach & buss for Rent</Heading>
    <div>
    <div style={{display:"flex", gap:"50px"}}>
    <Card maxW='sm' >
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <Center>
  <CardFooter>
   
    <ButtonGroup spacing='2'>
    <Button borderRadius={"25px"} style={{padding:"0 80px 0 80px"}}variant='solid' colorScheme='blue'>
        Book now
      </Button>
     
    </ButtonGroup>
    
   
  </CardFooter>
  </Center>
</Card>


<Card maxW='sm' >
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <Center>
  <CardFooter>
   
    <ButtonGroup spacing='2'>
    <Button borderRadius={"25px"} style={{padding:"0 80px 0 80px"}}variant='solid' colorScheme='blue'>
        Book now
      </Button>
    
    </ButtonGroup>
    
   
  </CardFooter>
  </Center>
</Card>


<Card maxW='sm' >
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <Center>
  <CardFooter>
   
    <ButtonGroup spacing='2'>
      <Button borderRadius={"25px"} style={{padding:"0 80px 0 80px"}}variant='solid' colorScheme='blue'>
        Book now
      </Button>
     
    </ButtonGroup>
    
   
  </CardFooter>
  </Center>
</Card>
    </div>
    </div>
    <Heading color={"blue"}>Browse our top pickup trucks for rent</Heading>
    <div>
    <div style={{display:"flex", gap:"50px"}}>
    <Card maxW='sm' >
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <Center>
  <CardFooter>
   
    <ButtonGroup spacing='2'>
    <Button borderRadius={"25px"} style={{padding:"0 80px 0 80px"}}variant='solid' colorScheme='blue'>
        Book now
      </Button>
      
    </ButtonGroup>
    
   
  </CardFooter>
  </Center>
</Card>


<Card maxW='sm' >
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <Center>
  <CardFooter>
   
    <ButtonGroup spacing='2'>
    <Button borderRadius={"25px"} style={{padding:"0 80px 0 80px"}}variant='solid' colorScheme='blue'>
        Book now
      </Button>
      
    </ButtonGroup>
    
   
  </CardFooter>
  </Center>
</Card>


<Card maxW='sm' >
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <Center>
  <CardFooter>
   
    <ButtonGroup spacing='2'>
    <Button borderRadius={"25px"} style={{padding:"0 80px 0 80px"}}variant='solid' colorScheme='blue'>
        Book now
      </Button>
     
    </ButtonGroup>
    
   
  </CardFooter>
  </Center>
</Card>
    </div>
    </div>
    <Heading>Browse our top safari mobiles for rent</Heading>
    <div>

    <div style={{display:"flex", gap:"50px"}}>
    <Card maxW='sm' >
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <Center>
  <CardFooter>
   
    <ButtonGroup spacing='2'>
    <Button borderRadius={"25px"} style={{padding:"0 80px 0 80px"}}variant='solid' colorScheme='blue'>
        Book now
      </Button>
     
    </ButtonGroup>
    
   
  </CardFooter>
  </Center>
</Card>


<Card maxW='sm' >
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <Center>
  <CardFooter>
   
    <ButtonGroup spacing='2'>
    <Button borderRadius={"25px"} style={{padding:"0 80px 0 80px"}}variant='solid' colorScheme='blue'>
        Book now
      </Button>
      
    </ButtonGroup>
    
   
  </CardFooter>
  </Center>
</Card>


<Card maxW='sm' >
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <Center>
  <CardFooter>
   
    <ButtonGroup spacing='2'>
    <Button borderRadius={"25px"} style={{padding:"0 80px 0 80px"}}variant='solid' colorScheme='blue'>
        Book now
      </Button>
     
    </ButtonGroup>
    
   
  </CardFooter>
  </Center>
</Card>
    </div>
    </div>
    <Heading>Wide range of Vehicles</Heading>
    <div style={{display:"flex",gap:"50px"}}>
      <div  >
        <img style={{borderRadius:"20px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-b-4_ARUtc0DxqzuduzJx83l4fwjnhD2Wlg&usqp=CAU" alt="" />
        <img style={{borderRadius:"20px",marginTop:"30px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-b-4_ARUtc0DxqzuduzJx83l4fwjnhD2Wlg&usqp=CAU" alt="" />
      </div>
      <div >
      <img style={{borderRadius:"20px", height:"360px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-b-4_ARUtc0DxqzuduzJx83l4fwjnhD2Wlg&usqp=CAU" alt="" />
      </div>
      <div  >
        <img style={{borderRadius:"20px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-b-4_ARUtc0DxqzuduzJx83l4fwjnhD2Wlg&usqp=CAU" alt="" />
        <img style={{borderRadius:"20px",marginTop:"30px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-b-4_ARUtc0DxqzuduzJx83l4fwjnhD2Wlg&usqp=CAU" alt="" />
      </div>
    </div>
    <Button borderRadius={"25px"} bg={"blue"} color={"white"} padding={"0 50px 0 50px"}>See All</Button>
    <Heading>Browse our top destinations for tour</Heading>
    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora asperiores aspernatur sunt a et, aut vel similique ea illo quia minus fuga sint corrupti earum incidunt cum. Sunt, reprehenderit soluta! </Text>
    <div style={{display:"flex", gap:"50px"}}>
    <Card maxW='sm' >
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <Center>
  <CardFooter>
   
    <ButtonGroup spacing='2'>
    <Button borderRadius={"25px"} style={{padding:"0 80px 0 80px"}}variant='solid' colorScheme='blue'>
        Book now
      </Button>
     
    </ButtonGroup>
    
   
  </CardFooter>
  </Center>
</Card>


<Card maxW='sm' >
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <Center>
  <CardFooter>
   
    <ButtonGroup spacing='2'>
    <Button borderRadius={"25px"} style={{padding:"0 80px 0 80px"}}variant='solid' colorScheme='blue'>
        Book now
      </Button>
      
    </ButtonGroup>
    
   
  </CardFooter>
  </Center>
</Card>


<Card maxW='sm' >
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <Center>
  <CardFooter>
   
    <ButtonGroup spacing='2'>
    <Button borderRadius={"25px"} style={{padding:"0 80px 0 80px"}}variant='solid' colorScheme='blue'>
        Book now
      </Button>
     
    </ButtonGroup>
    
   
  </CardFooter>
  </Center>
</Card>
    </div>
    <br /><br />
    
    <div style={{display:"flex"}}>
      <Card width={"30%"}>
      <Heading color={"blue"}>Our results in numbers</Heading>
        <Heading>99%</Heading>
        <Heading as='h3' size='l'>
      Customer Satisfaction
  </Heading>
  <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet inventore voluptatum fuga soluta consequuntur obcaecati, quod molestiae, sit recusandae eaque repellendus quibusdam dolores animi quo asperiores iure, in blanditiis saepe!</Text>
      </Card>

      <Card width={"30%"}>
      <Heading color={"blue"}>Our results in numbers</Heading>
        <Heading>99%</Heading>
        <Heading as='h3' size='l'>
      Customer Satisfaction
  </Heading>
  <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet inventore voluptatum fuga soluta consequuntur obcaecati, quod molestiae, sit recusandae eaque repellendus quibusdam dolores animi quo asperiores iure, in blanditiis saepe!</Text>
      </Card>

      <Card width={"30%"}>
      <Heading color={"blue"}>Our results in numbers</Heading>
        <Heading>99%</Heading>
        <Heading as='h3' size='l'>
      Customer Satisfaction
  </Heading>
  <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet inventore voluptatum fuga soluta consequuntur obcaecati, quod molestiae, sit recusandae eaque repellendus quibusdam dolores animi quo asperiores iure, in blanditiis saepe!</Text>
      </Card>
    </div>
    <Heading>What out Clients say</Heading>
    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ut nulla praesentium optio minima quam quos a facere adipisci. Fugit incidunt explicabo nam vero sunt doloribus tempore iusto velit beatae!</Text>
    <Carousel>
      <Carousel.Item style={{display:"flex"}}>
      <Card width={"30%"}>
      <Heading color={"blue"}>Our results in numbers</Heading>
        <Heading>99%</Heading>
        <Heading as='h3' size='l'>
      Customer Satisfaction
  </Heading>
  <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet inventore voluptatum fuga soluta consequuntur obcaecati, quod molestiae, sit recusandae eaque repellendus quibusdam dolores animi quo asperiores iure, in blanditiis saepe!</Text>
      </Card>
     
      <Card width={"30%"}>
      <Heading color={"blue"}>Our results in numbers</Heading>
        <Heading>99%</Heading>
        <Heading as='h3' size='l'>
      Customer Satisfaction
  </Heading>
  <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet inventore voluptatum fuga soluta consequuntur obcaecati, quod molestiae, sit recusandae eaque repellendus quibusdam dolores animi quo asperiores iure, in blanditiis saepe!</Text>
      </Card>
    
      <Card width={"30%"}>
      <Heading color={"blue"}>Our results in numbers</Heading>
        <Heading>99%</Heading>
        <Heading as='h3' size='l'>
      Customer Satisfaction
  </Heading>
  <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet inventore voluptatum fuga soluta consequuntur obcaecati, quod molestiae, sit recusandae eaque repellendus quibusdam dolores animi quo asperiores iure, in blanditiis saepe!</Text>
      </Card>
      </Carousel.Item>


      </Carousel>
    </div>
    
  );
}
