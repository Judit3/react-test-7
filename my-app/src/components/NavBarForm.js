import React from "react"
import css from "./css/NavBarForm.module.css"
import NavBarChild from "./NavBarChild"

class NavBarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
        }
    }

    handleButtonClick = () => {
        this.setState((prevState) => {
            return {
                isLoggedIn: prevState.isLoggedIn ? false : true,
            }
        })
    }

    render() {
        return (
            <div className = {css.NavBar}>
                <h1>My Gallery</h1>
                {/* Si no utilizo NavBarChild: */}
                {/* {this.state.isLoggedIn ? 
                    <form>
                        <label htmlFor="POST-name">Username:</label>
                        <input id="POST-name" type="text" name="username" placeholder="Username"/>
                        <label htmlFor="POST-password">Password:</label>
                        <input id="POST-password" type="text" name="password" placeholder="password"/>
                        <input type="submit" value="Save" onClick={() => this.handleClickLogin()}/>
                    </form>
                     : 
                    <button onClick={() => this.handleButtonClick()}>Log in</button>} */}

                {/* Si utilizo NavBarChild: */}
                <NavBarChild 
                isLoggedIn={this.state.isLoggedIn}
                handleClick={this.handleButtonClick}
                />

            </div>      
        )
    }
}

export default NavBarForm