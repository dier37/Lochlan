import  React, { Component } from 'react';
import { connect } from 'react-redux';

class PictureList extends  Component {

    renderList(){
        return this.props.pictures.map ((picture) => {
            return (
                <li key={picture.title} className="list-group-item">{picture.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps (state){
    //shows up as props inside picture list GS 20171127
    return {
        pictures: state.pictures
    }
}

export default connect (mapStateToProps) (PictureList);