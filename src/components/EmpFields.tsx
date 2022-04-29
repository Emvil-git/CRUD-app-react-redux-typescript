import React, { FormEvent, useState } from "react";
import Employee from "../models/Employee";
import "../assets/styling.scss";
import { useAppDispatch } from "../hooks/reduxHooks";
import { deleteEmployee, editEmployee } from "../EmpSlice";

interface fieldsProps {
    empList: Employee[];
    emp: Employee;
}

const EmpFields: React.FC<fieldsProps> = (props) => {
    const dispatch = useAppDispatch();
    const emp = props.emp;

    const [isEditing, setIsEditing] = useState(false);
    const [editName, setEditName] = useState<string>(emp.name);
    const [editSalary, setEditSalary] = useState<number | null>(emp.salary);
    const [editAge, setEditAge] = useState<number | null>(emp.age);

    const handleEdit = (ev:FormEvent, id:number) => {
        ev.preventDefault();
        dispatch(
            editEmployee({id: emp.id, name: editName, salary: editSalary, age: editAge, dateAdded:emp.dateAdded})
          );
        setIsEditing(false);
    }

    const handleDelete = (index:number) => {
        dispatch(deleteEmployee({id: emp.id}))
    } 

    const handleChange = (ev : React.ChangeEvent<HTMLInputElement>) => {
        const {value,name} = ev.target;
        switch(name) {
            case 'age':
                value === '' ? 
                setEditAge(parseInt('0'))
                : setEditAge(parseInt(value));
                break;
            case 'salary':
                value === '' ? 
                setEditSalary(parseInt('0'))
                : setEditSalary(parseInt(value));
                break;
        }
    }
    
    return (
        <form className="emplist__entry" onSubmit={(e) => {handleEdit(e, emp.id)}}>
            <span className="emplist__entry--cell emplist__entry--id">{emp.id}</span>
            <span className="emplist__entry--cell">{isEditing ? <input className="emplist__entry--input" value={editName} onChange={(e) => setEditName(e.target.value)}/> : emp.name }</span>
            <span className="emplist__entry--cell">{isEditing ? <input className="emplist__entry--input" name="salary" value={editSalary === null? '' : editSalary} onChange={handleChange}/> : emp.salary }</span>
            <span className="emplist__entry--cell">{isEditing ? <input className="emplist__entry--input" name="age" value={editAge === null? '' : editAge} onChange={handleChange}/> : emp.age }</span>
            <span className="emplist__entry--cell">{emp.dateAdded}</span>
            <span className="emplist__entry--cell emplist__entry--actions">
                {isEditing ? <button className="emplist__entry--btn" type="submit">Update</button> : <span className="emplist__entry--action" onClick={() => {if (!isEditing) {
                    setIsEditing(true);
                }}}>Edit</span>}
                <span className="emplist__entry--action" onClick={() => {handleDelete(emp.id)}}>Delete</span>
            </span>
        </form>
    )
}

export default EmpFields;