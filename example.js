import React from "react";  // 0 
import ReactDOM from "react-dom/client";

// const Srinadh=()=>{
//     return(
//         <div>
//             Hello
//         </div>
//     )
// }
/*
    <div id="parent">
        <div id="child">
            <h1>I am h1 tag</h1>
        </div>
    </div>
*/

// 1.
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "heading" }, "I am h1 tag"), React.createElement("h2", { id: "heading2" }, "I am h2 tag")
        ])
)
// console.log(parent);

// 2
const root = ReactDOM.createRoot(document.getElementById("root"));    // 3 
//4
root.render(parent); // 5

 

const Title = ()=>(
    <h1>Heading content</h1>
  );
  const head = <h1>Hiiii {Title}</h1>
  
  
  const HeadingComponent = () => (
    <div className="hashira">
       <h2> This is a sub heading  </h2>
       {Title()}
       <Title></Title>
       <Title/>
       {head}
    </div>
  );
//   const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<HeadingComponent />);
  // const JSXHeading = <h1 className="heading">Heading in JSX</h1>; // 6
  // const root = ReactDOM.createRoot(document.getElementById("root"));
  // root.render(JSXHeading);