import React, { useState, useRef } from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const login = () => {
  return (
    <>
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, teal.400, teal.600)"
          backgroundClip="text"
        >
          LOGin
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page LOGin
        </Text>
        <Text color={'gray.500'} mb={6}>
          LOGinLOGinLOGinLOGinLOGinLOGinLOGin122222
        </Text>
      </Box>
    </>
  );
};

export default login;

// export default function login = () : JSX.Element => {
//   return (
//     <>
//       <Box textAlign="center" py={10} px={6}>
//         <Heading
//           display="inline-block"
//           as="h2"
//           size="2xl"
//           bgGradient="linear(to-r, teal.400, teal.600)"
//           backgroundClip="text">
//           LOGin
//         </Heading>
//         <Text fontSize="18px" mt={3} mb={2}>
//           Page LOGin
//         </Text>
//         <Text color={'gray.500'} mb={6}>
//         LOGinLOGinLOGinLOGinLOGinLOGinLOGin122222
//         </Text>

//         {/* <Button
//           colorScheme="teal"
//           bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
//           color="white"
//           variant="solid">
//           Go to Home
//         </Button> */}
//       </Box>
//     </>
//   );
// }
