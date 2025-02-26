import { useState } from 'react'
import './App.css'

function App() {
  //JSX : {}
  //javascript kodları yazılır
  let a = 5;
  const firstName = "Betül"
  const lastName = "Salim"
  let exam1 = 60, exam2 = 80
  let average = (exam1 + exam2) /2
  let result = true
  let names = [
    "Betül",
    "Nesrin",
    "İbrahim",
    "Burak"
  ]
  return (
    <div>
      <h1>React Entry Lesson</h1>
      Betül
      
      <br />
      A değişkeninin Değeri : {a}
      <br />
      Müşterinin Adı - Soyadı: {firstName} {lastName}
      <br />
      Öğrencinin Notları:
      <br />
      Vize : {exam1}
      <br />
      Final: {exam2}
      <br />
      Ortalama: {average}
      <br />
      {
        result ? <p>Ehliyeti Alabilirsin</p> : <p>Ehliyeti almazsın</p>
      }
      {
        average >= 50 ? <p>Dersten {average} notuyla geçtin</p> : <p>Dersten {average} notuyla kaldın</p>
      }
      {
        //map array üzerinde dönmemizi sağlıyor
        //style ilk parantezi JSX yapısı ikincisi CSS yapısı
        names.map((name,index) => (
          <div style={{color:'pink', border: '2px solid black'}} key={index}>{index + 1} - {name}</div>
        ))
      }
    </div>
  )
}

export default App
