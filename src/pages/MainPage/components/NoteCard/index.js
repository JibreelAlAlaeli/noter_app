import classes from "./index.module.css";

export const NoteCard = ({ note, title }) => {
  return (
    <div className={classes.box}>
      <h2>{title}</h2>
      <p>{note}</p>
    </div>
  );
};
