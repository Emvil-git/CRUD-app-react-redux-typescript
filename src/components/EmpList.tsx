import React from "react";
import Employee from "../models/Employee";
import EmpFields from "./EmpFields";
import { RootState } from "../store";
import "../assets/styling.scss";
import { useSelector } from "react-redux";

interface listProps {
    empList: Employee[];
}

const EmpList : React.FC<listProps> = ({ empList } : listProps) => {
    
    const emplist = useSelector((state: RootState) => state.empList.empList);

    return(
        <div className="emplist">
            <span className="emplist__title">Employees</span>
            <div className="emplist__header">
                <span className="emplist__header--text">ID</span>
                <span className="emplist__header--text">Name</span>
                <span className="emplist__header--text">Salary</span>
                <span className="emplist__header--text">Age</span>
                <span className="emplist__header--text">Date Added</span>
                <span className="emplist__header--text">            </span>
            </div>
            <div className="emplist__entries">
            {empList.map(emp => (
                <EmpFields emp={emp} empList={emplist}/>
            ))}
            </div>
        </div>
    )
};

export default EmpList;