import React from 'react'
import { onClickAction } from '../../helpers/onClickAction'

export const ImageSelectable = ({ style }) => {
    return (
        <img style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            
        }}
            onClick={() => onClickAction(style.action)}
            src={style.url}
        />
    )
}
