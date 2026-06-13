// import Classcom from './Classcom';
// import Footer from './Footer'
// import { useState } from 'react'
// import Home from './Home';
// import Listrender from './Listrender';
// import { LayersCounter } from '@fortawesome/react-fontawesome';
// import Layout from './Layout';


// function Header() {
//     const [parentName, setParentName] = useState('Akshay Kumar');

//     return (
//         <>
//             <h1>Header component</h1>
//             {/* <Footer userName={parentName} />
//             <hr />
//             <Classcom /> */}
//             <Home />
//             <Layout />

//         </>
//     )
// }

// export default Header

import { useNavigate } from "react-router-dom"
// import Canvas from "./Canvas"

function Header() {

  const navigate = useNavigate()

  return (

    <>


      <div className="top-header">


        <div className="left-section">

          <span className="menu-icon">☰</span>
          {/* <Canvas /> */}

          <span className="search-icon">⌕</span>

          <span className="date-text">
           | Wed, 27 May |
          </span>

        </div>


        <div className="logo-section">

          <h1 className="logo">
            TheIndianEXPRESS
          </h1>

          <p className="tagline">
            JOURNALISM OF COURAGE
          </p>

        </div>

        <div className="right-section">

          <button
            className="subscribe-btn"
            onClick={() => navigate("/subscribe")} >
            SUBSCRIBE
          </button>

          

          <span
            className="signin-link"
            onClick={() => navigate("/login")}
            
          >
            👤 SIGN IN
          </span>

        </div>

      </div>

      <div className="navbar">

        <span onClick={() => navigate("/home")}>
          Home
        </span>

        <span onClick={() => navigate("/navbar/epaper")}>
          ePaper
        </span>

        <span onClick={() => navigate("/navbar/politics")}>
          Politics
        </span>

        <span onClick={() => navigate("/navbar/explained")}>
          Explained
        </span>

        <span onClick={() => navigate("/navbar/opinion")}>
          Opinion
        </span>

        <span onClick={() => navigate("/navbar/Business")}>
          Business
        </span>

        <span onClick={() => navigate("/navbar/premium")}>
          Premium
        </span>

        <span onClick={() => navigate("/navbar/sports")}>
          Sports
        </span>

        <span onClick={() => navigate("/navbar/Tech")}>
          Tech
        </span>

        <button onClick={() => navigate("/navbar/control")}>
            Controlled
          </button>

          <button onClick={() => navigate("/navbar/uncontrolled")}>
            Uncontrolled
          </button>
          
          <span onClick={() => navigate("/navbar/hooks")}>
            Hooks
          </span>

          <span onClick={() => navigate("/navbar/API")}>
            API
          </span>

        

      </div>

    </>
  )
}

export default Header