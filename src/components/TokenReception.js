import axios from 'axios';
import React, { useEffect } from 'react'
const url = "https://8430-112-196-113-2.in.ngrok.io/cookies?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZiYTVkNWY0ZjcwZDZjMGIzZWZmNDAiLCJlbWFpbCI6InByaXRpbWl0dGFsMjdAZ21haWwuY29tIiwidGltZSI6MTY4NjYzNzA5NDY4NSwiaWF0IjoxNjg2NjM3MDk0fQ.ljakf7D1M2MrC9QUmWMtPCim5VdC83G6iSkAbhniqrA";

function TokenReception() {
    useEffect(()=>{
        axios.get(url,{withCredentials: true})
        .then((response) => console.log('api call success ',response))
        .catch((error) => console.log(error, 'error aya'));
        const obj = parseQueryData(window.location);
        console.log(obj, ' parseQ');
        // document.cookie = `token=${obj.token}`;
    },[])

    function parseQueryData(url) {
        const urlObj = new URL(url);
        const queryData = {};
        urlObj.searchParams.forEach((value, key) => {
          if (queryData.hasOwnProperty(key)) {
            queryData[key] = Array.isArray(queryData[key])
              ? [...queryData[key], value]
              : [queryData[key], value];
          } else {
            queryData[key] = value;
          }
        });
        return queryData;
      }

    return (
    
    <div>TokenReception</div>
  )
}

export default TokenReception