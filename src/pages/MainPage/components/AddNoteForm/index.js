import { useState } from "react";
import classes from "./index.module.css";

export const AddNoteForm = ({ onAddNote }) => {
  const [formState, setFormState] = useState({ title: "", note: "" });

  const formSubmitHandler = (event) => {
    event.preventDefault();
    onAddNote(formState);
    setFormState({ title: "", note: "" });
  };

  const inputChangeHandler = (event, fieldName) => {
    const value = event.target.value;
    setFormState((prev) => ({ ...prev, [fieldName]: value }));
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={classes.title_input}>
        <label>Title : </label>
        <input
          type="text"
          value={formState.title}
          onChange={(event) => {
            inputChangeHandler(event, "title");
          }}
        />
      </div>
      <div className={classes.note_input}>
        <label>Note : </label>
        <input
          type="text"
          value={formState.note}
          onChange={(event) => {
            inputChangeHandler(event, "note");
          }}
        />
      </div>
      <button type="submit">SEND</button>
    </form>
  );
};
