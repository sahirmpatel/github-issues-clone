import React, { useState, useEffect } from 'react'
import axios from "axios"
import "./Header.css"

function Header({ details }) {

    const samplerepo = {
        owner: {
            avatar_url: "http://placecorgi.com/373/260"
        },
        full_name: "sampleowner/samplerepo",
        open_issues: 10
    }

    const [repoDetails, setRepoDetails] = useState(samplerepo)

    useEffect(() => {
        axios.get(`https://api.github.com/repos/${details.account}/${details.repo}`)
            .then(res => {
                setRepoDetails(res.data);
                console.log("repo details are ", res.data)
            })
    }
        , [details])

    return (
        <div className="header" >
            <div className="repo-details" >
                <img src={repoDetails.owner.avatar_url} alt="" />
                <p>{repoDetails.full_name}</p>
                <p>{repoDetails.open_issues} open issues</p>
            </div>
        </div>
    )
}

export default Header
