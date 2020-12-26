import React from 'react'

function IssueDetails({ props }) {
    const details = props
    console.log("the issue detail", details)
    return (
        <div style={{ backgroundColor: "yellow" }} >
            <p>issue detail- {details.title}</p>
            <p>issue body- {details.body}</p>

        </div>
    )
}

export default IssueDetails
