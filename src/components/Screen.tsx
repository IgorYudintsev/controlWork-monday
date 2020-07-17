import React from 'react';
import './ScreenStyles.css';

type ScreenType={
    num:Array<NumType>
}

type NumType={
    id:number
}

function Screen(props: ScreenType) {
    return (
        <div className={'screen'}><span className={props.num[0].id>= 5 ? 'red' : ''}>{props.num[0].id}</span></div>
      )
}

export default Screen

//=======================
// 1 вариант
// import React from 'react';
// import './ScreenStyles.css';
//
// type ScreenType={
//     num:Array<NumType>
// }
//
// type NumType={
//     id:number
// }
//
// function Screen(props: ScreenType) {
//     return (
//         <div className={'screen'}><span className={props.num[0].id>= 5 ? 'red' : ''}>{props.num[0].id}</span></div>
//     )
// }
// export default Screen