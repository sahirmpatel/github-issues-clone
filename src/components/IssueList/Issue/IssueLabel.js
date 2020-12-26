import React from 'react'

export default function IssueLabel({ labeldata }) {
    return (
        <div style={{ display: "flex" }} >
            {labeldata.map(label => <a key={label.id} style={{ backgroundColor: `#${label.color}`, margin: "5px" }} href={label.url} >{label.name}</a>)}
        </div>
    )
}


