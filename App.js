/**
 * <div id ="parent">
 *      <div id="child">
 *          <h1>I am h1 tag </h1>
 *          <h2>I am h1 tag </h2>
 *  </div>
 * </div>
 * 
 */
const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},
[React.createElement("h1",{}, "I am h1 tag") ,React.createElement("h1",{}, "I am h1 tag")]

),React.createElement("div",{id:"child2"},
[React.createElement("h1",{}, "I am h1 tag") ,React.createElement("h1",{}, "I am h1 tag")]

)]
);

console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);