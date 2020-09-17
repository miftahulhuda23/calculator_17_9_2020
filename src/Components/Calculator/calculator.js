import React from "react";
import "./calculator.css";

const Calculator = () => {
  return (
    <div className="Container">
      <h1>Calculator</h1>
      <div className="form">
        <form className="form-input mb-3">
          <input className="form" type="text" />
        </form>
      </div>
      <div className="button"></div>
      <button name="7" className="btn btn-primary ml-2 mb-2">
        7
      </button>
      <button name="8" className="btn btn-primary ml-2 mb-2">
        8
      </button>
      <button name="9" className="btn btn-primary ml-2 mb-2">
        9
      </button>
      <button name="x" className="btn btn-info ml-2 mb-2">
        x
      </button>
      <br />
      <button name="4" className="btn btn-primary ml-2 mb-2">
        4
      </button>
      <button name="5" className="btn btn-primary ml-2 mb-2">
        5
      </button>
      <button name="6" className="btn btn-primary ml-2 mb-2">
        6
      </button>
      <button name="-" className="btn btn-info ml-2 mb-2">
        -
      </button>
      <br />
      <button name="1" className="btn btn-primary ml-2 mb-2">
        1
      </button>
      <button name="2" className="btn btn-primary ml-2 mb-2">
        2
      </button>
      <button name="3" className="btn btn-primary ml-2 mb-2">
        3
      </button>
      <button name="+" className="btn btn-info ml-2 mb-2">
        +
      </button>
      <br />
      <button name="." className="btn btn-primary ml-2 mb-2">
        .
      </button>
      <button name="0" className="btn btn-primary ml-2 mb-2">
        0
      </button>
      <button name="=" className="btn btn-primary ml-2 mb-2">
        =
      </button>
      <button name="/" className="btn btn-info ml-2 mb-2">
        /
      </button>
      <br />
      <button name="C" className="btn btn-danger ml-2 mb-2">
        C
      </button>
      <button name="Delete" className="btn btn-danger ml-2 mb-2">
        Delete
      </button>
    </div>
  );
};

export default Calculator;
