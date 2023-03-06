import DataComtext from "../data/DataContext";
import { useContext } from "react";
const ReportComponent=()=>{
    const name = useContext(DataComtext)
    return (
        <div>
            Hello : {name}
        </div>
    );

}

export default ReportComponent