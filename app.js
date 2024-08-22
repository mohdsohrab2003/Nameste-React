// const heading=React.createElement(
// "h1",
//     {id:"heading" ,abc:"xyz"},
//     "Hello world Form JavaScript"
// );
// const root=ReactDOM.createRoot(document.querySelector("#root"));
// root.render(heading);

const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{}, "Hello I Am H1 TAGS"),
        React.createElement("h2",{}, "Hello I Am H2 TAGS")
        ]),
    React.createElement("div",{id:"child2"},[
            React.createElement("h1",{}, "Hello I Am H1 TAGS"),
            React.createElement("h2",{}, "Hello I Am H2 TAGS")
            ]),

)
const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);