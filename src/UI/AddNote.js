import classes from './AddNote.module.css'
const AddNote =(props)=>{
    return(
        <form className={classes.box_input}>
            <div className={classes.title_input}>
                <label>Title : </label>
                <input type='text'></input>
            </div>
            <div className={classes.note_input}>
                <label>Note : </label>
                <input type='text'></input>
            </div>
        </form>
    )
}

export default AddNote;