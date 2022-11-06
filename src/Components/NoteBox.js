import classes from './NoteBox.module.css';

const NoteBox =(props)=>{
    return(
        <div className={classes.box}>
            <h2>Title</h2>
            <p>Notes are very important to keep up to date with what you are doing</p>
        </div>
    )
}

export default NoteBox;