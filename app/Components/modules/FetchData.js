import React from 'react'

async function FetchData(){
  
    let url='http://localhost:8080/events';
  
    const response=await fetch(url,{method:'GET',
     cache: 'no-store' 
    })
    const resonseData= await response.json();
    return resonseData;
}

export default FetchData
