import React, {Component} from 'react'
import PropTypes from 'prop-types'

class DropdownWrapper extends Component{

    constructor(){
        super()

        this.state = {
            expanded: false
        }

        this.toggleExpanded = this.toggleExpanded.bind(this)
    }

    toggleExpanded(){
        this.setState({expanded: !this.state.expanded})
    }

    render(){
        return (
            <div className="dropdown">
                <div className="dropdown-header">
                    <h3 className="title d-inline-block text-white">{this.props.title}</h3>
                    <a
                        className="btn dropdown-toggle-btn d-inline-block borderless"
                        onClick={this.toggleExpanded}>

                        <i className={"text-white fa " + (this.state.expanded ? " fa-caret-down " : " fa-caret-right ")}></i>
                    </a>
                </div>

                <div className={"dropdown-content " + (this.state.expanded ? " expanded " : " hidden ")}>
                    <hr className="dropdown-divider"/>
                    {this.props.children}
                </div>

            </div>
        );
    }
}

DropdownWrapper.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}



export default DropdownWrapper