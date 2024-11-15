import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button,Container } from "react-bootstrap"; 
import './App.css';
import React, { useState } from "react";
function App() {
  const [weight,setWeight] = useState('');
  const [height,setHeight] = useState('');
  const [bmi,setBmi] = useState('');
  const [message,setMessage] = useState('');

//logic
let calcBmi =(e)=>{
  e.preventDefault();
  if (!weight || !height) {
    alert("please enter a valid weight and height")
  }else{
    let bmi = (weight/(height*height)*703)
    setBmi(bmi.toFixed(1))

    if (bmi < 18.5) {
      setMessage("You are underweight");
    } else if (bmi >= 18.5 && bmi < 25) {
      setMessage("You are a Good weight");
    } else if (bmi >= 25 && bmi < 30) {
     setMessage("You are overweight");
     } else {
      setMessage("You are Obese");
    }
  }
}

//reload 
let reload=()=>{
   setWeight('');
    setHeight('');
    setBmi('');
    setMessage('');
}

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container bg-red-300 rounded-md p-5 shadow mt-5">
        <h2 className="mb-4 text-center bg-gray-400 text-lg font-serif shadow-sm">BMI Calculator</h2>
        <form onSubmit={calcBmi} >
        <div className="form-group">
            <label for="input2" className="text-center text-lg font-serif shadow-sm">Height(in inch)</label>
            <input type="text" className="form-control" onChange={(e)=>setHeight(e.target.value)} value={height} id="input2" placeholder="Enter height in inch" />
          </div>
          <div className="form-group">
            <label for="input1" className="text-center text-lg font-serif shadow-sm">Weight(in Pounds)</label>
            <input type="text" className="form-control" onChange={(e)=>setWeight(e.target.value)} value={weight} id="input1" placeholder="Enter weight in pounds" />
          </div>

          <br />

          <button type="submit"   className="btn btn-primary ms-2 mb-3 me-2 hover:bg-blue-800">Submit</button>
          <button type="submit" onClick={reload} className="btn btn-outline-danger mb-3 bg-slate-600 text-yellow-50 ms-2">Reload</button>

        </form>
        <div className="center">
          <h3>Your BMI is :{bmi}</h3>
          <p>{message}</p>
        </div>

      </div>
    </div>

  )
}

export default App;


// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import React, { useState } from "react";

// function App() {
//   const [weight, setWeight] = useState('');
//   const [height, setHeight] = useState('');
//   const [bmi, setBmi] = useState('');
//   const [message, setMessage] = useState('');

//   // Logic
//   let calcBmi = (e) => {
//     e.preventDefault();

//     if (!weight || !height) {
//       alert("Please enter a valid weight and height.");
//     } else {
//       // Convert strings to numbers
//       const weightNum = parseFloat(weight);
//       const heightNum = parseFloat(height);

//       // BMI formula for imperial units
//       let bmiValue = (weightNum / (heightNum * heightNum)) * 703;
//       setBmi(bmiValue.toFixed(1));

//       if (bmiValue < 18.5) {
//         setMessage("You are underweight");
//       } else if (bmiValue >= 18.5 && bmiValue < 25) {
//         setMessage("You have a normal weight");
//       } else if (bmiValue >= 25 && bmiValue < 30) {
//         setMessage("You are overweight");
//       } else {
//         setMessage("You are obese");
//       }
//     }
//   };

//   // Reload
//   let reload = () => {
//     setWeight('');
//     setHeight('');
//     setBmi('');
//     setMessage('');
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <div className="container bg-light rounded p-5 shadow">
//         <h2 className="mb-4 text-center">BMI Calculator</h2>
//         <form onSubmit={calcBmi}>
//           <div className="form-group">
//             <label htmlFor="height">Height (in inches):</label>
//             <input
//               type="text"
//               className="form-control"
//               id="height"
//               onChange={(e) => setHeight(e.target.value)}
//               value={height}
//               placeholder="Enter height in inches"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="weight">Weight (in pounds):</label>
//             <input
//               type="text"
//               className="form-control"
//               id="weight"
//               onChange={(e) => setWeight(e.target.value)}
//               value={weight}
//               placeholder="Enter weight in pounds"
//             />
//           </div>

//           <div className="mt-3">
//             <button type="submit" className="btn btn-primary me-2">Submit</button>
//             <button type="button" onClick={reload} className="btn btn-outline-danger">
//               Reload
//             </button>
//           </div>
//         </form>
//         {bmi && (
//           <div className="mt-4 text-center">
//             <h3>Your BMI is: {bmi}</h3>
//             <p>{message}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;