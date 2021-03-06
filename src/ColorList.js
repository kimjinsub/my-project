import React from "react";
import Color from "./Color";
import { useColors } from "./color-hooks";

export default function ColorList() { 
    debugger;
    const { colors } = useColors();
    
    if(!colors.length) return <div>표시할 색이 없습니다.</div>;
    return (
        <div className="color-list">
            {
                colors.map(color => (
                    <Color 
                        key={color.id} 
                        {...color} 
                    />
                ))
            }
        </div>
    );
}

// import React from "react";
// import Color from "./Color";

// export default function ColorList({ 
//     colors = [], 
//     onRemoveColor = f => f, 
//     onRateColor = f => f
// }) {
//     if(!colors.length) return <div>표시할 색이 없습니다.</div>;
//     return (
//         <div className="color-list">
//             {
//                 colors.map(color => (
//                     <Color 
//                         key={color.id} 
//                         {...color} 
//                         onRemove={onRemoveColor} 
//                         onRate={onRateColor}
//                     />
//                 ))
//             }
//         </div>
//     );
// }