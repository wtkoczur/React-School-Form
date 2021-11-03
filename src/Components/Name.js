import React from "react";

import style from '../utils/style';

function Name({ func, reference }) {
    return(
        <div style={style.inputStyle}>
            <label htmlFor="name">Name</label>
            <input
            type="text"
            name="name"
            placeholder="name"
            onChange={func}
            style={style.radius}
            ref={reference}
        />
        </div>
    )
}

export default Name;