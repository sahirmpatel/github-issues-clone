// import { React, useState } from 'react'
// import IssueList from "../IssueList/IssueList"
// import IssueDetails from "../issuedetails/IssueDetails"
// import Header from '../Header/Header'
// import { BrowserRouter, Switch, Route } from "react-router-dom"


// const issuedetailv1 = {

//     details: {
//         title: " title",
//         user: "test user",
//         state: "test",
//         created_at: "test",
//         body: "test",
//         comments: "test"
//     }
// }

// const repodetails = {
//     account: "airbnb",
//     repo: "javascript"
// }

// function Content() {
//     const [issuedetails, setissuedetails] = useState(issuedetailv1)

//     const updateDetail = (newdetail) => {
//         setissuedetails({ details: newdetail })
//     }

//     return (
//         <>
//             <Header details={repodetails} />
//             <BrowserRouter>

//                 <Switch>
//                     <Route path="/" exact render={

//                         (props) => (<IssueList {...props} updateDetail={updateDetail} />)
//                     } />
//                     <Route path="/detail" exact render={
//                         (props) => (<IssueDetails {...props} props={issuedetails} />)
//                     } />
//                 </Switch>
//             </BrowserRouter>
//         </>



//     )
// }

// export default Content

