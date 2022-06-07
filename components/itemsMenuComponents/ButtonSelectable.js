import React, { useRef, useState } from 'react'
import { darken } from '../../helpers/darken';
import { onClickAction } from '../../helpers/onClickAction';

export const ButtonSelectable = ({ style }) => {


    const buttonRef = useRef(null)

    return (
        <button
            ref={buttonRef}
            style={{
                width: '100%',
                height: "100%",
                ...style,
            }}
            onClick={() => onClickAction(style.action)}
        >
            {style.title}
        </button>




    )
}

