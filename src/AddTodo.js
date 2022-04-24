import React, {useState} from "react";
import { TextField, Paper, Button, Grid} from "@material-ui/core";

function AddTodo ( props ) {
    const [title, setTitle] = useState('');


    const onInputChange = (e) => {
        console.log("e.target.value : " + e.target.value);
        const thisItem = e.target.value;
        setTitle(thisItem);
    }
    const onButtonClick = () => {
        props.add(title);
    }

    return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <Grid container>
                <Grid xs={11} md={11} item style={{ paddingRight: 16}}>
                    <TextField placeholder="추가해 TodoList"
                               fullWidth
                               value={title}
                               onChange={onInputChange}
                    />
                </Grid>
                <Grid xs={1} md={1} item>
                    <Button fullWidth color="secondary" variant="outlined" onClick={onButtonClick}>
                        +
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default AddTodo;