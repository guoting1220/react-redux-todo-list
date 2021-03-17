import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './NewTodoForm.css';

const NewTodoForm = ({ addTask}) => {
  const initial_formData = { task: "" }
  const [formData, setFormData] = useState(initial_formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({...formData, id: uuid()});
    setFormData(initial_formData);
  }

  return (
    <div className="NewTodoForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="task"
          name="task"
          value={formData.task}
          onChange={handleChange}
        />
        <button>Add Task</button>
      </form>
    </div>
  )
}

export default NewTodoForm;