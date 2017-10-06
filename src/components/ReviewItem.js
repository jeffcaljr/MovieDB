import React from 'react'
import PropTypes from 'prop-types'


const ReviewItem = (props) => {

    return (
        <div className="review-item d-flex flex-column justify-content-start align-items-center w-100">

            <h4
                className='text-left text-secondary small align-self-start'>
                @{props.author}
                </h4>
            <p
                className="text-white text-white font-italic">
                { (props.content.length < 278)
                    ? props.content
                    : props.content.substr(0, 275).concat("...")
                }

            </p>
            <a
                href={props.url}
                className="btn review-link align-self-end text-white btn-primary"
                target="_blank">
                <p className="review-link-text">Go to Review</p>
            </a>
        </div>
    );

}

ReviewItem.propTypes = {
    reviewID: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired

}


export default ReviewItem