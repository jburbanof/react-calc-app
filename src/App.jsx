/* eslint no-eval: 0*/
//import
import React, { useState } from "react";
import Result from "./components/Result";
import  words from "lodash.words";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import "./App.css";

// generate
const App = () => {
  const [text, setText] = useState("")
  const item = words(text, /[^-^+^*^/]+/g)
  const value = item.length > 0 ? item[item.length-1] : "0"
  return (
    <main className="react-calculator">
      <Result value={value} />
      <Numbers
        onClickNumber={(number) => {
          setText(`${text}${number}`)
        }}
      />
      <Functions
        onDelete={() => {
          if (text.length > 0)
          {
          const newText = text.substring(0, text.length-1)
          setText(newText)}
        }}
        onContentClear={() => {
          setText("")
        }}
      />
      <MathOperations
        onClickOperation={(operation) => {
          setText(`${text}${operation}`)
        }}
        onClickEqual={(equal) => {
          setText(eval(text).toString())
        }}
      />
    </main>
  )
}

//export
export default App;
