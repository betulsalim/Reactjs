import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  //sayfa yüklenildiğinde/bir state'in değeri değiştirildiğinde şunu yap gibi güncellemeler için useEffect
  useEffect(() => {
    console.log("it works every second");
  });

  useEffect(() => {
    console.log("it works one time when components first render");
  }, []); //boş array sebebi sayfa yüklendiğinde sen sadece bir kere çalış daha da çalışma

  useEffect(() => {
    console.log("Runs when the component is first rendered and when the FIRSTNAME state value changes.");
  }, [firstName]); //component ilk render edildiğinde ve firstname statin değeri değiştiğinde çalışır.

  useEffect(() => {
    console.log("Runs when the component is first rendered and when the LASTNAME state value changes.");
  }, [lastName])

  useEffect(() => {
    console.log("Runs when the component is first rendered and when the CITY or COUNTRY state value changes.");
  }, [city, country])

  const changeFirstName = () => {
    setFirstName("Betül")
  }

  const changeLastName = () => {
    setLastName("Salim")
  }

  const changeAdress = () => {
    setCity("İstanbul")
    setCountry("Türkiye")
  }

  return (
    <>
      <div>
        <div>
        {firstName} {lastName}
        </div>
        <br /><br />
        <div>
          <button onClick={changeFirstName}>Change Firstname</button>
          &nbsp;&nbsp;
          <button onClick={changeLastName}>Change Lastname</button>
        </div>
        <br />
        <div>
          {city} / {country}
        </div>
        <div>
          <button onClick={changeAdress}>Change Address</button>
        </div>
      </div>
    </>
  );
}

export default App;
