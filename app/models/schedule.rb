class Schedule < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :start
  belongs_to :end

  belongs_to :user

  validates :number,      presence: true
  validates :title,       presence: true
  validates :start_id,    numericality: { other_than: 1, message: "can't be blank" }
  validates :end_id,      numericality: { other_than: 1, message: "can't be blank" }

end
