// import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Box, Heading, Text, Button } from '@chakra-ui/react';

import NotFound from 'pages/common/NotFound';
import LoginForm from 'pages/login/LoginForm';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          {/* <Route index element={ <LoginForm /> } /> */}

          {/* <Route index element={ <Navigate to="/login" replace /> }/> */}
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <LoginForm /> */}
      {/* <BrowserRouter> */}
      {/* <Routes> */}

      {/* <Route path="/" element={<LoginForm />}></Route> */}
      {/* <Route index element={ <LoginForm /> } /> */}

      {/* <Route index element={ <Navigate to="/login" replace /> }/> */}
      {/* <Route path="/*" element={<NotFound />} ></Route> */}

      {/* </Route> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
    </>
  );
};

export default Router;

// export default function Router() {
//   return (
//       <>

//       {/* <NotFound /> */}
//           <BrowserRouter>
//               <Routes >
//                   <Route path="/" element={ <LoginForm /> } />
//                   {/* <Route index element={ <LoginForm /> } /> */}

//                       {/* <Route index element={ <Navigate to="/login" replace /> }/> */}
//                       {/* <Route path="/*" element={<NotFound />} /> */}

//                   {/* </Route> */}

//               </Routes>
//           </BrowserRouter>

//       </>
//   )
// }
