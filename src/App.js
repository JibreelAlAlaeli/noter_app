import Header from "./Components/Header";
import "./App.css";
import AddNote from "./UI/AddNote";
import NoteBox from "./Components/NoteBox";
function App() {
  return (
    <div className="app">
      <Header></Header>
      <AddNote></AddNote>
      <NoteBox></NoteBox>
    </div>
  );
}

export default App;
