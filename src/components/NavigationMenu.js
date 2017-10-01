import React, {Component} from 'react'
import PropTypes from 'prop-types'
import NavCategory from "./NavCategory";

class NavigationMenu extends Component{
    constructor(){
        super();
        this.categorySelected = this.categorySelected.bind(this);

        this.state = {
            selected: 0
        }
    }


    categorySelected(index){
        this.setState(Object.assign({}, this.state, {selected: index}))

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

                <div className="nav-item input-group">
                    <form className="input-group">
                        <input className="form-control" type="text" placeholder="Search"/>
                        <div className="input-group-btn">
                            <button className="btn btn-primary">
                                <i className="fa fa-search text-white"></i>
                            </button>

                        </div>

                    </form>
                </div>



                <h3 className="text-white">Categories</h3>
                <ul className="list-group categories-list">
                    {this.generateCategories(10)}

                </ul>

                <i className="fa fa-gear text-white pull-left" aria-hidden="false"></i>

            </div>


        );
    }

}

NavigationMenu.propTypes = {
    className: PropTypes.string
}

NavigationMenu.defaultProps = {
    className: ""
}

export default NavigationMenu;