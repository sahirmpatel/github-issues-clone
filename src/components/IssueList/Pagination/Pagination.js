import React from 'react'
import "./Pagination.css"
const Pagination = ({ issuePerPage, totalIssues, switchpage, currentPage }) => {

    let pageNumbers = [];
    let num = Math.ceil(totalIssues / issuePerPage)

    for (let i = 1; i <= num; i++) {
        pageNumbers.push(i)
    }




    return (
        <div>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item " >
                        <a onClick={() => switchpage(number)} href="#" className={number === currentPage ? "active-page page-link" : "page-link"}>
                            {number}
                        </a>
                    </li>
                ))}

            </ul>

        </div>
    )
}

export default Pagination