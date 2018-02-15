module Api::V1
  class HitorigotosController < ApplicationController
    def index
      @hitorigotos = Hitorigoto.all.order(id: "DESC")
      render json: @hitorigotos
    end

    def create
      Hitorigoto.create(title: params[:params][:title], body: params[:params][:title])
    end
  end
end
