import { React, useState } from 'react'
import IssueList from "../IssueList"
import IssueDetails from "../issuedetails/IssueDetails"

const issuedetailv1 = {
    title: "test title",
    user: "test user",
    state: "test",
    created_at: "test",
    body: "test",
    comments: "test"
}



function Content() {
    const [issuedetails, setissuedetails] = useState(issuedetailv1)


    let newtitle = "pepepepepe"
    const updateDetail = (newtitle) => {

        setissuedetails({ title: newtitle })
    }









    return (
        <div>
            <IssueDetails props={issuedetails} />

            <IssueList updateDetail={updateDetail} />

        </div>
    )
}

export default Content
