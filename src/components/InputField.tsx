import React from "react";

interface Props {
    name: string;
    salary: number | null;
    age: number | null;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setSalary: React.Dispatch<React.SetStateAction<number | null>>;
    setAge: React.Dispatch<React.SetStateAction<number | null>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ name, setName, salary, setSalary, age, setAge, handleAdd }:Props) => {
    return(
        <form className="input" onSubmit={handleAdd}>
            <input type="input"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input__box"/>

            <input type="input"
            name="salary"
            placeholder="Salary"
            value={salary ? salary : ""}
            onChange={(e) => setSalary(parseInt(e.target.value))}
            className="input__box"/>

            <input type="input"
            name="age"
            placeholder="Age"
            value={age ? age : ""}
            onChange={(e) => setAge(parseInt(e.target.value))}
            className="input__box"/>
            
            <button type="submit" className="input__btn">ADD</button>
        </form>
    )
}

export default InputField;