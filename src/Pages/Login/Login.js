import React, {useState} from 'react' 
import {Form, FormGroup} from 'react-bootstrap' 
import { useHistory } from 'react-router-dom' 
import Button from 'react-bootstrap/Button' 
import "./Login.css"; 
require("typeface-quicksand") 
 
 //#790c5a,#cc0e74,#e6739f
function Login(){ 
    const [email,setEmail] = useState(); 
    const [password,setPassword] = useState(); 
    const history = useHistory(); 
     
    function login(){ 
        alert("Bem vindo \n" + email) 
        history.push("Home") 
    } 
 
    return( 
        <div className = "Login">
            <div className ="base"> 
                <img 
                className = "sakura" 
                src="/images/SakuraLoginFinal.png "/> 
                
                <div className="container"> 

                    <div    className = "within">

                    <img src = "images/HaiKaiVetorized.png" 
                    className = "HaiKai" /> 
                        <div id = "form">

                            <Form className = "formtext"> 
                                <Form.Group controlId="formBasicEmail"> 
                                    <Form.Label>Enter your email</Form.Label> 
                                    <Form.Control type="email" placeholder="name@example.com" /> 
                                </Form.Group> 
            
                                <Form.Group controlId="formBasicPassword"> 
                                    <Form.Label>Password</Form.Label> 
                                    <Form.Control type="password" placeholder="Password" /> 
                                </Form.Group> 
            
                                <Form.Group controlId="formBasicCheckbox"> 
                                    <Form.Check type="checkbox" label="Check me out" /> 
                                </Form.Group> 
            
                                <FormGroup> 
                                    <Button  id="button" variant="danger" onClick={login}>Login</Button> 
                                </FormGroup> 
                            </Form> 
                            
                        </div>
                    </div>
                </div> 
            </div> 
        </div>
    ) 
} 
 
export default Login;