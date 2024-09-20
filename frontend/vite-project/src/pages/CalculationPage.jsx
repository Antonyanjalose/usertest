import React, { useState } from 'react';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_BASE_URL;
const CalculationPage = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleCalculate = async () => {
    try {
      const res = await axios.post(`${apiUrl}/calculate`, { num1, num2 });
      setResult(res.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Calculation Page</h2>
      <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} placeholder="Number 1" />
      <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} placeholder="Number 2" />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default CalculationPage;
