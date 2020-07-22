//importing the modules for react application
import React from 'react';
import ReactDOM from "react-dom";
import faker from 'faker'

import CommentDetail from "./CommentDetail"
import ApprovalCard from "./ApprovalCard"

//creating a react component
const App = () => {
    return(
    <div className="ui container comments">
        <ApprovalCard>
        <CommentDetail 
            author='Shyam Desai' 
            timeago="Today 5:00" 
            desc="This is the best blog"
            avatar ={faker.image.avatar()}
        />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author='Avani Sarvaiya' 
                timeago="Today 4:00" 
                desc="This is midlevel blog"
                avatar = {faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author='Shobhana Desai' 
                timeago="Yesterday 8:15"
                desc="this is moderate level blog"
                avatar = {faker.image.avatar()}
            />
        </ApprovalCard>
    </div>
    );
};

//using the component in htmlfile

ReactDOM.render(<App/>,document.querySelector("#root"));