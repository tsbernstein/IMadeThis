class Api::ProductsController < ApplicationController
    def show
        @product = Product.includes(:seller)
        if @product
            render :show
        else
            render json: @product.errors.full_messages, status: 404
        end
    end

    def index
        @products = Product.all
        render :index
    end

    private
    def product_params
        params.require(:product).permit(:title, :description, :price)
    end
end