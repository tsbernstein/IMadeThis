class Api::CartsController < ApplicationController
    def index
        @carts = Cart.where(user_id: current_user.id)
        render :index
    end

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

    def destroy
        @cart = Cart.find(params[:id])

        if @cart
            @cart.destroy
            render :show
        end
    end

    private

    def cart_params
        params.require(:cart).permit(:user_id, :product_id, :quantity)
    end
end