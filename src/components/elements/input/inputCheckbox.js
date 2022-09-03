import React from "react";
import {InputStyle} from "./style";

function InputCheckbox(props) {



    return (
        <InputStyle
            placeholder={props.placeholder}
            type={props.type}
            width={props.width}
            marginTop={props.marginTop}
            borderColor={props.borderColor}
            checked={props.checked}
            onChange={(e) => props.setChecked(e.target.checked)}
        />
    );
}

export default InputCheckbox;