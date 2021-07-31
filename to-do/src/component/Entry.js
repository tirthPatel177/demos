import React from 'react'

const Entry = (props) => {
    return (
        <div style={{'display' : 'flex'}}>
            <p>
                {
                    props.entry
                }
            </p>
            <div style={{'align-self' : 'center', 'margin': '10px'}}>
            <button onClick={()=> {
                props.del(props.entry)
            }}>
                Delete
            </button>
            </div>
        </div>
    )
}

export default Entry
