import React, {useState} from "react";
import Input from "../elements/input/input";
import lockImg from "../../access/images/lock.svg";
import {Button, CheckboxPosition, ImgLock, SingStyle, FlexSpaceBetween, URL, Message} from "./singStyle";
import InputCheckbox from "../elements/input/inputCheckbox";

function SingIn() {

    const userRemember = localStorage.getItem('userRemember')
        ? JSON.parse(localStorage.getItem('userRemember'))
        : {email: '', pass: ''}

    const [email, setEmail] = useState(userRemember.email);
    const [pass, setPass] = useState(userRemember.pass);
    const [remember, setRemember] = useState(!!localStorage.getItem('userRemember'));

    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [colorMessage, setColorMessage] = useState('#f42323');

    const [borderColorEmail, setBorderColorEmail] = useState('#d4dae5');
    const [borderColorPass, setBorderColorPass] = useState('#d4dae5');


    const updateEmail = (value) => {
        setEmail(value);
    }

    const updatePass = (value) => {
        setPass(value);
    }

    const updateChecked = (value) => {
        setRemember(value);
    }



    function handleSubmit(e) {
        setShowMessage(false);
        e.preventDefault();
        if (email === "" || pass === "") {
            if (email === "") setBorderColorEmail("#f42323");
            if (pass === "") setBorderColorPass("#f42323");
            setMessage("Fields must not be empty");
            setShowMessage(true);
            setColorMessage("#f42323");
            setTimeout(() => setShowMessage(false), 5000);
            return;
        }
        let users = [];
        localStorage.getItem('users')
            ? users = JSON.parse(localStorage.getItem('users'))
            : users = [];
        const user = users.find(el => el.emailValue === email);
        if (user) {
            setBorderColorEmail("#d4dae5");
            if (user.passValue === pass) {
                setBorderColorPass("#d4dae5");
                setShowMessage(true);
                setMessage(user.firstNameValue + ' ' + user.lastNameValue + ', Welcome to app!');
                setColorMessage("#20ee5f");
                if (remember) {
                    localStorage.setItem('userRemember', JSON.stringify({email, pass}));
                }
            } else {
                setMessage("Wrong password");
                setBorderColorPass("#f42323");
                setColorMessage("#f42323");
                setShowMessage(true);
                setTimeout(() => setShowMessage(false), 5000);
            }
        } else {
            setMessage("Mail not registered, please register");
            setBorderColorEmail("#f42323");
            setColorMessage("#f42323");
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 5000);
        }


    }



    return(
        <form onSubmit={handleSubmit}>
        <SingStyle>
            <ImgLock>
                <img src={lockImg}/>
            </ImgLock>
            <label style={{color: "white"}}>Sing In</label>
            {showMessage
                ? <Message
                    color={colorMessage}>
                    {message}
                </Message>
                : <Message />
            }
            <Input value={email} setValue={updateEmail} placeholder='Email Address*' borderColor={borderColorEmail} type="input" width={90} marginTop={5}/>
            <Input value={pass} setValue={updatePass} placeholder='Password*' borderColor={borderColorPass} type="password" width={90} marginTop={5} />
            <CheckboxPosition>
                <InputCheckbox checked={remember} setChecked={updateChecked}  id="updatesToEmail" type="checkbox" width={7} marginTop={1} />
                <label htmlFor="updatesToEmail" style={{color: "white", fontSize: "12px"}}>Remember me</label>
            </CheckboxPosition>
            <Button>SING IN</Button>
            <FlexSpaceBetween>
                <URL to={'cursor-styled-animations/sing-up'}>Forgot password?</URL>
                <URL to={'cursor-styled-animations/sing-up'}>Don't have an account? Sing Up</URL>
            </FlexSpaceBetween>
        </SingStyle>
        </form>
    );
}

export default SingIn;