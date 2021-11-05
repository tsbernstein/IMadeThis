import React from 'react';
import { withRouter } from 'react-router';
import ReactStars from "react-rating-stars-component";


class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.review;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if(!this.props.review) {
            this.props.fetchReview(this.props.match.params.reviewId)
        }
    }

    updateRating(field){
        return e => {
            this.setState({[field]: e});
        }
    }

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value});
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.currentUser) {
                this.props.action(this.state).then(() => this.setState(this.props.review))
        } else {
          this.props.openModal("notloggedreview");
        }  
    }

    render() {
        if(!this.props.review) return null;
        return (
            <div className='review-form-container'>
                <form onSubmit={this.handleSubmit}>
                    <ReactStars
                        value={this.state.rating}
                        size={24}
                        color2='#000000'
                        half={false}
                        onChange={this.updateRating('rating')}
                    >
                    </ReactStars>
               
                    <textarea
                        className='review-body'
                        value={this.state.body}
                        rows={5}
                        onChange={this.update('body')}
                        placeholder="Did you like our product? Let us know!"
                    />
                    <br/>
                    <div className='submit-review-button-container'>
                        <button className='submit-button' id='submit-review-button' type='submit'>Submit Review!</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(ReviewForm);