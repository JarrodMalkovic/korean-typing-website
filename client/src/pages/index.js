import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  Container,
  Heading,
  VStack,
  Image,
  Box,
  useColorModeValue,
  Text,
  Button,
  Flex,
} from '@chakra-ui/react';
import { Grid, Row, Col } from 'react-bootstrap';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const Home = (props) => {
  return (
    <Box>
      <VStack spacing={5} width="100%">
        <Box position="relative">
          <Image
            minW="full"
            opacity="70%"
            linear-gradient="(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.25))"
            src={useColorModeValue(
              '/images/HomeDay.png',
              '/images/HomeNight.png',
            )}
          />
          <Text
            position="absolute"
            fontSize="8vw"
            fontWeight="bold"
            fontFamily="Homepage"
            top="20%"
            left="5%"
            transform="translate(-50% -50%)"
            textColor="white">
            안녕하십니까
          </Text>
          <Text
            position="absolute"
            fontSize="6vw"
            fontWeight="bold"
            top="40%"
            left="5%"
            trasnform="translate(-50% -50%)"
            textColor="white">
            {/*{props.username}*/}
            Username goes here
          </Text>
          <Link href="/menu">
            <Button
              bgColor="rgba(200,16,46,0.7)"
              position="absolute"
              top="60%"
              left="6%"
              size="lg"
              _hover={{
                bg: 'rgba(0,47,108,0.7)',
              }}
              color="white"
              rightIcon={<ArrowForwardIcon />}>
              Get Started!
            </Button>
          </Link>
        </Box>
      </VStack>
    </Box>
  );
};

export default Home;
