import React from "react";
import s from './Dialogs.module.css';
import Massage from "./Massage/Massage";
import DialogItem from "./DialogItem/DialogsItem";


const Dialogs = (props) => {

    let massagesElements = props.state.massages.map(massage => <Massage massage={massage.massage}/>);
    let dialogsElements = props.state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);

    return (
        <div className={s.dialogs}>
            <div class={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.massages}>
                {massagesElements}
            </div>
        </div>

    )
}

export default Dialogs;