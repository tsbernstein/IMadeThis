class Api::ProductsController < ApplicationController
    def show
        @product = Product.find_by(params[:id])
        render :show
    end

    def index
        @products = Product.all
        render :index
    end

    def create
        @product = Product.create!(product_params)

        if @product.save
            render :show
        else
            render json: @product.errors.full_messages, status: :unprocessable_entity
        end
    end

    private
    def product_params
        params.require(:product).permit(:title, :description, :price)
    end
end