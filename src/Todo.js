import React, {useState} from "react";
import {ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
function Todo ({item, deleteList}) {
    const [del, setDel] = useState("");

    const deleteEventHandler = () => {
        deleteList(item);
    }
    return(
        <ListItem>
            <Checkbox checked={item.done}/>
            <ListItemText>
                    <InputBase
                        inputRoprs={{ "aria-label":"naked" }}
                        type="text"
                        id={item.id.toString()}
                        name={item.id.toString()}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                    />
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Todo" onClick={deleteEventHandler}>
                    <DeleteOutlined />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Todo;