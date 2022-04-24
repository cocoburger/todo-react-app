import React, {useState} from "react";
import { TextField, Paper, Button, Grid} from "@material-ui/core";

function AddTodo ( props ) {
    const [items, setItems] = useState({
        title: '',
    });

    const onInputChange = (e) => {
        console.log("e.target.value : " + e.target.value);
        const thisItem = e.target.value;
        setItems(thisItem);

    }
    const onButtonClick = () => {
        props.add(items.title);
        setItems(items.title);
    }

    return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <Grid container>
                <Grid xs={11} md={11} item style={{ paddingRight: 16}}>
                    <TextField placeholder="추가해 TodoList"
                               fullWidth
                               value={items.title}
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