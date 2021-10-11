class Api::ReviewsController < ApplicationController
    def index
        @reviews = Review.all
        render :index
    end

    def create
        @review = Review.new(review_params)
        @review.author_id = current_user.id

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: :unprocessable_entity
        end
    end

    def show
        @review = Review.includes(:author).find(params[:id])
        render 'api/reviews/show'
    end

    def update
        @review = Review.find(params[:id])

        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        @review = Review.find(params[:id])

        if @review
            @review.destroy
            render :show
        end
    end

    private

    def review_params
        params.require(:review).permit(:rating, :body, :product_id)
    end
end
