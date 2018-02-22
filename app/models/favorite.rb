class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :hitorigoto

  def favorite!(hitorigoto)
    favorites.create!(hitorigoto_id: hitorigoto.id)
  end
end
