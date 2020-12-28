import React, { createContext, Component } from "react"

export const ThemeContext = createContext();

//now define the provider

export class ThemeProvider extends Component {
    constructor(props) {
        super(props)
        this.state = { isDarkMode: true };
    }
    themeToggle = () => {
        this.setState({ isDarkMode: !this.state.isDarkMode })
    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, themeToggle: this.themeToggle }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

