import React, {useState} from "react";

function Todo (props) {
    const [item, setItem] = useState('');

    return(
        <div className="Todo">
            <input type="checkbox" id="todo0" name="todo0" value="todo0"/>
            <label htmlFor="todo0"> Todo 컴포넌트 만들기 </label>
        </div>

    )
}

export default Todo;