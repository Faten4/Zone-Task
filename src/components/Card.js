import React, {useState,useEffect} from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Flex, 
  // Select,
  Modal,
  ModalOverlay,
  ModalContent,
   ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Grid, 
  GridItem,
  Container,
  Box,
  Heading,
  Center,
  
} from '@chakra-ui/react'
import axios from 'axios'

function Card() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [obj, setObj] = useState([])
    const url = "https://6362424b66f75177ea2a9970.mockapi.io/doctors"
    const [title, setTitle] = useState("");
    const [nameDr, setNameDr] = useState("");
    const [nameP, setNameP] = useState("");
    const [number, setNumber] = useState("");
    const [date, setDate] = useState();
    const [err, setErr] = useState('')

    useEffect(() => {
      axios.get(url).then((res)=>{
        setObj(res.data);

      })
    }, []);
    
    const postDoctor = (e) => {
      if (nameP==='' || number==='' || date===''){
        setErr("الرجاء قم بتعبئة جميع الخانات");
      }else{
        e.preventDefault();
        setErr('');
        axios.post(url, {
          nameP,
          number,
          date,

        }).then(refreshPahe=>{
           window.location.reload()
        })}}

    return (
      <>
      <Flex  mt={"10"} mb={"10"}
      justifyContent={"center"} alignItems={'center'} 
      
       >
          <Box 
         
          >
            <Heading color={'#666666'}>قم بحـجز موعـدك مع أمهر الأطبـاء لدينـا  </Heading>
            <br></br>
           
          </Box>
    
      </Flex> 
      <Box mt={"5"} mb={"10"} mr={['5', '5', '10','20']} ml={['5', '5', '10','20']}>
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={"10"}>
          {obj.map((item,id)=>{
            return (
                <Box centercontent borderRadius={"10"} boxShadow='md' p='4' rounded='md' bg='white'key={id}>
                  <GridItem w='100%'>
                    <Container centerContent>
                    <Text borderRadius={"5"} backgroundColor={'green.50'} color={'green.500'} pl={"10"} pr={"10"} pt={"2"} pb={"2"} fontWeight={"bold"}>{item.nameDr} </Text>
                    <br/>
                  
                    <Text textAlign={"center"} color={"#45AAB4"}>{item.title}</Text>
                    
                    <br/>
   
                    <br/>
                   
                     <Button
                height='30px'
                width='150px'
                backgroundColor='#45aab4'
                color='white'
                variant={'outline'}
                fontFamily={'Noto Sans Arabic'}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
                onClick={onOpen}

              > احجز الان  
              </Button>
            
              <Modal
                  initialFocusRef={initialRef}
                  finalFocusRef={finalRef}
                  isOpen={isOpen}
                  onClose={onClose}
                  key={id}
                >
                 
                  <ModalOverlay />
                  <ModalContent>
                  <ModalHeader>احجز موعدك</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={5}>
                    <Flex direction={'column'}>
                      <FormControl p={"10px"} isRequired>
                      <FormLabel fontWeight= 'bold'>اسم المريض الثلاثي</FormLabel>
                          <Input 
                              type='text'  
                              onChange={(e)=>setNameP(e.target.value)}
                              maxLength={200}
                          /> 
                          <FormLabel fontWeight= 'bold'>رقم التواصل</FormLabel>
                          <Input 
                              type='text'  
                              onChange={(e)=>setNumber(e.target.value)}
                              maxLength={200}
                          /> 
                          <FormLabel fontWeight= 'bold'>تاريخ الحجز</FormLabel>
                          <Input 
                              type='date'  
                              onChange={(e)=>setDate(e.target.value)}
                              maxLength={200}
                          /> 
                          
                          
                          
                            <br/> 
                            <Text color={'red'}>{err}</Text>
                      </FormControl> 
                    </Flex>
                    </ModalBody>
          
                    <ModalFooter>
                      <Button 
                      backgroundColor='#45aab4'
                        
                          color={"white"}
                          mr={3}
                          
                          onClick={onClose}
                          >
                        احجز
                      </Button>
                      <Button onClick={onClose}>الغاء</Button>
                    </ModalFooter>
                  </ModalContent>
                  
                </Modal>
              {/* </Link> */}
                    </Container>
                  </GridItem>
              </Box>
            )
          })}
        </Grid>
       </Box>
      </>
    )
}
export default Card