import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
// admin imports
import { MyUserForm } from "./components/MyUserForm"
// import { Button } from "react-bootstrap"
import NavbarAdmin  from "./components/NavbarAdmin"
import ContentcontainerAdmin from "./components/ContentcontainerAdmin"
import CreateAccountAdmin from "./components/CreateAccountAdmin"
import FavoritesAdmin from "./components/FavoritesAdmin"
import IndexAdmin from "./components/IndexAdmin"
import Logout from "./components/Logout"
import SelectionAdmin from "./components/selectionAdmin"



// user imports 
import ContactUser from "./components/ContactUser"
import NavbarUser from "./components/NavbarUser"
import CreateAccountUser from "./components/CreateAccountUser"
import FavoritesUser from "./components/FavoritesUser"
import ContentListUser from "./components/ContentListUser"
import IndexUser from "./components/IndexUser"
import SelectionUser from "./components/SelectionUser"




// css imports

import "../src/css/Contact-Form-Clean.css"
import "../src/css/Login-Form-Clean.css"
import "../src/css/Navigation-Clean.css"
import "../src/css/Pretty-Registration-Form.css"
import "../src/css/styles.css"
import "../src/css/bootstrap.min.css"
import"../src/bootstrap.min.js"



import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./components/Login"
// const buttonClass = "my-3 px-3"


export const App = () => {
    return (<> 
    <div>
    <Login />
        <Routes>
            <Route path="/" element={Login}/>
        </Routes>
    


    {/* <NavbarAdmin />
    <IndexAdmin />
    <SelectionAdmin />
    <ContentcontainerAdmin />
    <CreateAccountAdmin />
    <FavoritesAdmin />
    <Logout />


    <NavbarUser />
    <CreateAccountUser />
    <IndexUser />
    <SelectionUser />
    <ContentListUser />
    <FavoritesUser />
    <ContactUser />
    <Logout /> */}




    {/* <h1 className="text-red-500"> HELLO WORLD</h1> */}
    {/* <Button className={buttonClass} variant="outline-primary">Primary</Button>{' '} */}
    {/* <MyUserForm /> */}
    </div>
    </>)

}