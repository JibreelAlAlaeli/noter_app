import { Header } from "../Components/Header/Header";
import { NoteBox } from "../Components/NoteBox/NoteBox";
import AddNote from "../UI/AddNote";

export const MainPage = () => {
  return (
    <div>
      <Header></Header>
      <AddNote></AddNote>
      <NoteBox></NoteBox>
    </div>
  );
};
