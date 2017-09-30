import React, {Component} from 'react'
import NavCategory from "./NavCategory";

class NavigationMenuCollapsed extends Component{
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

                <nav className={this.props.className}>



                    <div className="row">
                        <div className="col-2">

                            <button className="navbar-toggler navbar-toggler-left" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fa fa-bars text-white"></i>
                            </button>

                        </div>


                        <div className="col-10">
                            <div className="nav-item input-group pull-right">
                                <form className="input-group">
                                    <input className="form-control" type="text" placeholder="Search"/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-primary">
                                            <i className="fa fa-search text-white"></i>
                                        </button>

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto categories-list">
                            {this.generateCategories(10)}
                        </ul>


                    </div>
                </nav>






        );
    }

}

export default NavigationMenuCollapsed;