/* import React from "react"
import css from "./css/NavBarSimple.module.css"

class NavBarSimple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            welcome: "Hello, guest!",
            buttonText: "Log in",
        }
    }

    handleClick() {
        this.setState((prevState) => {
            console.log("Previous State:", prevState);
            return {
                welcome: prevState.welcome === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
                buttonText: prevState.buttonText ===  "Log in" ? "Log out" : "Log in",
            }
        })
    }

    render() {
        return (
            <div className = {css.NavBar}>
                <h1>My Gallery</h1>
                <span>{this.state.welcome}</span>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button> 
            </div>
        )
    }
}

export default NavBarSimple */