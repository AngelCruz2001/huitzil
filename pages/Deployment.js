import React from 'react'
import { DrawableArea } from '../components/DrawableArea'
export default function Deployment() {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            // backgroundColor: 'red',

        }}>

            <DrawableArea />
        </div>
    )
}
