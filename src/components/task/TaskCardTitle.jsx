import React, { useState } from 'react';

const TaskCardTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState('TO DO');

  const handleClick = () => {
    setIsClicked(true);
  };

  //handleChangeで文字を打つ度に更新、それをsetInputCardTitleに格納 (e.target.value)はformで入力した文字
  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    //prevent from reloading the page when user hit enter = can keep the condition
    e.preventDefault();
    //finish entering title when clicked
    setIsClicked(false);
  };

  const handleBlur = () => {
    setIsClicked(false);
  };

  return (
    <div onClick={handleClick} className="taskCardBox">
      {isClicked ? (
        <form onSubmit={handleSubmit}>
          <input
            className="taskCardTitleInput"
            autoFocus
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputCardTitle}
            maxLength="20"
          />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
};

export default TaskCardTitle;
