import { React, useState } from 'react'
import IssueList from "./components/IssueList/IssueList"
import IssueDetails from "./components/issuedetails/IssueDetails"
import Header from './components/Header/Header'
import { BrowserRouter, Switch, Route } from "react-router-dom"


const sampleissuedetail = {

  details: {
    title: " title",
    user: "sample user",
    state: "test",
    created_at: "sample",
    body: "sample",
    comments: "sample"
  }
}

const repodetails = {
  account: "airbnb",
  repo: "javascript"
}



function App() {
  const [issuedetails, setissuedetails] = useState(sampleissuedetail)

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
          <Route path="/" render={

            () => <h2>404 not found</h2>
          } />
        </Switch>
      </BrowserRouter>
    </>



  )
}

export default App;
