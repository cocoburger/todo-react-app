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

    const deleteList = item => {
        const thisItems = items;
        console.log("Before Update Items : ", items);
        const newItems = items.filter(e => e.id !== item.id);
        setItems( newItems);
    }

    const add = (item) => {
        const objItem = {};
        const thisItems = items;
        objItem.id = items.length;
        objItem.title = item;
        objItem.done = false;
        thisItems.push(objItem);
        console.log(thisItems);
        setItems(thisItems);
    }


  return (
      <div className="App">
          <Container>
              <AddTodo add={add}  />
              <Paper style={{ margin: 16}}>
                  <List>
                      { items.map((item) => (
                          <Todo item={item} key={item.id} deleteList={deleteList} />
                      ))}
                  </List>
              </Paper>
          </Container>
      </div>
  );
}

export default App;
