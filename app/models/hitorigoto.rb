class Hitorigoto < ApplicationRecord
  belongs_to :user
  has_many :favorites
  has_many :favorited_users, through: :favorites, source: :user
  validates :title, presence: true
  validates :body, presence: true
  validates :user_id, presence: true
end
