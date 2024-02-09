import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <>
        <Link to="/">Home</Link>
        <Link to="/AboutUs">About</Link>
        <Link to="/ContactUs">Contact</Link>
        </>
    )
}