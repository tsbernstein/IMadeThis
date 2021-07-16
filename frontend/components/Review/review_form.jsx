import React from 'react'
import { withRouter } from 'react-router'


class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.review

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if(!this.props.review) {
            this.props.fetchReview(this.props.match.params.reviewId)
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
            if(this.props.match.params.reviewId) {
                this.props.action(this.state).then(review => this.history.push(`/products/${review.productId}`));
            } else {
                this.props.action(this.state).then(() => this.setState(this.props.review))
            }
        } else {
          this.props.openModal("notloggedreview");
        }

        
      }

    render() {
        if(!this.props.review) return null;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className='review-radio-buttons'>
                        <div>
                            <label>1
                                <input 
                                type="radio"
                                value={'1'}
                                checked={this.state.rating === '1'}
                                onChange={this.update('rating')} />
                            </label>
                        </div>
                        <div>
                            <label>2
                                <input 
                                type="radio"
                                value={'2'}
                                checked={this.state.rating === '2'}
                                onChange={this.update('rating')} />
                            </label>
                        </div>
                        <div>
                            <label>3
                                <input 
                                type="radio"
                                value={'3'}
                                checked={this.state.rating === '3'}
                                onChange={this.update('rating')} />
                            </label>
                        </div>
                        <div>
                            <label>4
                                <input 
                                type="radio"
                                value={'4'}
                                checked={this.state.rating === '4'}
                                onChange={this.update('rating')} />
                            </label>
                        </div>
                        <div>
                            <label>5
                                <input 
                                type="radio"
                                value={'5'}
                                checked={this.state.rating === '5'}
                                onChange={this.update('rating')} />
                            </label>
                        </div>
                    </div>
                    <textarea
                        className='review-body'
                        rows={5}
                        cols={30}
                        value={this.state.body}
                        onChange={this.update('body')}
                        placeholder="Did you like our product? Let us know!"
                    />
                    <br/>
                    <button className='submit-button' type='submit'>Submit Review!</button>
                </form>
            </div>
        )
    }
}

export default withRouter(ReviewForm);