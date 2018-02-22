module Api::V1
  class FavoritesController < ApplicationController
    def create
      @hitorigoto = Hitorigoto.find(params[:hitorigoto_id])
      current_user.favorite!(@hitorigoto)
    end

    def destroy
      @hitorigoto = Favorite.find(params[:id]).hitorigoto
      current_user.unfavorite!(@hitorigoto)
    end
  end
end
