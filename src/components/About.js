import React from 'react'
import User from './User'
import UserClass from './UserClass'

// const About = () => {
  // return (
  //   <div>
  //     <h1>About Us</h1>
  //     <User name={"Harsh KK Function"}  location={"Karve Nagar Pune"}/>
  //     <UserClass  name={"KK Class"}/>
  //   </div>
  // )
// }


class About extends React.Component{
  
  
  constructor(props){
    super(props)
    // console.log(" About constructor  ");
  }
  
  
  componentDidMount(){
    
    // console.log("About Component Did Mount");
  };

  render(){
    
    // console.log("About Render Component  ");
    return (
      <div>
        <h1>About Us</h1>
        <UserClass  name={"KK Class"}/>
        {/* <User /> */}
      </div>
    )
  }
}

export default About