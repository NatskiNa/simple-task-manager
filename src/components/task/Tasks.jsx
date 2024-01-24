import React from 'react';
import Task from './Task';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const reorder = (taskList, startIndex, endIndex) => {
  //reordering tasks
  const removed = taskList.splice(startIndex, 1); //[2,3] 1 is removed
  taskList.splice(endIndex, 0, removed[0]); //[2,1,3]
};

const Tasks = ({ taskList, setTaskList }) => {
  const handleDragEnd = (result) => {
    reorder(taskList, result.source.index, result.destination.index);

    setTaskList(taskList);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Tasks;
