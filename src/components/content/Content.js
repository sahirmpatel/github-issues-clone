import { React, useState } from 'react'
import IssueList from "../IssueList"
import IssueDetails from "../issuedetails/IssueDetails"

const issuedetailv1 = {

    details: {
        title: " title",
        user: "test user",
        state: "test",
        created_at: "test",
        body: "test",
        comments: "test"
    }
}



function Content() {
    const [issuedetails, setissuedetails] = useState(issuedetailv1)



    const updateDetail = (newdetail) => {

        setissuedetails({ details: newdetail })

    }









    return (
        <div>
            <IssueDetails props={issuedetails} />

            <IssueList updateDetail={updateDetail} />

        </div>
    )
}

export default Content
