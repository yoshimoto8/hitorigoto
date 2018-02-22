class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable

  include DeviseTokenAuth::Concerns::User
  has_many :favorite
  has_many :favoriting_hitorigotos, through: :favorite, source: :hitorigoto

  def favorite?(hitorigoto)
    favorites.find_by(hitorigoto_id: hitorigoto.id)
  end

  def unfavorite!(hitorigoto)
    favorites.find_by(hitorigoto_id: hitorigoto.id).destroy
  end
end
