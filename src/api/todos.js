export const getApiTodosPromise = () =>
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())