import React, { createContext, useState } from 'react'
import axios from 'axios'

export const SentimentContext = createContext({})

export default function SentimentProvider(props) {

    async function getSentiment(review) {
        const url = process.env.REACT_APP_MODEL_SERVICE_URL
        const httpOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "review": review })
        }
        console.log(process.env); // log the env object
        console.log(url); // log the url
        // const response = await fetch(url, httpOptions);
        const response = await axios.post(url, { "review": review });
        console.log(response); // log the response object
        const responseBody = await response.json();
        console.log(responseBody); // log the response body
        return responseBody.result;
    }

    return (
        <SentimentContext.Provider value={{ getSentiment }}>
            {props.children}
        </SentimentContext.Provider>
    )
}
