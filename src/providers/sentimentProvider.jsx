import React, { createContext, useState } from 'react'

const SentimentContext = createContext({})

export default function SentimentProvider(props) {

    return (
        <SentimentContext.Provider>
            {props.children}
        </SentimentContext.Provider>
    )
}
