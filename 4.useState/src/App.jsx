import { useState } from "react";
import "./App.css";

function App() {
  //useState bir kullanıcının bilgilerini yani verileri tutmak için bir hooks
  //ilk değerimiz firstName : güncellemek için mesela yeni değer ekledik setFirstName ile değiştiriyoruz
  //useState: bir stat'in değerini set metodu kullanarak değiştirdiğimizde component yeniden render edilir
  const [firstName, setFirstName] = useState("Betül");
  const [lastName, setLastName] = useState("Salim");
  const [names, setNames] = useState(["Betül","Burak","Nesrin"])
  const [userInfo, setUserInfo] = useState({username: "bsalim", password: "200377"})
  const [show, setShow] = useState(false)
  const [count, setCount] = useState(0)

  const handleChange = () => {
    setLastName("Kartal");
  }

  const handleChanges = () => {
    setNames([...names,"İbrahim"])
  }

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  console.log("Component Render Edildi");


  return (
    <>
      <div>
        {firstName} {lastName}
      </div>
      <br />
      <div>
        <button
          onClick={() => {
            setFirstName("Burak");
          }}
        >
          Change Name
        </button>
        &nbsp;&nbsp;
        <button onClick={handleChange}>Change Surname</button>
      </div>
      <br />
      <div>
        {
          names.map((name,index) => (
            <div key={index}>{index + 1} - {name}</div>
          ))
        }
      </div>
      <br />
      <div>
        <button onClick={handleChanges}>Add Name</button>
      </div>
      <br />
      <div>
        {show ? <div>{userInfo.username} {userInfo.password}</div> : <div>Not Show</div>}
      </div>
      <br /><br />
      <div>
        {count}
      </div>
      <div>
        <button onClick={increase}>Increase</button>
        &nbsp;&nbsp;
        <button onClick={decrease}>Decrease</button>
      </div>
    </>
  );
}

export default App;
