import React, { createContext, useState } from 'react'

export const SentimentContext = createContext({})

export default function SentimentProvider(props) {

    async function getSentiment(values) {
        const url = process.env.REACT_APP_API_URL + "/predict";
        const httpOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "review": values.review, "ground_truth": values.ground_truth })
        }
        console.log(process.env); // log the env object
        console.log(url); // log the url
        const response = await fetch(url, httpOptions);
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
