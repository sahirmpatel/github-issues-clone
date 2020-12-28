import React, { useEffect, useState } from 'react'
import axios from "axios"
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom"
import ReactTimeAgo from "react-time-ago"
import "./IssueDetails.css"
function IssueDetails({ props, repodetails }) {


    const [comments, setComments] = useState([])

    useEffect(() => {
        axios.get(`https://api.github.com/repos/${repodetails.account}/${repodetails.repo}/issues/${props.details.number}/comments`)
            .then(res => setComments(res.data))
    }
        , [props.details.number, repodetails])


    return (
        <>

            <div className="issuedetail" >
                <Link to="/" > <button id="back-button" >Back</button> </Link>
                <div className="issuedetail-meta">
                    <h2 className="title">{props.details.title} <br /> <span>#{props.details.number}</span> </h2>

                    <div className="subheading">
                        <a href={props.details.user.html_url}>
                            <img src={props.details.user.avatar_url} alt="" />

                        </a>
                        <a href={props.details.user.html_url}>
                            {props.details.user.login}
                        </a>
                        <p>opened this <ReactTimeAgo date={props.details.created_at} locale="en-US" /></p>
                    </div>
                </div>

                <ReactMarkdown className="markdown" source={props.details.body} />


            </div>
            {comments.length === 0 ? (<p className="comments markdown" >No comments on this issue</p>) : (
                comments.map(comment => (
                    <div className="comments">

                        <div className="comment-head">
                            <a href={comment.user.html_url}>
                                <img src={comment.user.avatar_url} alt="" />

                            </a>
                            <a href={comment.user.html_url}>
                                {comment.user.login}
                            </a>
                            <p>commented <ReactTimeAgo date={props.details.created_at} locale="en-US" /></p>
                        </div>
                        <ReactMarkdown className="markdown" source={comment.body} />
                    </div>
                ))
            )}
        </>
    )
}

export default IssueDetails
