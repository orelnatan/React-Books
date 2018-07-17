
import React, { Component } from 'react';
import './header.component.css';

class Header extends Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            categories: [
                {
                    label: 'My Favorites', 
                    id: 231, 
                    image: require('../../assets/images/heart.png'),
                    isActive: false, 
                    action: (id) => {}
                }, {
                    label: 'Trash', 
                    id: 124, 
                    image: require('../../assets/images/bin.png'),
                    isActive: false, 
                    action: (id) => {}
                }, {
                    label: 'Library', 
                    id: 987, 
                    image: require('../../assets/images/library.png'),
                    isActive: true, 
                    action: (id) => {}
                }, 
            ]
        };
    }

    
    categorySelected(id){

        let newCategories = this.state.categories;
        
        newCategories.map(item => item.isActive = false);
        newCategories.find(item => item.id == id).isActive = true;
        
        this.setState({categories: newCategories});
    }


    render() {

        let categories = this.state.categories;

        return (
            <div className="header-main" >
                <div className="header-body" > 
                    <div className="header-categories" >
                        {categories.map((category) => 
                            <div className={"header-category " + (category.isActive ? 'header-category-active' : null)} key={category.id} onClick={() => this.categorySelected(category.id)}  >
                                <div className="header-category-icon" style={{backgroundImage: 'url(' + category.image + ')'}} > </div>
                                <div className="header-category-label" > <span className="header-category-name" > {category.label} </span> </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;


//https://github.com/JedWatson/classnames
        //npm install classnames --save
        // var <class> = classNames({
        //     'editor-mainWrapper': true,
        //     'editorMainWrapperFadeOut': this.state.closeEditor
        // });

     //  var classNames = require('classnames');

// <div className="list-actions" >
// {actions.map((action) => 
//     <div className="list-icon" key={action.id} 
//          style = {{backgroundImage: 'url(' + action.image + ')'}} 
//          onClick = {() => action.action(book.id)} > 
//     </div>
// )}
// </div>