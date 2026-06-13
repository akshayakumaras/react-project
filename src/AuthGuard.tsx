import {Navigate , Outlet} from 'react-router-dom';

export default function AuthGuard() {
    const logstatus = localStorage.getItem('token');
    return(
        <>  
            {logstatus ? <Outlet/> : <Navigate to='/login'/>}   

        </>
    )
}
