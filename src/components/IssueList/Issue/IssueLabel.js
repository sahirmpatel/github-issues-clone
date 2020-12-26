import React from 'react'

export default function IssueLabel({ labeldata }) {
    return (
        <div style={{ display: "flex" }} >
            {labeldata.map(label => <span key={label.id} style={{ backgroundColor: `#${label.color}`, margin: "5px", padding: "1px 10px", borderRadius: "8px" }} >{label.name}</span>)}
        </div>
    )
}


