import { React, useEffect, useState } from 'react'
import axios from "axios"
import Issue from "./Issue"
function IssueList({ updateDetail }) {
    console.log("the passed down function is ", updateDetail)
    const fakedata = [
        // {
        //     title: 'Error: "Commit tree already contains fiber 140. This is a bug in React DevTools."',
        //     user: { login: "divyanshSrivastava19" }
        // },
        // {
        //     title: 'Error: "Commit tree already contains fiber 140. This is a bug in React DevTools."',
        //     user: { login: "divyanshSrivastava19" }
        // },
        // {
        //     title: 'Error: "Commit tree already contains fiber 140. This is a bug in React DevTools."',
        //     user: { login: "divyanshSrivastava19" }
        // }

    ]

    const [data, setData] = useState(fakedata)

    useEffect(() => {
        axios.get("https://api.github.com/repos/airbnb/javascript/issues?per_page=25&page=1")
            .then(res => setData(res.data))
    }, [])




    return (
        <div>
            {data.map(issuedata => <div onClick={(e) => {
                e.preventDefault()
                updateDetail(issuedata.title)
            }} >
                <Issue key={issuedata.number} issuedata={issuedata} />
            </div>)
            }
        </div >
    )
}

export default IssueList


