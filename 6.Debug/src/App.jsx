import { useState } from "react";
import "./App.css";

function App() {
  //nerede problem olduğunu düşünüyorsan oraya debugger koy
  const [exam1, setExam1] = useState(0);
  const [exam2, setExam2] = useState(0);

  const onChangeExam1 = (event) => {
    setExam1(Number(event.target.value));
  };

  const onChangeExam2 = (event) => {
    setExam2(Number(event.target.value));
  };

  const findAverage = () => {
    debugger;
    const average = sum() / 2;
    print(average);
  };

  const sum = () => {
    debugger;
    const sum = exam1 + exam2;
    return sum;
  };

  const print = (result) => {
    debugger;
    console.log("Ortalama: " + result);
    alert("Ortalama: " + result)
  };

  return (
    <div>
      <div>
        <input type="numeric" value={exam1} onChange={onChangeExam1} />
      </div>
      <div>
        <input type="numeric" value={exam2} onChange={onChangeExam2} />
      </div>
      <br />
      <div>
        <button onClick={findAverage}>Average</button>
      </div>
    </div>
  );
}

export default App;
