import {useNavigate } from "react-router-dom"


function PageNotFound() {
    const route = useNavigate()

    const PageNotFound = () => {
        route('/Home')
    }
    return (
        <>
            <h1>PageNotFound Page</h1>
            <button className="btn btn-success" onClick={() => PageNotFound()}>Home</button>
        </>
    )
}

export default PageNotFound