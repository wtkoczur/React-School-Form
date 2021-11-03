import React from 'react';

import style from '../utils/style';

function Email({ func, reference }) {
    return(
        <div style={style.inputStyle}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        onChange={func}
                        style={style.radius}
                        ref={reference}
                    />
                </div>
    )
}

export default Email;