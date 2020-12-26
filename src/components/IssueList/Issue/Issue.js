import React from 'react'
import IssueLabel from "./IssueLabel"
import ReactTimeAgo from "react-time-ago"
import { Link } from "react-router-dom"
import "./Issue.css"
function Issue({ issuedata, updateDetail }) {


    return (
        <div className="Issue" >


            <div className="user-img ">
                <a href={issuedata.user.html_url} target="_blank" rel="nofollow" ><img src={issuedata.user.avatar_url} alt={issuedata.user.login} /></a>

            </div>

            <div className="issue-card-maincontent">

                <Link to="/detail" onClick={() => { updateDetail(issuedata) }}  ><h2 >{issuedata.title}</h2></Link>

                <p>#{issuedata.number} opened <ReactTimeAgo date={issuedata.created_at} locale="en-US" /> by <a href={issuedata.user.html_url} target="_blank" rel="nofollow" >{issuedata.user.login}</a></p>



                <IssueLabel labeldata={issuedata.labels} />
            </div>

            {/* <div className="issue-comments br">
                <p>{issuedata.comments} comments</p>
            </div> */}

            <div className="issue-card-comments ">
                {issuedata.comments} comment(s)
           </div>

        </div>
    )
}

export default Issue
