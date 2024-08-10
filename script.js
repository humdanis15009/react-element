const container = React.createElement(
  "div",
  { className: "container", id: "container" },
  [
    React.createElement("section", { key: 1 }, [
      React.createElement(
        "p",
        { key: 1 },
        "The library for web and native user interfaces"
      ),
      React.createElement("img", {
        key: 2,
        style: { width: "200px", backgroundColor: 'black', borderRadius: '8px', padding: '16px' },
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      }),
    ]),
    React.createElement("section", { key: 2 }, [
      React.createElement("form", { key: 1 }, "hii"),
    ]),
  ]
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(container);
