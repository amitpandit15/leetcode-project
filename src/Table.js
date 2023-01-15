import React, {useState} from "react";
import mockdata from "./mock-data.json";
import {nanoid} from 'nanoid';
import './Table.css';

const Table = () => {
    const [questions,setQuestions] = useState(mockdata);
    const givedifficulty = (val) => {
        let res=null;
        if(val===1) res="Easy";
        else if(val===2) res="Medium";
        else res="Hard";
        return res;
    }
    const [addFormData,setAddFormData] = useState({
        question_name : '',
        difficulty : '',
        leetcode_link : ''
    })

    const handleAddFormChange = (event) => {
        event.preventDefault();
        const fieldData = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...addFormData};
        newFormData[fieldData] = fieldValue;
        setAddFormData(newFormData);
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        const newQuestion = {
            id : nanoid(),
            question_name : addFormData.question_name,
            difficulty : addFormData.difficulty,
            leetcode_link : addFormData.leetcode_link
        }
        const newQuestions = [...questions,newQuestion];
        setQuestions(newQuestions);
    }

    return (
        <div className="Table"> 
            <table>
                <thead>
                    <tr>
                        <th>Question Name</th>
                        <th>Leetcode Link</th>
                        <th>Difficulty</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map((question) => (
                        <tr>
                            <td>{question.question_name}</td>
                            <td>{givedifficulty(question.difficulty)}</td>
                            <td>{question.leetcode_link}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Add New Question</h2>
            <form onSubmit={handleAddFormSubmit}>
                <input type="text" name="question_name" required="required" placeholder="Enter Question Name" onChange={handleAddFormChange} />
                <input type="number" name="difficulty" required="required" placeholder="Enter difficulty" onChange={handleAddFormChange} />
                <input type="text" name="leetcode_link" required="required" placeholder="Enter Leetcode Link" onChange={handleAddFormChange} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default Table;