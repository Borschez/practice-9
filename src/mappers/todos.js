export const mapTodosPromise = (todosApi) => todosApi().then(data => {
    return data.map(({ id, title }) => ({ id, title }));
})