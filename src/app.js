import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Link } from "react-router-dom"
// admin imports
// import { MyUserForm } from "./components/MyUserForm"
// import { Button } from "react-bootstrap"
import NavbarAdmin  from "./components/NavbarAdmin"
import ContentcontainerAdmin from "./components/ContentcontainerAdmin"
import CreateAccountAdmin from "./components/CreateAccountAdmin"
import FavoritesAdmin from "./components/FavoritesAdmin"
import IndexAdmin from "./components/IndexAdmin"
import Logout from "./components/Logout"
import SelectionAdmin from "./components/selectionAdmin"

// theme component
import Theme from "./components/Theme"



// user imports 
import ContactUser from "./components/ContactUser"
import NavbarUser from "./components/NavbarUser"
import CreateAccountUser from "./components/CreateAccountUser"
import FavoritesUser from "./components/FavoritesUser"
import ContentListUser from "./components/ContentListUser"
import IndexUser from "./components/IndexUser"
import SelectionUser from "./components/SelectionUser"


// import images
import BackArrow from "./img/BackArrow.svg"
import Climbing from "./img/Climbing.svg"
// import PhysioContent from "./img/PhysioContent.svg"
import Skateboard from "./img/Skateboard.svg"
import SoarLogo from "./img/SoarLogo.svg"
import Surf from "./img/Surf.svg"
import BodyDiagram from "./img/BodyDiagram.svg"



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
    // to put something into local storage
        localStorage.setItem("email")
    // to grab something out of local storage
         const user = localStorage.getItem("email")



    // theme settings*****
//   const [user, setUser] = React.useState(null);
//   const [token, setToken] = React.useState(null);
//   const [error, setError] = React.useState('');
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [lightMode, setLightMode] = React.useState(false);

//   React.useEffect(() => {
//     const json = localStorage.getItem('site-light-mode');
//     const currentMode = JSON.parse(json);
//     if (currentMode) {
//       setLightMode(true);
//     } else {
//       setLightMode(false);
//     }
//   }, []);
//   React.useEffect(() => {
//     if (lightMode) {
//       document.body.classList.add('light');
//     } else {
//       document.body.classList.remove('light');
//     }
//     const json = JSON.stringify(lightMode);
//     localStorage.setItem('site-light-mode', json);
//   }, [lightMode]);

    return (<> 
    <div>
    {/* <Login /> */}
    
    <Theme />

    <NavbarAdmin />
    <CreateAccountUser />
    <Login />
    {/* <NavbarUser /> */}
    <IndexUser />
    <SelectionUser />
    <ContentListUser />
    <FavoritesUser />
    <ContactUser />
    <Logout />
    <CreateAccountAdmin />
    <IndexAdmin />
    <SelectionAdmin />
    <ContentcontainerAdmin />
    <FavoritesAdmin />
    <Logout />



    
    
    
 
    </div>
    </>
    )};