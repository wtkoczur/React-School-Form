import React from 'react';

import style from '../utils/style';

function Regulations() {
    return(
        <div style={style.checkbox}>
            <input type="checkbox" />
            <label htmlFor="regulations">Accept the regulations</label>
        </div>
    )
}

export default Regulations;