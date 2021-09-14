class CartsController < ApplicationController
    def create
        @cart = Cart.new(cart_params)

        if @cart.save
            render :show
        else
            render json: @cart.errors.full_messages, status: :unprocessable_entity
        end
    end

    def show
        @cart = Cart.find(params[:id])
        render :show
    end

    def update
        @cart = Cart.find(params[:id])

        if @cart.update(cart_params)
            render :show
        else
            render json: @cart.errors.full_messages, status: :unprocessable_entity
        end
    end

    private

    def cart_params
        params.require(:cart).permit(:user_id)
    end
end