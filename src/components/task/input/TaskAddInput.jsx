import React from 'react';
import { v4 as uuid } from 'uuid';

const TaskAddInput = ({ inputText, setInputText, taskList, setTaskList }) => {
  const handleSubmit = (e) => {
    const taskId = uuid();
    e.preventDefault();
    if (inputText === '') {
      return;
    }
    //handleSubmitでenterした時にカードを追加する
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task-${taskId}`,
        text: inputText,
      },
    ]);
    setInputText(''); //追加したら空にする
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="taskAddInput"
          placeholder="add a task"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};

export default TaskAddInput;
