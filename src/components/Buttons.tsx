import React from 'react';
import './ButtonStyles.css';

type IncType={
    Inc:(value: number)=>void;
    Reset:(value: number)=>void;
    num:Array<NumType>
}
type NumType={
    id:number
}

let Buttons = (props:IncType) => {
    return (
        <div className={'buttons'}>
            <button disabled={props.num.length==6?true:false} onClick={()=>props.Inc(1)} className={'clickMe'}>INC</button>
            <button  disabled={props.num.length==1?true:false} onClick={()=>props.Reset(0)} className={'clickMe'}>RESET</button>
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
//     num:Array<NumType>
// }
// type NumType={
//     id:number
// }
//
// let Buttons = (props:IncType) => {
//     return (
//         <div className={'buttons'}>
//             <button onClick={()=>props.Inc(1)} className={'clickMe'}>INC</button>
//             <button  disabled={props.num.length==1?true:false} onClick={()=>props.Reset(0)} className={'clickMe'}>RESET</button>
//         </div>
//     )
// }
//
// export default Buttons;
