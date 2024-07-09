import React, { useState } from 'react';


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
    // const [] = useState("");

  return (
    <div style={style}>
        <input 
        type='text' 
        placeholder='Enter amount'
        value={amount}
        onChange={(e)=> setAmount(e.target.value)}
        />
        <select>
            <option>USD</option>
            <option>EUR</option>
            <option>CAN</option>
        </select>

        <select>
            <option>EUR</option>
            <option>USD</option>
            <option>CAN</option>
        </select>

        <p style={amountStyle}>AMOUNT</p>
    </div>
  )
}

export default Converter;