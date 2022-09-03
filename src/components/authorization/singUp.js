import React, {useEffect, useState} from "react";
import {ImgLock, SingStyle, FlexSpaceBetween, CheckboxPosition, Button, FlexRight, URL, Message} from "./singStyle";
import Input from "../elements/input/input";
import lockImg from "../../access/images/lock.svg";

function SingUp() {
    let users = [];
    localStorage.getItem('users')
        ? users = JSON.parse(localStorage.getItem('users'))
        : users = [];

    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passValue, setPassValue] = useState('');

    const [firstNameValid, setFirstNameValid] = useState(false);
    const [lastNameValid, setLastNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [passValid, setPassValid] = useState(false);
    const [formValid, setFormValid] = useState(false);

    const [borderColorFirstName, setBorderColorFirstName] = useState('#d4dae5');
    const [borderColorLastName, setBorderColorLastName] = useState('#d4dae5');
    const [borderColorEmail, setBorderColorEmail] = useState('#d4dae5');
    const [borderColorPass, setBorderColorPass] = useState('#d4dae5');

    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [colorMessage, setColorMessage] = useState('#f42323');



    const updateFirstName = (value) => {
        setFirstNameValue(value);
        validateFirstName(value);
    }

    const validateFirstName = (value) => {
        if (!/^([A-ZА-ЯЁ]{3,})+$/i.test(value)) {
            setBorderColorFirstName("#f42323");
            setFirstNameValid(false);
        } else {
            setBorderColorFirstName("#20ee5f");
            setFirstNameValid(true);
        }
    }



    const updateLastName = (value) => {
        setLastNameValue(value);
        validateLastName(value);
    }

    const validateLastName =(value) => {
        if (!/^([A-ZА-ЯЁ]{3,})+$/i.test(value)) {
            setBorderColorLastName("#f42323");
            setLastNameValid(false);
        } else {
            setBorderColorLastName("#20ee5f");
            setLastNameValid(true);
        }
    }



    const updateEmail = (value) => {
        setEmailValue(value);
        validateEmail(value);
    }

    const validateEmail =(value) => {
        if (!/^([A-ZА-ЯЁ0-9_-]{3,}@[A-ZА-ЯЁ]{2,}\.[A-ZА-ЯЁ]{2,})+$/i.test(value)) {
            setBorderColorEmail("#f42323");
            setEmailValid(false);
        } else {
            setBorderColorEmail("#20ee5f");
            setEmailValid(true);
        }
    }



    const updatePass = (value) => {
        setPassValue(value);
        validatePass(value);
    }



    const validatePass =(value) => {
        if (!/((?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,})+$/g.test(value)) {
            setBorderColorPass("#f42323");
            setPassValid(false);
        } else {
            setBorderColorPass("#20ee5f");
            setPassValid(true);
        }
    }



    const setLocalStorage = (user) => {
        localStorage.setItem('users', JSON.stringify([...users, user]));
    }

    function handleSubmit(e) {
        e.preventDefault();
        validateFirstName(firstNameValue);
        validateLastName(lastNameValue);
        validateEmail(emailValue);
        validatePass(passValue);
        if (formValid) {
            if (users.find(el => el.emailValue === emailValue)) {
                setMessage('User with this email already exists');
                setShowMessage(true);
                setColorMessage("#f42323");
            } else {
                setLocalStorage({
                    firstNameValue,
                    lastNameValue,
                    emailValue,
                    passValue
                });
                console.log({
                    firstNameValue,
                    lastNameValue,
                    emailValue,
                    passValue
                });
                setMessage('Successful registration');
                setShowMessage(true);
                setColorMessage("#20ee5f");
            }
        } else {
            setMessage('Invalid data entered');
            setShowMessage(true);
            setColorMessage("#f42323");
        }
        setTimeout(() => setShowMessage(false), 5000);
    }



    useEffect(() => {
        if (!firstNameValid || !lastNameValid || !emailValid || !passValid) {
            setFormValid(false);

        } else {
            setFormValid(true);
        }
    });



    return(
        <form onSubmit={handleSubmit}>
        <SingStyle>
            <ImgLock>
                <img src={lockImg}/>
            </ImgLock>
            <label style={{color: "white"}}>Sing Up</label>
            {showMessage
                ? <Message
                    color={colorMessage}>
                    {message}
                  </Message>
                : <Message />
            }
                <FlexSpaceBetween>
                    <Input value={firstNameValue} setValue={updateFirstName} placeholder='First name*' type="input" borderColor={borderColorFirstName} width={40}  marginTop={5}/>
                    <Input value={lastNameValue} setValue={updateLastName} placeholder='Last name*' type="input" borderColor={borderColorLastName} width={40} marginTop={5}/>
                </FlexSpaceBetween>
                <Input value={emailValue} setValue={updateEmail} placeholder='Email Address*' type="input" borderColor={borderColorEmail} width={90} marginTop={5}/>
                <Input value={passValue} setValue={updatePass} placeholder='Password*' type="password" borderColor={borderColorPass} width={90} marginTop={5} />
                <CheckboxPosition>
                    <Input id="updatesToEmail" type="checkbox" width={7} marginTop={1} />
                    <label htmlFor="updatesToEmail" style={{color: "white", fontSize: "12px"}}>
                        I want to receive inspiration, marketing promotions and updates via email</label>
                </CheckboxPosition>
                <Button>SING UP</Button>
            <FlexRight>
                <URL to={'cursor-styled-animations/sing-in'}>Already have an account? Sing In</URL>
            </FlexRight>
        </SingStyle>
        </form>
    );
}

export default SingUp;