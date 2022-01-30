import React from "react";
import TodosTempalate from "../../templates/Todos";

import { getApiTodosPromise } from "../../api/todos";
import { mapTodosPromise } from "../../mappers/todos";

export const TodoItem = ({ title }) => {
    return <li>{title}</li>
}

export default class Todos extends React.PureComponent {
    state = {
        list: []
    }

    componentDidMount() {
        mapTodosPromise(getApiTodosPromise).then(list => this.setState({ list }))
    }

    render() {
        const { list } = this.state;
        return (
            <TodosTempalate list={list} />
        );
    }
}