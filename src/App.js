import Transaction from "./components/Transaction";
import './App.css'
import FormComponent from "./components/FormComponent";
import { useState } from "react";
import DataComtext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
// const Title =()=> <h1>โปรแกรมบัญชีรายรับ-รายจ่าย</h1>
// const Description =()=> <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>


function App() {
  const design ={color:"red",textAlign:"center"}
  // const initData = [
  //   {id:1,title:"ค่ารักษาพยาบาล", amount:2000},
  //   {id:2,title:"ค่าน้ำมัน", amount:1000},
  //   {id:3,title:"ค่าเช่าห้อง", amount:2000},
  //   {id:4,title:"ค่าอินเตอร์เน็ต", amount:300},
  // ]
  const [items,setItems] = useState([])
  const onAddNewItem = (newItem)=>{
     setItems((prevItem)=>{
      return [newItem,...prevItem]
     })
  }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Nonthawat Yomla
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <DataComtext.Provider value={"รายจ่ายทั้งหลาย"}>
      
    <div className="container">
      <h1 style={design}>รายรับ รายจ่าย</h1>
      <ReportComponent/>
      <FormComponent onAddItem={onAddNewItem}/>
      <Transaction items = {items}/>
    </div>
    
    </DataComtext.Provider>
  );
    // <div className="container">
    //   <h1 style={design}>รายรับ รายจ่าย</h1>
    //   <FormComponent onAddItem={onAddNewItem}/>
    //   <Transaction items = {items}/>
    // </div>
  // );
}

export default App;
