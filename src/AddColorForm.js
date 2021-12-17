import React from "react";// useState 훅은 useInput 훅 안에 캡슐화된다. 
import { useInput } from "./hooks";
import { useColors } from "./color-hooks";

export default function AddColorForm() {
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#770077");
    const { addColor } = useColors();

    const submit = e => {
        e.preventDefault();
        addColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    };

    return (
        <form onSubmit={submit}>
            <input 
                {...titleProps}
                type="text" 
                placeholder="color title..." 
                required 
            />
            <input 
                {...colorProps}
                type="color" 
                required 
            />
            <button>ADD</button>
        </form>
    );
}

// import React, { useRef } from "react";

// export default function AddColorForm({ onNewColor = f => f}) {
//     const txtTitle = useRef();
//     const hexColor = useRef();

//     const submit = e => {
//         e.preventDefault();
//         const title = txtTitle.current.value;
//         const color = hexColor.current.hexColor;
//         onNewColor(title, color);
//         txtTitle.current.value = "";
//         hexColor.current.value = "";
//     };

//     return (
//         <form onSubmit={submit}>
//             <input ref={txtTitle} type="text" placeholder="color title..." required />
//             <input ref={hexColor} type="color" required />
//             <button>ADD</button>
//         </form>
//     );
// }