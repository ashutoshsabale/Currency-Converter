import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
      const [info, setInfo] = useState({});
      useEffect(()=>{
            fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res)=> res.json())
            .then((res)=> setInfo(res[currency]))
            console.log("info1",info)
      }, [currency])
      console.log("info2", info);
      return info
}


export default useCurrencyInfo