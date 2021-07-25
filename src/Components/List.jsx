import React from "react";
import Button from "./Button";
import Input from "./Input";

export default function List({
  todos,
  editedTodo,
  deleteItem,
  complete,
  edit,
  saveEdit,
  editTodo,
}) {
  return (
    <ul>
      {todos.map(({ text, id, isEdit }) => {
        return (
          <li id={id}>
            {isEdit ? (
              <>
                <Input type="text" value={editedTodo} onChange={editTodo} />
                <Button text="Save" onClick={saveEdit(id)} />
              </>
            ) : (
              <>
                <p onClick={complete(id)}>
                  {text}
                </p>
                <Button text="Edit" onClick={edit(id, text)} />
                <Button text="Delete" onClick={deleteItem(id)} />
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}
