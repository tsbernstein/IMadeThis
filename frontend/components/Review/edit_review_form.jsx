import React from "react";
import { withRouter } from 'react-router'
import ReactStars from "react-rating-stars-component";

class EditReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.review;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state).then(() => this.setState(this.props.review)).then(() => this.props.closeModal());
    }

    update(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value});
        }
    }

    updateRating(field){
        return e => {
            this.setState({[field]: e});
        }
    }

    render() {
        if(!this.props.review) return null;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <ReactStars
                        value={this.state.rating}
                        size={24}
                        color2='#000000'
                        onChange={this.updateRating('rating')}
                    >
                    </ReactStars>

                    <textarea
                        className='review-body'
                        rows={5}
                        cols={30}
                        value={this.state.body}
                        onChange={this.update('body')}
                    />
                    <br/>
                    <button className='submit-button' type='submit'>Submit Edited Review!</button>
                </form>
            </div>
        )
    }
}

export default withRouter(EditReviewForm);