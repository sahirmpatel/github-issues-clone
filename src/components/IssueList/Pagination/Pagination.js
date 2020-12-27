import React from 'react'
import "./Pagination.css"
const Pagination = ({ issuePerPage, totalIssues, switchpage }) => {

    let pageNumbers = [];
    let num = Math.ceil(totalIssues / issuePerPage)

    for (let i = 1; i <= num; i++) {
        pageNumbers.push(i)
    }




    return (
        <div>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item" >
                        <a onClick={() => switchpage(number)} href="#" className='page-link btn-grad'>
                            {number}
                        </a>
                    </li>
                ))}

            </ul>

        </div>
    )
}

export default Pagination