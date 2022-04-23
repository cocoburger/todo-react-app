import './App.css';
import Todo from "./Todo";
import {useState} from "react";
import {List, Paper} from "@material-ui/core";

function App() {
    const [items, setItems] = useState(
        [
        {
            id: 0,
            title: '안녕 세상아 1',
            done: true

        },
            {
                id: 1,
                title: '안녕 세상아 2',
                done: false,
            }
    ]);


  return (
      <>
          <div className="App">
              <Paper style={{ margin: 16}}>
                  <List>
                      { items.map((item,index) => (
                          <Todo item={item} key={item.id} />
                      ))}
                  </List>
              </Paper>
          </div>
      </>
  );
}

export default App;
