module Api::V1
  class HitorigotosController < ApplicationController
    def index
      @hitorigotos = Hitorigoto.all
      render json: @hitorigotos
    end

    def create
      @hitorigoto  = current_user.hitorigoto.new(title: params[:params][:title], body: params[:params][:text])
      if @hitorigoto.save
        render json: @hitorigoto
      else
        render json: @hitorigoto.errors
      end
    end
  end
end
