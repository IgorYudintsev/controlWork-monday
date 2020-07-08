import React, {useState} from 'react';
import './App.css';
import Buttons from "./components/Buttons";
import Screen from "./components/Screen";

function App() {
    let [num, setNum] = useState([
        {id:0}
        ])

    function Inc(value: number) {
       let sum={id:num.length}
        setNum([sum,...num]);
              console.log(num)
    }

    function Reset(resetValue: number) {
         setNum([{id:0}]);
    }
{}
    return (
        <div className="App">
            <Screen num={num} />
            <Buttons Inc={Inc} Reset={Reset}/>
        </div>
    );
}

export default App;

//================================================================================
// 1 вариант

// import React, {useState} from 'react';
// import './App.css';
// import Buttons from "./components/Buttons";
// import Screen from "./components/Screen";
//
// function App() {
//     let [num, setNum] = useState([0])
//
//     let sum = 0
//
//     function Inc(value: number) {
//         sum = num.length;
//         setNum([sum, ...num]);
//         console.log(num+'длина: '+num.length)
//     }
//
//     function Reset(resetValue: number) {
//         setNum([])
//     }
//
//     return (
//         <div className="App">
//             <Screen num={num}/>
//             <Buttons Inc={Inc} Reset={Reset}/>
//         </div>
//     );
// }
//
// export default App;