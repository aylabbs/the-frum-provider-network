import React from "react";
import MainTable from "./Table.jsx";
import useWindowSize from "./useWindowSize.js";

function App() {
  const { height, width } = useWindowSize();
  return (
    <div
      style={{
        height,
        width,
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      <header style={{ width, height: 45 }}>
        <h1>Header</h1>
      </header>
      <main style={{ width, height: height - 45, padding: 10 }}>
        <MainTable height={height - 45 - 20} width={width - 20} />
      </main>
    </div>
  );
}

export default App;
