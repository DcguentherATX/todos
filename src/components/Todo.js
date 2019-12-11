import React from 'react';
const moment = require('moment');

const Todo = ({todo}) => {
    const initiated = moment(getTime(todo.createdDate), 'YYYY-MM-DD');
    const completed = moment(getTime(todo.completionDate), 'YYYY-MM-DD');
    const daysToComplete = completed.diff(initiated, 'days');
    console.log(daysToComplete);

    return (
        <div>
            {todo.todo} {initiated._i} {completed._i} {daysToComplete}
        </div>
    )
}

const getTime = (time) => {
    let newTime = time.slice(0, 10);
    return newTime.toString();
}
export default Todo;