import { React, useEffect, useState } from 'react'
import axios from "axios"
import Issue from "./Issue/Issue"
function IssueList({ updateDetail }) {
    console.log("the passed down function is ", updateDetail)
    const fakedata = [


    ]

    const [data, setData] = useState(fakedata)

    useEffect(() => {
        axios.get("https://api.github.com/repos/airbnb/javascript/issues?per_page=25&page=1")
            .then(res => setData(res.data))
    }, [])




    return (
        <div>
            {data.map(issuedata =>
                <Issue key={issuedata.number} issuedata={issuedata} updateDetail={updateDetail} />)
            }
        </div >
    )
}

export default IssueList


// <div>
// {data.map(issuedata => <div onClick={(e) => {
//     e.preventDefault()
//     updateDetail(issuedata)
// }} >
//     <Issue key={issuedata.number} issuedata={issuedata} updateDetail={updateDetail} />
// </div>)
// }
// </div >