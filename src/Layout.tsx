import Header from './Header';
// import Nav from './Nav';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      {/* <Nav /> */}
      <Outlet />
    </>
  )
}

export default Layout