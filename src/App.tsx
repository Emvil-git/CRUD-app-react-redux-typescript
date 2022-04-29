import React, { useState, useEffect } from 'react';
import InputField from "./components/InputField";
import EmpList from "./components/EmpList";
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { useDispatch } from 'react-redux';
import { addEmployee } from './EmpSlice';

var date = new Date();

const App: React.FC = () => {
  const empList = useSelector((state: RootState) => state.empList.empList);
  const dispatch = useDispatch();
  
  const [name, setName] = useState<string>("");
  const [salary, setSalary] = useState<number | null>(null);
  const [age, setAge] = useState<number | null>(null);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    let allFieldsFilled = (name !== "" && salary !== null && age !== null);
    if(allFieldsFilled) {
      dispatch(
        addEmployee({id: empList[empList.length - 1].id + 1 , name: name, salary: salary, age: age, dateAdded: date.toString().substr(4,11) })
      );
      setName("");
      setSalary(null);
      setAge(null);
    } else {
      alert("Please fill out all fields");
    }
  }

  return (
      <div className="App">
      <div className='App__header'>
        <span className='App__header--text'>Sample CRUD App</span>
      </div>
      <div className=''>
      <InputField name={name} setName={setName} salary={salary} setSalary={setSalary} age={age} setAge={setAge} handleAdd={handleAdd}/>
      {<EmpList empList={empList}/>}
      </div>
    </div>
  );
}

export default App;
