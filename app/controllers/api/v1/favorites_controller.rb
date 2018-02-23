module Api::V1
  class FavoritesController < ApplicationController
    def create
      @hitorigoto = Hitorigoto.find(params[:hitorigoto_id])
      current_user.favorites.create(hitorigoto_id: @hitorigoto.id)
    end

    def destroy
      current_user.favorites.find_by(hitorigoto_id: params[:id]).destroy
    end
  end
end
