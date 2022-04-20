import { useEffect } from "react";

export const useFetch = (url, callback)=>{

    const getData = async ()=>{
        const response = await fetch(url);
        const data = await response.json();
        callback(data);
    }

    useEffect(()=>{
        getData();
    }, [])
}