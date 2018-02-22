class Hitorigoto < ApplicationRecord
  has_many :user
  has_many :favorited_users, through: :favorite, source: :user
  validates :title, presence: true
  validates :body, presence: true
  validates :user_id, presence: true
end
