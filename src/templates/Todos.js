import React from "react";
import { TodoItem } from "../components/Todos";

const TodosTempalate = ({ list }) => (
    <ul>
        {list.map(({ id: key, title }) =>
            <TodoItem
                key={key}
                title={title}
            />)}
    </ul>
)

export default TodosTempalate;