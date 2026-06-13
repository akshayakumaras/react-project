// import { Routes, Route, Navigate } from "react-router-dom"
// import Home from "./Home"
// import Header from "./Header"
// import Login from "./Login"
// import PageNotFound from "./Pagenotfound"
// import Listrender from "./Listrender"
// import Politics from "./Politics"
// import Epaper from "./Epaper"
// import Sports from "./Sports"
// import Premium from "./Premium"

// function Myroutes() {
//   return (
//     <>
//       <Routes>
//         <Route index element={<Navigate to="Login" replace />} />
//         <Route path="Login" element={<Login />} />
//         <Route path="Home" element={<Home />} />
//         <Route path="*" element={<PageNotFound />} />
//         <Route path="List" element={<Listrender />} />
//         <Route path="politics" element={<Politics />} />
//         <Route path="epaper" element={<Epaper />} />
//         <Route path="premium" element={<Premium />} />
//           <Route path="/sports" element={<Sports />} />
//       </Routes>
//     </>
//   )
// }

// export default Myroutes




import { Routes, Route, Navigate } from "react-router-dom"

import Header from "./Header"

import Home from "./Home"
import Login from "./Login"
import Politics from "./navbar/Politics"
import Epaper from "./navbar/Epaper"
import Premium from "./navbar/Premium"
import Sports from "./navbar/Sports"
import PageNotFound from "./Pagenotfound"
import Explained from "./navbar/Expained"
import Opinion from "./navbar/Opinion"
import Tech from "./navbar/Tech"
import Business from "./navbar/Business"
import Subscribe from "./Subscribe"
import Uncontrolled from "./navbar/uncontorlled"
import Control from "./navbar/Control"
import Hooks from "./navbar/Hooks"
import API from "./navbar/API"

function Myroutes() {

  return (

        <Routes>

          <Route index element={<Navigate to="/navbar/home" replace />} />
          <Route path="/home" element={ <> <Header /> <Home /> </> } />
          <Route path="/login" element={<Login />} />
          <Route path="/navbar/politics" element={ <> <Header /> <Politics /> </> } />
          <Route path="/navbar/epaper" element={ <> <Header /> <Epaper /> </> } />
          <Route path="/navbar/premium" element={ <> <Header /> <Premium /> </> } />
          <Route path="/navbar/sports" element={ <> <Header /> <Sports /> </> } />
          <Route path="/navbar/explained" element={ <> <Header /> <Explained /> </> } />
          <Route path="/navbar/opinion" element={ <> <Header /> <Opinion /> </> } />
          <Route path="/navbar/Tech" element={ <> <Header /> <Tech /> </> } />
          <Route path="/navbar/Business" element={ <> <Header /> <Business /> </> } />
          <Route path="*" element={<PageNotFound />} />
           <Route path="/subscribe" element={<Subscribe />} />
           <Route path="/login" element={<Login />} />
           <Route index element={<Navigate to="/home" replace />} />
           <Route path ="/navbar/hooks" element={ <> <Header /> <Hooks /> </> } />
           <Route path="/navbar/control" element={ <> <Header /> <Control /> </> } />
           <Route path="/navbar/uncontrolled" element={ <> <Header /> <Uncontrolled /> </> } />
           <Route path="/navbar/API" element={ <> <Header /> <API /> </> } />

        </Routes>
        
  )
}


export default Myroutes