import React from "react";

const Hello = () => {
    // return ( <
    //     div >
    //     <
    //     h1 > hello vishwas!! < /h1> < /
    //     div >
    // )

    return React.createElement("div", { id: 'hello', className: 'dummyClass' },
        React.createElement("h1", null, 'hello alex famify'))

}

export default Hello