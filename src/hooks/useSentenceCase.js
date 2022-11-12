import { useState } from "react";
import { useEffect } from "react";


export function useSentenceCase(str){
    const[sentence,setSentence]=useState('');
    useEffect(()=>{
        var firstChar = str.charAt(0);
        var restChars = str.substring(1);
        var sentence = firstChar.toUpperCase() + restChars.toLowerCase();
        setSentence(sentence);
    },[str]);
    return sentence;
}