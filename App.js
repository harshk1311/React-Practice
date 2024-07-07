const parent = React.createElement("div",{id:"div1"},
[React.createElement("div",{id:"div2"},
[React.createElement("h1",{},"Hello H1"),React.createElement("h2",{},"Hello H2")])
,
React.createElement("div",{id:"div3"},
[React.createElement("h1",{},"Hello H1"),React.createElement("h2",{},"Hello H2")])
]
);


const parent1 = React.createElement("div",{id:"div1"},
[React.createElement("div",{id:"div2"},
[React.createElement("h1",{},"Hello H1"),React.createElement("h2",{},"Hello H2")])
]
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

const footer=ReactDOM.createRoot(document.getElementById("footer"));
footer.render(parent1);