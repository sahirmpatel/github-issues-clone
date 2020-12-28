import { React, useState } from 'react'
import IssueList from "./components/IssueList/IssueList"
import IssueDetails from "./components/issuedetails/IssueDetails"
import Header from './components/Header/Header'
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
  account: "uber",
  repo: "cadence"
}



function App() {
  const [issuedetails, setissuedetails] = useState(issuedetailv1)

  const updateDetail = (newdetail) => {
    setissuedetails({ details: newdetail })
  }

  return (
    <>
      <Header details={repodetails} />
      <BrowserRouter>

        <Switch>
          <Route path="/" exact render={

            (props) => (<IssueList {...props} updateDetail={updateDetail} repodetails={repodetails} />)
          } />
          <Route path="/detail" exact render={
            (props) => (<IssueDetails {...props} props={issuedetails} repodetails={repodetails} />)
          } />
        </Switch>
      </BrowserRouter>
    </>



  )
}

export default App;
