import { useState } from "react";

const GREEN = "#34a853";
const ORANGE = "#f9a825";
const RED = "#e53935";

function Display({ value }) {
  return <div className="display">{value}</div>;
}

function Button({ label, color, onClick }) {
  return (
    <button className="btn" style={{ backgroundColor: color }} onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

export default function App() {
  const [expression, setExpression] = useState("");

  function calculate() {
    if (expression === "") return;
    const js = expression.replaceAll("×", "*").replaceAll("÷", "/").replaceAll("−", "-");
    try {
      const result = Function("return " + js)();
      setExpression(isFinite(result) ? String(Math.round(result * 1e10) / 1e10) : "Lỗi");
    } catch {
      setExpression("Lỗi");
    }
  }

  function onButton(label) {
    if (expression === "Lỗi") {
      setExpression(["C", "Delete", "="].includes(label) ? "" : label);
    } else if (label === "C") {
      setExpression("");
    } else if (label === "Delete") {
      setExpression(expression.slice(0, -1));
    } else if (label === "=") {
      calculate();
    } else {
      setExpression(expression + label);
    }
  }

  const rows = [
    [["C", RED], ["Delete", ORANGE], [".", GREEN], ["÷", ORANGE]],
    [["7", GREEN], ["8", GREEN], ["9", GREEN], ["×", ORANGE]],
    [["4", GREEN], ["5", GREEN], ["6", GREEN], ["−", ORANGE]],
    [["1", GREEN], ["2", GREEN], ["3", GREEN], ["+", ORANGE]],
  ];

  return (
    <div className="calculator">
      <Display value={expression} />
      <div className="keys">
        {rows.flat().map(([label, color]) => (
          <Button key={label} label={label} color={color} onClick={onButton} />
        ))}
        <span />
        <Button label="0" color={GREEN} onClick={onButton} />
        <Button label="=" color={GREEN} onClick={onButton} />
      </div>
    </div>
  );
}
