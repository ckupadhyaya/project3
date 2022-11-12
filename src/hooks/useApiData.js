import { useState } from "react";
import { useEffect } from "react"


export function useApiData(url)
{
    const[data,setData]= useState([]);
    useEffect(()=>{
        fetch(url)
        .then(response=>response.json())
        .then((data)=>{
          setData(data);
        })
    },[url]);
    return[data];
}