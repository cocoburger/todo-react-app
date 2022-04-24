import './App.css';
import Todo from "./Todo";
import {useState} from "react";
import {Container, List, Paper} from "@material-ui/core";
import AddTodo from "./AddTodo";

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

    const add = (item) => {
        console.log(items.length);
        const thisItems = items;
        item.id = items.length;
        item.done = false;
        thisItems.push(item);
        setItems(thisItems);
        console.log("items : ", items);
    }


  return (
      <div className="App">
          <Container>
              <AddTodo add={add} />
              <Paper style={{ margin: 16}}>
                  <List>
                      { items.map((item,index) => (
                          <Todo item={item} key={item.id} />
                      ))}
                  </List>
              </Paper>
          </Container>
      </div>
  );
}

export default App;
