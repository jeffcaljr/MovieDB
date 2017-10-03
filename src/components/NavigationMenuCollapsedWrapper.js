import React, {Component} from 'react'
import PropTypes from 'prop-types'
import NavCategory from "./NavCategory";

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

    /* Set the width of the side navigation to 250px */
    openNav = () => {
        this.setState({navOpen: true})
    }

    /* Set the width of the side navigation to 0 */
    closeNav = () => {
        this.setState({navOpen: false})
    }


    generateCategories(n){

        let categories = [];
        for(let i = 0; i < n; i++){
            let newCategory = <li><NavCategory key={i} index={i} name={"Category " + (i + 1)} selected={this.state.selected == i} onSelect={(index) => this.categorySelected(index)}></NavCategory></li>;
            categories.push(newCategory);
        }

        return categories;
    }


    render(){

        return(

                <div className={this.props.className}>

                    <div className={"sidenav " + (this.state.navOpen ? " w-100 " : " w-0 ") }>

                        <div className="sidenav-elements">
                            <div className="sidenav-header">
                                <a href="javascript:void(0)" className="closebtn" onClick={() => this.closeNav()}>&times;</a>
                            </div>

                            <div className="sidenav-content">
                                <a href="#">About</a>
                                <a href="#">Services</a>
                                <a href="#">Clients</a>
                                <a href="#">Contact</a>
                                <a href="#">About</a>
                                <a href="#">Services</a>
                                <a href="#">Clients</a>
                                <a href="#">Contact</a>
                                <a href="#">About</a>
                                <a href="#">Services</a>
                                <a href="#">Clients</a>
                                <a href="#">Contact</a>
                                <a href="#">About</a>
                                <a href="#">Services</a>
                                <a href="#">Clients</a>
                                <a href="#">Contact</a>
                            </div>
                        </div>

                    </div>

                    <span onClick={() => this.openNav()}><i className="fa fa-bars text-white"></i></span>


                    {/*<div className="row">*/}
                        {/*<div className="col-1">*/}
                            {/*<button className="navbar-toggler navbar-toggler-left" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">*/}
                                {/*<i className="fa fa-bars text-white"></i>*/}
                            {/*</button>*/}

                        {/*</div>*/}


                        {/*<div className="col-10">*/}
                            {/*<div className="nav-item input-group pull-right">*/}
                                {/*<form className="input-group">*/}
                                    {/*<input className="form-control" type="text" placeholder="Search"/>*/}
                                    {/*<div className="input-group-btn">*/}
                                        {/*<button className="btn btn-primary">*/}
                                            {/*<i className="fa fa-search text-white"></i>*/}
                                        {/*</button>*/}

                                    {/*</div>*/}

                                {/*</form>*/}
                            {/*</div>*/}
                        {/*</div>*/}

                    {/*</div>*/}

                    {/*<div className="collapse navbar-collapse" id="navbarSupportedContent">*/}
                        {/*<ul className="navbar-nav mr-auto categories-list">*/}
                            {/*{this.generateCategories(10)}*/}
                        {/*</ul>*/}


                    {/*</div>*/}
                </div>

        );
    }

}

NavigationMenuCollapsed.propTypes = {
    className: PropTypes.string
}

NavigationMenuCollapsed.defaultProps = {
    className: ""
}

export default NavigationMenuCollapsed;