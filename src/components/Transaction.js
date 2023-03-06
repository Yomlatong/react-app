// import { useContext } from "react";
// import DataComtext from "../data/DataContext";
import Item from "./Item";
import "./Transcation.css"

const Transaction = (props)=>{
  const {items} = props
  // const name = useContext(DataComtext)
    return (
     <div> <ul className="item-list">
          {items.map((element)=>
          {
            return <Item {...element} key={element.id}/>
          })}

          </ul>
         
      </div>
    );
  }

export default Transaction