/* eslint no-eval: 0 */
import React, { useState, FC } from "react";
import words from "lodash.words";
import Footer from "./components/Footer";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Result from "./components/Result";
import "./App.css";

const App: FC = () => {
  const [stack, setStack] = useState("");
  const items = words(stack, /[^-^+^*^/]+/g); // usamos expresion regular para no mostrar
  // simbolos en la calculadora

  const value = items.length > 0 ? items[items.length - 1] : "0";

  return (
    <>
      <main className="react-calculator">
        <Result value={value} />
        <Numbers
          onClickNumber={(number) => {
            setStack(`${stack}${number}`);
          }}
        />
        <Functions
          onContentClear={() => {
            setStack("");
          }}
          onDelete={() => {
            if (stack.length > 0) {
              const newStack = stack.substring(0, stack.length - 1);
              setStack(newStack);
            }
          }}
        />
        <MathOperations
          onClickOperation={(operation) => {
            setStack(`${stack}${operation}`);
          }}
          onClickEqual={(equal) => {
            setStack(eval(stack).toString());
          }}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
