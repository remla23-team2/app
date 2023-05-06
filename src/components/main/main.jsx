import React from 'react'
import "./main.scss"
import { Text } from '@mantine/core'
import { Navbar } from '../navbar/navbar'
import Review from '../review/review'
export default function MainComponent() {
    return (
        <div className='main'>
            <Navbar> </Navbar>
            <div className="content">

                <Review />
            </div>
        </div>
    )
}
