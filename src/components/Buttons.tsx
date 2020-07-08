import React from 'react';
import './ButtonStyles.css';

type IncType={
    Inc:(value: number)=>void;
    Reset:(value: number)=>void;
}



let Buttons = (props:IncType) => {
    let counter=0
    return (
        <div className={'buttons'}>
            <div onClick={()=>props.Inc(1)} className={'clickMe'}>INC</div>
            <div onClick={()=>props.Reset(0)} className={'clickMe'}>RESET</div>
        </div>
    )
}

export default Buttons;

//=================================================
// import React from 'react';
// import './ButtonStyles.css';
//
// type IncType={
//     Inc:(value: number)=>void;
//     Reset:(value: number)=>void;
// }
//
//
//
// let Buttons = (props:IncType) => {
//     let counter=0
//     return (
//         <div className={'buttons'}>
//             <div onClick={()=>props.Inc(1)} className={'clickMe'}>INC</div>
//             <div onClick={()=>props.Reset(0)} className={'clickMe'}>RESET</div>
//         </div>
//     )
// }
//
// export default Buttons;
