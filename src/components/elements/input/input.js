import React from "react";
import {InputStyle} from "./style";

function Input(props) {



    return (
        <InputStyle
            placeholder={props.placeholder}
            type={props.type}
            width={props.width}
            marginTop={props.marginTop}
            borderColor={props.borderColor}
            value={props.value}
            onChange={(e) => props.setValue(e.target.value)}
        />
    );
}

export default Input;