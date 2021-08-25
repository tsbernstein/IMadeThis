# I Made This

Live site! [I Made This](http://i-madethis.herokuapp.com/#/)

## Technologies

I made this is an Etsy inspired full-stack application which utilizes RoR as a framework. The database is built using PostgresQL and the frontend components are built using React with Redux state management.

## Core Features

### Account Creation

Users can create an account via the sign up button in the top right of the nav bar. Users passwords will be encrypted using BCrypt to pretect their information. User will be saved to the DB so they can log in again at a later time after logging out. User will be able to enter their first name which will be displayed at the top by the search bar so they know they are logged in.

There is also an option to login as a demo user account where users can test functionality of the site restricted to logged in users.

Splash page upon navigating to the site
![image](https://user-images.githubusercontent.com/79271412/125959510-1f04df2b-c385-44cc-b184-44395f7a8e5b.png)

Account creation prompt as a modal  
![image](https://user-images.githubusercontent.com/79271412/125959741-3e85464c-720c-48cf-a1d2-5a4bf5b510f8.png)

### Products

There are a variety of products listed on the site. Upon entering the site you will see a product index. Clicking on any product will take you to a show page for that specific product. The show page will show the title, price, description, seller of the product, and images of the product.

Product Show page  
![image](https://user-images.githubusercontent.com/79271412/125960162-43f52e2f-bb28-4ac0-b6f8-72fdc20308e4.png)

### Reviews

All users will be able to view reviews left for each individual product, but will be required to login/signup to leave a review. The user is also able to edit/delete their own reviews. Reviews demonstrate full CRUD functionality.

Review section  
![image](https://user-images.githubusercontent.com/79271412/125960376-a2f13c70-fda7-40eb-abdb-07a423e293ed.png)

## Code Snippets

Submitting a review restricted to the existance of a current user. Will be prompted to log in if not  

```
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
```

Efficient active record query to optimize database performance and avoid n + 1 query

```
    def show
        @review = Review.includes(:author).find(params[:id])
        render 'api/reviews/show'
    end
```
