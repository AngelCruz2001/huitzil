import React, { useRef, useState } from 'react'
import { darken } from '../helpers/darken';

export const Button = ({
    width = '30%',
    title = "Hello world!",
    backgroundColor = "#000000",
    color = "#ffff",
    fontSize = "2rem",
    height = "auto",
    borderRadius = "0.5em",
    fontWeight = "normal",
    fontFamily="Times New Roman",
    action = () => { },

}) => {

    const buttonRef = useRef(null)

    const [stylesButton, setStylesButton] = useState(
        {
            width,
            height,
            borderRadius,
            fontSize,
            backgroundColor,
            color,
            margin: "0.5em",
            padding: "0.5em",
            cursor: "pointer",
            border: "none",
            fontWeight,
            fontFamily
        })


    const newColors = {
        backgroundColor: darken(stylesButton.backgroundColor, 10),
        color: darken(stylesButton.color, 10),
    }




    const onMouseEnter = () => {
        console.log('hover')
        buttonRef.current.style.backgroundColor = newColors.backgroundColor
        buttonRef.current.style.color = newColors.color
    }

    const onMouseLeave = () => {
        console.log('leave')
        buttonRef.current.style.backgroundColor = stylesButton.backgroundColor
        buttonRef.current.style.color = stylesButton.color
    }

    return (
        <button
            ref={buttonRef}
            style={stylesButton}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}

        >
            {title}
        </button>




    )
}

