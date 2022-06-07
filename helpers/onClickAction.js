import React from 'react'

export const onClickAction = (action) => {

    const onClick = () => {
        console.log("Llegamos a la funcion")
        try {
            eval(action)
        } catch (error) {
            console.log(error)
            Swal.fire(
                'Error',
                'Something went wrong, try again later',
                'error'
            )
        }
    }

    return onClick;
}
