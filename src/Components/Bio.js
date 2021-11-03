import React from 'react';

import style from '../utils/style';

function Bio({ func, reference }) {
    return(
        <div style={style.inputStyle}>
        <label htmlFor="bio">Bio</label>
        <textarea
            name="bio"
            style={style.textarea}
            onChange={func}
            ref={reference}
        />
    </div>
    )
}

export default Bio;