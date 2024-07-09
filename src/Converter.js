import React, { useEffect, useState } from 'react';


const style= {
    margin : "12px"
}

const amountStyle = {
    fontSize : "12px",
    marginTop : "12px"
}

function Converter() {

    const [amount, setAmount] = useState(1);
    const [fromCur, setFromCurr] = useState("USD");
    const [toCurr, setToCurr] = useState("EUR");
    const [] = useState("");

    useEffect(function(){
        function getConversion() {
            const res = fetch(`https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`)
    
            const data = res.json();
            console.log(data);;
        }

        getConversion();
    })

  return (
    <div style={style}>
        <input 
        type='text' 
        placeholder='Enter amount'
        value={amount}
        onChange={(e)=> setAmount(e.target.value)}
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

        <p style={amountStyle}>AMOUNT</p>
    </div>
  )
}

export default Converter;