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

    useEffect(function(){
        async function getConversion() {

            const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCurr}`)
    
            const data = await res.json();
            setOutput(data.rates[toCurr])
        }

        
        getConversion();
    }, [amount, fromCur, toCurr])

  return (
    <div style={style}>
        <input 
        type='text' 
        placeholder='Enter amount'
        value={amount}
        onChange={(e)=> setAmount(Number(e.target.value))}
        />
        <select value={fromCur} onChange={(e)=> setFromCurr(e.target.value)}>
            <option>USD</option>
            <option>EUR</option>
            <option>CAN</option>
            <option>INR</option>
        </select>

        <select value={toCurr} onChange={(e)=> setToCurr(e.target.value)}>
            <option>EUR</option>
            <option>USD</option>
            <option>INR</option>
            <option>CAN</option>
        </select>

        <p style={amountStyle}>{output}</p>
    </div>
  )
}

export default Converter;