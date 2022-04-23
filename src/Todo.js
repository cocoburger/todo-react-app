import React, {useState} from "react";
import {ListItem, ListItemText, InputBase, Checkbox} from "@material-ui/core";
function Todo ({item}) {

    return(
        <ListItem>
            <Checkbox checked={item.done}/>
            <ListItemText>
                    <InputBase
                        inputRoprs={{ "aria-label":"naked" }}
                        type="text"
                        name={item.id.toString()}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                    />
            </ListItemText>
        </ListItem>
    )
}

export default Todo;