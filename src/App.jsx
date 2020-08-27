import React from 'react';
import Button from './components/Button';
import MathOperations from './components/MathOperations'
import Result from './components/Result';
import './App.css';


const App = () => {

    const clickHandler = text => {
        console.log("Button.clickHandler", text)
    };

    console.log('Renderizado del componente App');
    const myButtons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    return (
        <main className="react-calculator">
            <Result value={"0"} />
            <div className="numbers">
                {myButtons.map(i => {
                    return (
                        <Button text={i} clickHandler={clickHandler} key={i} />
                    )
                })}
                {/* <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button> */}
            </div>
            <div className="functions">
                <button>
                    clear
                </button>
                <button>
                    r
                </button>
            </div>
            <MathOperations
                onClickOperation={operation =>
                    console.log("Operation:", operation)
                }
                onClickEqual={equal =>
                    console.log("Equals:", equal)
                } />
        </main>
    );
};

export default App;