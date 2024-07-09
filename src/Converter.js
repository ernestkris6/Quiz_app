import React, { useEffect, useState } from 'react';


const style= {
    margin : "12px"
}

const amountStyle = {
    fontSize : "16px",
    marginTop : "12px"
}

function Converter() {

    const [amount, setAmount] = useState(1);
    const [fromCur, setFromCurr] = useState("EUR");
    const [toCurr, setToCurr] = useState("USD");
    const [output, setOutput] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    useEffect(function(){
        async function getConversion() {

            setIsLoading(true)
            const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCurr}`)
    
            const data = await res.json();
            setOutput(data.rates[toCurr])
            //console.log(data);
            setIsLoading(false)
        }

        if(fromCur === toCurr) return setAmount(amount);
        
        getConversion();
    }, [amount, fromCur, toCurr])

  return (
    <div style={style}>
        <input 
        type='text' 
        placeholder='Enter amount'
        value={amount}
        onChange={(e)=> setAmount(Number(e.target.value))}
        disabled={isLoading}
        />
        <select 
        value={fromCur} 
        onChange={(e)=> setFromCurr(e.target.value)}
        disabled={isLoading}>
            <option value={"USD"}>USD</option>
            <option value={"EUR"}>EUR</option>
            <option value={"CAD"}>CAD</option>
            <option value={"INR"}>INR</option>
            <option value={"GBP"}>GBP</option>
        </select>

        <select value={toCurr} onChange={(e)=> setToCurr(e.target.value)}
        disabled={isLoading}>
            <option value={"EUR"}>EUR</option>
            <option value={"USD"}>USD</option>
            <option value={"INR"}>INR</option>
            <option value={"CAD"}>CAD</option>
            <option value={"GBP"}>GBP</option>
        </select>

        <p style={amountStyle}>{output} {toCurr}</p>
    </div>
  )
}

export default Converter;