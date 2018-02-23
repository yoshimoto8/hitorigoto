class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable

  include DeviseTokenAuth::Concerns::User

  has_many :hitorigotos, dependent: :destroy
  has_many :favorites
  has_many :favoriting_hitorigotos, through: :favorites, source: :hitorigoto

end
