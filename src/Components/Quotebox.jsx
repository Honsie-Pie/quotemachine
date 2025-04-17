import React from 'react'
import axios from 'axios';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const getQuote = async() => {
    try {
        const res = await axios.get('http://api.quotable.io/random');
        return res.data;
      } catch(error) {
        console.log(error);
      }
}


export default function Quotebox() {

    const queryClient = useQueryClient();
    const { data, error, isError, isLoading, isSuccess } = useQuery({
        queryKey: ['quote'],
        queryFn: getQuote,
    }, queryClient);

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
    </div>
  )
}
}
