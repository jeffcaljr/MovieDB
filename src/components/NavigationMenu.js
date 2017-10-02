import React, {Component} from 'react'
import PropTypes from 'prop-types'
import NavCategory from "./NavCategory";
import DropdownWrapper from "./DropdownWrapper";

class NavigationMenu extends Component{
    constructor(){
        super();
        this.categorySelected = this.categorySelected.bind(this);

        this.state = {
            selected: -1
        }
    }


    categorySelected(index){
        this.setState(Object.assign({}, this.state, {selected: index}), this.filterSelected(index))

    }

    filterSelected = (index) =>{
        this.props.onFilterSelected(index)
    }


    generateCategories(n){

        let categories = [];


        this.props.categories.map((category) => {
            let newCategory = <li><NavCategory
                key={category.id} index={category.id}
                name={category.name}
                selected={this.state.selected == category.id}
                onSelect={(index) => this.categorySelected(index)}></NavCategory></li>;
            categories.push(newCategory);
        })

        // if(this.props.categories && this.props.categories.length > 0){
        //     this.setState({selected: (this.props.categories[0]).id})
        // }

        return categories;
    }


    render(){

        return(
            <div className={this.props.className}>

                <i className="fa fa-gear text-white pull-right" aria-hidden="false"></i>

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



                <h3 className="text-white font-weight-bold">Trending</h3>
                <DropdownWrapper title={"Categories"}
                                 children={
                                            <ul className="list-group categories-list">
                                                {this.generateCategories(10)}

                                            </ul>}
                />

            </div>


        );
    }

}

NavigationMenu.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string

    })).isRequired,
    className: PropTypes.string,
    onFilterSelected: PropTypes.func
}

NavigationMenu.defaultProps = {
    categories: [],
    className: ""
}

export default NavigationMenu;