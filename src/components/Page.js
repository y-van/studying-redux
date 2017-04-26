import React, {Component} from 'react'
import PropTypes from 'prop-types';

export default class Page extends Component {

    onYearBtnClick(e) {
        this.props.getPhotos(+e.target.innerText);
    }

    render() {
        const {year, photos, fetching} = this.props;
        return <div>
            <p>
                <button onClick={::this.onYearBtnClick}>2016</button>
                <button onClick={::this.onYearBtnClick}>2015</button>
                <button onClick={::this.onYearBtnClick}>2014</button>
            </p>
            <h3>{year} год</h3>
            {
                fetching ?
                    <p>Loading...</p>
                    :
                    <p>У тебя {photos.length} фото.</p>
            }
        </div>
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired
};