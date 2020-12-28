import React, { useState, useEffect } from 'react'
import axios from "axios"
import "./Header.css"

function Header({ details }) {

    const samplerepo = {
        owner: {
            avatar_url: "http://placecorgi.com/451/451"
        },
        full_name: "sampleowner/samplerepo",
        open_issues: 10
    }

    const [repoDetails, setRepoDetails] = useState(samplerepo)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const fetchRepoDetails = async () => {
            setLoading(true)
            const res = await axios.get(`https://api.github.com/repos/${details.account}/${details.repo}`)
            setRepoDetails(res.data);
            setLoading(false)
        }
        fetchRepoDetails()

    }, [details])


    if (loading) {
        return <h2 style={{ textAlign: "center" }} className="header" >loading repo details...</h2>
    }
    else return (
        <div className="header" >
            <div className="repo-details" >
                <img src={repoDetails.owner.avatar_url} alt="" />
                <a href={repoDetails.html_url} target="_blank" > {repoDetails.full_name}</a>
                <p>{repoDetails.open_issues} open issues</p>
            </div>
        </div>
    )
}

export default Header
