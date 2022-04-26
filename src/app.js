import { MyUserForm } from "./components/MyUserForm"
import { Navbar } from "./components/navbar"
import { Button } from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css'
const buttonClass = "my-3 px-3"


export const App = () => {
    return <>
    <h1 className="text-red-500"> HELLO WORLD</h1>
    <Button className={buttonClass} variant="outline-primary">Primary</Button>{' '}
    <MyUserForm />
    </>

}