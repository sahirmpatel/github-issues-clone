import React, { useEffect, useState } from 'react'
import axios from "axios"
import ReactMarkdown from "react-markdown";
function IssueDetails({ props }) {


    const [comments, setComments] = useState([])

    useEffect(() => {
        axios.get(`https://api.github.com/repos/airbnb/javascript/issues/${props.details.number}/comments`)
            .then(res => setComments(res.data))
    }
        , [props.details.number])


    return (
        <div style={{ backgroundColor: "yellow" }} >
            <p>issue detail- {props.details.title}</p>
            <ReactMarkdown source={props.details.body} />
            <hr />
            {comments.length === 0 ? (<p>No comments on this issue</p>) : (
                comments.map(comment => <p key={comment.id} >{comment.body}</p>)
            )}
        </div>
    )
}

export default IssueDetails
