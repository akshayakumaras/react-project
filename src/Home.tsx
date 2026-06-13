// import { Fragment } from 'react/jsx-runtime'
// import './Home.css'
// import a from './assets/a.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
// import { useState } from 'react'
// import { Navigate, useNavigate } from 'react-router-dom'

// import Control from "./navbar/Control"

// function Home() {

//   // const myFun = () => {
//   //   alert ('Hello')
//   // }

//   // const [name, setName] = useState('Added')
//   const [status, setStatus] = useState('Subscribe')

//   const changeState = () => {
//     if (status == 'Subscribe') {
//       setStatus('Unsubscribe')
//     } else {
//       setStatus('Subscribe')
//     }
//   }

//   const changeState2 = () => {
//     localStorage.removeItem('token')
//   }



//   const Navigate = useNavigate(); {
//     Navigate('/List')
//   }


//   return (
//     <>


//       {/* <h1 className='home'>Home</h1>
//       <img src={a} alt='a' className='a' />
//       <button className='btn btn-danger' onClick={myFun}>Add</button>
//       <FontAwesomeIcon icon={faBars} /> */}
//       {/* 
//       <p>{status} </p>
//       <button className='btn btn-primary' onClick={changeState}>Change name</button> */}

//       {/* <p>{status} </p>
//       <button className={status == 'Subscribe' ? 'btn btn-success' : 'btn btn-danger'} onClick={changeState}>
//         {status == 'Subscribe' ? 'Subscribe' : 'Unsubscribe'}
//       </button> */}
//       {/* {<button className={status ? 'btn btn-success' : 'btn btn-danger'} onClick={changeState}>Change name</button>} */}
//       {/* <button className={`btn${status ? ' btn-success' : ' btn-danger'}`} onClick={changeState}>Change name</button> */}
//       <div className='d-flex justify-content-center gap-3 mt-5'>
//         <button className='btn btn-success' onClick={() => Navigate('/List')}>List</button>
//         <button className='btn btn-danger' onClick={() => {
//           changeState2();
//           Navigate('/Login');
//         }}>Logout</button>
//       </div>

//     </>
//   )
// }

// export default Home


function Home() {

  return (
    <div className="content">
      <h1>Home Page</h1>

    </div>
  )
}

export default Home