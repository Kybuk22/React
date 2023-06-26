import './App.scss';
import React, { useState } from 'react';



function App() {
  const [list, setlist] = useState([]);
  const [listDone, setlistDone] = useState([]);
  const [text1, settext] = useState([]);
  

  const timer = () => {
    const list = []
    for(var i = 0, len=localStorage.length; i < len; i++) {
      var key  = localStorage.key(i);
      var value = localStorage[key];
      list.push(key + ":" + value);  
    }
    const newList = [...list.sort()];
    setlist(newList)
  }


  window.setInterval(timer,100)
  function KeyPressElement(event) {
    if (event.key === "Enter"){
      var n = 1
      var ok = document.getElementById("ok").value;
      
      var length = localStorage.length;
      n = n + length
      
      localStorage.setItem(n,ok);
      const list = []

      for(var i = 0, len = localStorage.length; i < len; i++) {
        var key  = localStorage.key(i);
        var value = localStorage[key];
        list.push(key + ":" + value);  
      }
      const newList = [...list.sort()];
      setlist(newList)
      }
    }


   function clear(){
    localStorage.clear()
    setlist([...""])
   }


   function PressButton(event1){
      if (event1.key === " "){
        settext(" ")
      }
      if (event1.key === "Enter"){

      var lak = document.getElementById("lak").value;
      console.log(localStorage)
      var lista = []

      for(var i = 0, len = localStorage.length; i < len; i++) {
        var key = localStorage.key(i);
        var value = localStorage[key];
        lista.push(key + ":" + value);  
        
        if (value === lak){
          settext("Value:" + value + " Index:" + key)
        }

        const newList = [...lista.sort()];
        setlist(newList)
      }
   }
  }
  

  function remove(ele){
    var elem = ele.split(":")
    listDone.push(localStorage.getItem(elem[0]))
    localStorage.removeItem(elem[0])

    const newList0 = [...listDone.sort()];
    setlistDone(newList0)
    
    setlist([...""])
    var list1 = []

    for(var i = 0, len = localStorage.length; i < len; i++) {
      var key1 = localStorage.key(i);
      var value1 = localStorage[key1];
      list1.push(key1 + ":" + value1);  
    }
    const newList1 = [...list1.sort()];
    setlist(newList1)
  }
  
  function clearDone(){
    setlistDone([...""])
  }



  return (
    <div className = "App">
          <div className = 'header' >
          <input id = 'ok' form = 'text' placeholder = "Dodaj" onKeyPress={KeyPressElement}></input>
          
          <input id = "lak" form = 'text' placeholder = "Szukaj" onKeyPress={PressButton} ></input><p className = 'P'>{text1}</p>
        </div>

        <div className = "listy">
        <ul className = "piersza">
          <p>List</p>
          {list.map((el,index) => {
            return <li key = {index}>{el}<button onClick = {() => remove(el)}>X</button></li>
          })}
          <button onClick = {clear}>clear</button>
        </ul>
        
  
        <ul className = "druga">
          <p>Done</p>
          {listDone.map((el,index) => {
            return <li key = {index}>{el}</li>
          })}
          <button onClick = {clearDone}>clear</button>
        </ul>
    </div>
    </div>
  );
}

export default App;
