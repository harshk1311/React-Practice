import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:1
        }
        console.log(" UserClass constructor  ");
    }

    componentDidMount(){
        console.log("UserClass Component Did Mount");
      };

    render(){
        console.log(" UserClass render  ");
        const {name}=this.props;
        const {count}=this.state;
        return(
            <div>
                <h1>Count = {count}</h1>
                <button onClick={()=>{
                    this.setState({count:this.state.count+1})
                }}>Increase Count</button>
                <h1>Name : {name}</h1>
                <h2>Location : Solapur</h2>
                <h3>Contact : kk1311</h3>
            </div>
        );
    }
}

export default UserClass;