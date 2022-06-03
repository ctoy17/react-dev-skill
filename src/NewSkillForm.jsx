import React from "react";
import './NewSkillForm.css'
import {useState} from "react";

function NewSkillForm({addSkill}){
    const [newSkill, setNewSkill] = useState({ name: "", level: 3 });
    
    function handleChange(event) {
        const newSkillDetail = { ...newSkill, [event.target.name]: event.target.value };
        setNewSkill(newSkillDetail);
    }
    function handleAddSkill(event){
        event.preventDefault();
        addSkill(newSkill);
        setNewSkill({ name: "", level: 3 });
    }
    return(
        <>
            <form className="NewSkillForm" onSubmit={handleAddSkill}>
                <label>Skill</label>
                <input placeholder="Add Skill"
                    name="name" 
                    value={newSkill.name}
                    onChange={handleChange}
                />
                <label>Level </label>
                <select 
                    name="level"
                    value={newSkill.level}
                    onChange={handleChange}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <button type="submit">ADD SKILL</button>
            </form>
        </>
    );
}


export default NewSkillForm