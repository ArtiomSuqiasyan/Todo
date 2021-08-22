import React from "react";
import Button from "./Button";
import Input from "./Input";

export default function List({
  items,
  editedTodo,
  deleteItem,
  complete,
  edit,
  saveEdit,
  editTodo,
}) {
  return (
    <ul>
      {items.map(({ text, id, isComplete, isEdit }) => {
        return (
          <li id={id}>
            {isEdit ? (
              <>
                <Input type="text" value={editedTodo} onChange={editTodo} />
                <Button text="Save" onClick={saveEdit(id)} />
              </>
            ) : (
              <>
                <span>{text}</span>
                <Button text="Complete" onClick={complete(id)} />
                <Button text="Edit" onClick={edit(id, text)}></Button>
                <Button text="Delete" onClick={deleteItem(id)} />
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}
