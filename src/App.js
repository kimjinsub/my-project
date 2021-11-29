import React from "react";
import ColorList from "./ColorList.js";
import AddColorForm from "./AddColorForm";

export default function App() {
  return (
    <>
      <AddColorForm />
      <ColorList />
    </>
  );
}

// import React, { useState } from "react";
// import colorData from "./color-data.json";
// import ColorList from "./ColorList.js";
// import AddColorForm from "./AddColorForm";
// import { v4 } from "uuid";

// export default function App(){
//   const [colors, setColors] = useState(colorData.colors);
//   return (
//     <>
//       <ColorList 
//         colors={colors} 
//         onRemoveColor={id => {
//           const newColors = colors.filter(color => color.id !== id);
//           setColors(newColors);
//         }}
//         onRateColor={(id, rating) => {
//           const newColors = colors.map(color => 
//             color.id === id ? { ...color, rating } : color
//           );
//           setColors(newColors);
//         }}
//       />
//       <AddColorForm 
//         onNewColor={(title, color) => {
//           const newColors = [
//             ...colors,
//             {
//               id: v4(),
//               rating: 0,
//               title,
//               color
//             }
//           ];
//           setColors(newColors);
//         }}
//       />
//     </>
//   );
// }

// import React, { useState } from "react";
// import { FaStar } from "react-icons/fa";

// const Star = ({ selected = false, onSelect = f => f }) => (
//   <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
// );

// const createArray = length => [...Array(length)];


// export default function StarRating({ style = {}, totalStars = 5}) {
//   const [selectedStars, setSelectedStars] = useState(0);
//   return (
//     <div style={{padding: "5px", ...style}}>
//       {createArray(totalStars).map((n, i) => (
//         <Star 
//           key={i} 
//           selected={selectedStars > i} 
//           onSelect={() => setSelectedStars(i + 1)}
//         />
//       ))}
//       <p>
//         {selectedStars} / {totalStars}
//       </p>
//     </div>
//   );
// }


// export default function StarRating({ totalStars = 5}) {
//   return createArray(totalStars).map((n, i) => <Star key={i} />);
// }



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
