import { React, useState } from 'react'
import IssueList from "../IssueList/IssueList"
import IssueDetails from "../issuedetails/IssueDetails"
import Header from '../Header/Header'
import { BrowserRouter, Switch, Route } from "react-router-dom"


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

const repodetails = {
    account: "airbnb",
    repo: "javascript"
}

function Content() {
    const [issuedetails, setissuedetails] = useState(issuedetailv1)

    const updateDetail = (newdetail) => {
        setissuedetails({ details: newdetail })
    }

    return (

        <BrowserRouter>
            <Header details={repodetails} />
            <Switch>
                <Route path="/" exact render={

                    (props) => (<IssueList {...props} updateDetail={updateDetail} />)
                } />
                <Route path="/detail" exact render={
                    (props) => (<IssueDetails {...props} props={issuedetails} />)
                } />
            </Switch>
        </BrowserRouter>



    )
}

export default Content

{/* <BrowserRouter>
    <Switch>
    <Route path="/" exact component={home} />
    <Route path="/about" exact component={about} />
    <Route path="/" render={()=> <div>404 not found</div> } />
    </Switch>
</BrowserRouter>



// links
<Link to="/about" >
</Link>

onClick={()=>{
    //api call
    history.push('/about')
}} */}

// match part 12:50