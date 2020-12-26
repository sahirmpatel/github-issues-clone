import React from 'react'
import IssueLabel from "./IssueLabel"
import ReactTimeAgo from "react-time-ago"
import "./Issue.css"
function Issue({ issuedata, updateDetail }) {


    return (
        <div className="Issue" >
            <h2 onClick={() => { updateDetail(issuedata) }} >{issuedata.title}</h2>
            <p>#{issuedata.number}</p>

            <ReactTimeAgo date={issuedata.created_at} locale="en-US" />
            <a href={issuedata.user.html_url} target="_blank" rel="nofollow" ><p>{issuedata.user.login}</p></a>
            <a href={issuedata.user.html_url} target="_blank" rel="nofollow" ><img src={issuedata.user.avatar_url} alt={issuedata.user.login} /></a>
            <p>comments are - {issuedata.comments}</p>
            <IssueLabel labeldata={issuedata.labels} />
        </div>
    )
}

export default Issue
