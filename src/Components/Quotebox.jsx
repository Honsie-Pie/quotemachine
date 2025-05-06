import React from 'react'
import { useRandomQuote } from '../services/queries';

export default function Quotebox() {

    const { data, error, isError, isLoading, isSuccess, refetch } = useRandomQuote();

    if(isError){
        console.log(error);
        return(
            <p>erra</p>
        )
    }

    if (isLoading){
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }
    
    if (isSuccess){
        console.log(data);
  return (
    <div>
        <h6>{data.content}</h6>
        <p>{data.author}</p>
        <button onClick={() => refetch()}>New quote!</button>
    </div>
  )
}
}
