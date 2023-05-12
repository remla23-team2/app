import React, { createContext, useState } from 'react'

export const SentimentContext = createContext({})

export default function SentimentProvider(props) {

    async function getSentiment(review) {
        const url = "http://localhost:8080/predict"
        const httpOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "review": review })
        }
        const response = await fetch(url, httpOptions);
        return response.json().result;
    }

    return (
        <SentimentContext.Provider value={{ getSentiment }}>
            {props.children}
        </SentimentContext.Provider>
    )
}
