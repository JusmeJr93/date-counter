import { useState } from "react";


// Main App Component
export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

// Counter Component
function Counter() {
  // Step State and Handlers
  const [step, setStep] = useState(1);

  function handleMinusStep() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handlePlusStep() {
    setStep((s) => s + 1);
  }

  // Count State and Handlers
  const [count, setCount] = useState(0);

  function handleMinusCount() {
    setCount((c) => c - step);
  }

  function handlePlusCount() {
    setCount((c) => c + step);
  }

  // Date Preview Function
  function datePreview() {
    const today = new Date();

    if (count === 0) return <p>Today is {today.toDateString()}</p>;

    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + count);

    if (count < 0) {
      return (
        <p>
          {count === -1 ? "Yesterday" : `${-1 * count} days ago`} was{" "}
          {targetDate.toDateString()}
        </p>
      );
    }

    if (count > 0) {
      return (
        <p>
          {count === 1 ? "Tomorrow" : `${count} days from today`} is{" "}
          {targetDate.toDateString()}
        </p>
      );
    }
  }

  // Render Component
  return (
    <div>
      <div className="steps">
        <button onClick={handleMinusStep}>-</button>
        <span> Step: {step} </span>
        <button onClick={handlePlusStep}>+</button>
      </div>
      <br />
      <div className="counter">
        <button onClick={handleMinusCount}>-</button>
        <span> Count: {count} </span>
        <button onClick={handlePlusCount}>+</button>
      </div>
      <br />
      <div className="date">{datePreview()}</div>
    </div>
  );
}
