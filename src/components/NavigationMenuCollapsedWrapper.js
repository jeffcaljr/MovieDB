import React, {Component} from 'react'
import PropTypes from 'prop-types'
import NavCategory from "./NavCategory";
import SearchBar from './SearchBar'

class NavigationMenuCollapsed extends Component{
    constructor(){
        super();
        this.categorySelected = this.categorySelected.bind(this);

        this.state = {
            selected: 0,
            navOpen: false
        }
    }


    categorySelected(index){
        this.setState(Object.assign({}, this.state, {selected: index}))
    }

    openNav = () => {
        this.setState({navOpen: true})
    }

    closeNav = () => {
        this.setState({navOpen: false})
    }



    render(){

        return(

                <div className={this.props.className}>

                    <div className={"sidenav " + (this.state.navOpen ? " w-100 " : " w-0 ") }>

                        <div className="sidenav-elements">
                            <div className="sidenav-header">
                                <a
                                    href="#"
                                    className="settings-btn btn">
                                    <i className="fa fa-gear text-white" aria-hidden="false"></i>
                                </a>

                                <a
                                    href="javascript:void(0)"
                                    className="closebtn"
                                    onClick={() => this.closeNav()}>
                                    &times;
                                </a>
                            </div>

                            <SearchBar/>

                            <div className="sidenav-content">
                                {this.props.children}
                            </div>
                        </div>

                    </div>

                    <div className="collapsed-menu-header">
                        <span className="nav-open-btn" onClick={() => this.openNav()}><i className="fa fa-bars text-white"></i></span>

                    </div>



                </div>

        );
    }

}

NavigationMenuCollapsed.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}

NavigationMenuCollapsed.defaultProps = {
    className: ""
}

export default NavigationMenuCollapsed;