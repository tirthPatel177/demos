import React, {useEffect} from 'react'
import Entry from './Entry'


const TodoList = (props) => {

    const handleDel = (task) => {
        props.setList(
            props.list.filter(item => {
                return item !== task;
            })
        )
    }

    useEffect(() => {
        console.log(props.list)
    })


    return (
        <div>
            {
                props.list.map((entry, index) => {
                    return <Entry key={index} entry={entry} del={handleDel}/>
                })
            }
        </div>
    )
}

export default TodoList
