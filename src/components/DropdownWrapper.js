import React, {Component} from 'react'
import PropTypes from 'prop-types'

class DropdownWrapper extends Component{

    constructor(){
        super()

        this.state = {
            expanded: undefined,
            userSetExpanded: false
        }

        this.toggleExpanded = this.toggleExpanded.bind(this)
    }

    toggleExpanded(){
        this.setState({expanded: !this.state.expanded, userSetExpanded: true})
    }

    render(){
        return (
            <div className="dropdown-wrapper">
                <div className="dropdown-header ">
                    <div
                        className="dropdown-header-content d-flex flex-row justify-content-start align-items-center"
                        onClick={this.toggleExpanded}>
                        <h3 className="title text-white typeface-serif ">{this.props.title}</h3>
                        <div className="dropdown-toggle-btn p-2 m-0">
                            <i className={"text-white fa " + (this.state.expanded ? " fa-caret-down " : " fa-caret-right ")}></i>
                        </div>
                    </div>
                </div>

                <div className={"dropdown-content-container " + (this.state.expanded ? " expand " : (( (this.state.userSetExpanded)) ? " contract " : " hidden "))}>
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