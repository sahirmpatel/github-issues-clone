import { React, useEffect, useState, useContext } from 'react'
import axios from "axios"
import Issue from "./Issue/Issue"
import Pagination from './Pagination/Pagination'

function IssueList({ updateDetail }) {



    const fakedata = [


    ]

    const [data, setData] = useState(fakedata)
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [issuePerPage, setIssuePerPage] = useState(10)
    useEffect(() => {
        const fetchIssues = async () => {
            setLoading(true)
            const res = await axios.get("https://api.github.com/repos/airbnb/javascript/issues?per_page=100&page=1")
            setData(res.data)
            setLoading(false)
        }
        fetchIssues()

    }, [])

    // get current issues
    const indexOfLastIssue = currentPage * issuePerPage;
    const indexOfFirstIssue = indexOfLastIssue - issuePerPage;
    const currentIssue = data.slice(indexOfFirstIssue, indexOfLastIssue)

    //switchpage function
    const switchpage = (pagenumber) => {
        setCurrentPage(pagenumber)
    }

    if (loading) {
        return <h2>loading...</h2>
    }
    else return (
        <div >
            <div>
                {currentIssue.map(issuedata =>
                    <Issue key={issuedata.number} issuedata={issuedata} updateDetail={updateDetail} />)
                }

            </div >
            <Pagination issuePerPage={issuePerPage} totalIssues={data.length} switchpage={switchpage} currentPage={currentPage} />
        </div>
    )
}

export default IssueList

