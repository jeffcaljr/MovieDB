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
            <div className="dropdown-wrapper">
                <div className="dropdown-header">
                    <h3 className="title d-inline-block text-white">{this.props.title}</h3>
                    <a
                        className="btn dropdown-toggle-btn d-inline-block borderless"
                        onClick={this.toggleExpanded}>

                        <i className={"text-white fa " + (this.state.expanded ? " fa-caret-down " : " fa-caret-right ")}></i>
                    </a>
                </div>

                <div className={"dropdown-content-container " + (this.state.expanded ? " expand " : " contract ")}>
                    <hr className="dropdown-divider"/>
                    <div className={"dropdown-content "}>
                        {this.props.children}
                    </div>

                </div>



            </div>
        );
    }

    componentDidMount(){
        this.setState({expanded: this.props.expandedDefault})
    }
}

DropdownWrapper.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    expandedDefault: PropTypes.bool
}

DropdownWrapper.defaultProps = {
    expandedDefault: false
}



export default DropdownWrapper