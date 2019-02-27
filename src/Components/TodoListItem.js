import React from "react";

const TodoListItem = (props) => {
    var todoClass = props.item.done ? "todoItem done" : "todoItem undone";
    return (
      <li className="list-group-item ">
        <div className={todoClass}>
          <span
            className="glyphicon glyphicon-ok icon"
            aria-hidden="true"
            onClick={() => props.markTodoDone(parseInt(props.index))}
          />
          <span>{props.item.value}</span>
          <span className='date'>{`Added: ${props.item.date}`}</span>
          <button type="button" className="close" onClick={() => props.removeItem(props.index)}>
            &times;
          </button>
        </div>
      </li>
    );

}

export default TodoListItem;