import { useState } from "react";
import "./App.css";

function App() {
    return (
        <>
            <Header />
            <Main />
            <Footer creator={{ firstName: "Abosi", lastName: "Godwin" }} />
        </>
    );
}

function Header() {
    return <h4>My React Counter Project</h4>;
}

function Main() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    return (
        <>
            <Steps step={step} setStep={setStep} />
            <br />
            <Counter step={step} count={count} setCount={setCount} />
            <br />
            <Message count={count} />
        </>
    );
}

function Steps({ step, setStep }) {
    function stepIncreaser() {
        setStep(prevStep => prevStep + 1);
    }

    function stepDecreaser() {
        step !== 1 && step >= 1 && setStep(prevStep => prevStep - 1);
    }

    return (
        <div className="flex">
            <button onClick={stepIncreaser}>+</button>
            <p>Steps: {step}</p>
            <button onClick={stepDecreaser}>-</button>
        </div>
    );
}

function Counter({ step, count, setCount }) {
    function countIncreaser() {
        setCount((count += step));
    }
    function countDecreaser() {
        setCount((count -= step));
    }
    return (
        <div>
            <button onClick={countIncreaser}>+</button>
            <p>count: {count}</p>
            <button onClick={countDecreaser}>-</button>
        </div>
    );
}
function Message({ count }) {
    const date = new Date("2024-06-24");
    date.setDate(date.getDate() + count);
    const today = new Date();

    return +count === 0 ? (
        <div>
            <h2>Today is {date.toDateString()}.</h2>
        </div>
    ) : (
        <div> 
                <h2>
                    {Math.abs(count)} {count !== 1 ? "days" : "day"}{" "}
                    {count < 1 ? "ago " : null}
                    from today is {date.toDateString()}.
                </h2>
            
        </div>
    );
}

function Footer({ creator }) {
    return (
        <h4>
            Designed with love by {creator.firstName} {creator.lastName}
        </h4>
    );
}

export default App;
