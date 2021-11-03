import React from 'react';

import style from '../utils/style';

function Gender({ func, check, reference}) {
    return(
        <div style={style.inputStyle}>
        <form  onChange={func} ref={reference} checked={check}>
                <label htmlFor="female">Female</label>
                <input
                    type="radio"
                    value="Female"
                    id="female"
                    name="gender"
                />

                <label htmlFor="male">Male</label>
                <input
                    type="radio"
                    value="Male"
                    id="male"
                    name="gender"
                />

                <label htmlFor="other">Other</label>
                <input
                    type="radio"
                    value="Other"
                    id="other"
                    name="gender"
                />
        </form>
    </div>

    )
}

export default Gender;