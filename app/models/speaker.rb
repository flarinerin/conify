# == Schema Information
#
# Table name: speakers
#
#  id         :integer          not null, primary key
#  label      :string           not null
#  name       :string
#  bio        :text
#  user_id    :integer          not null
#  email      :string           not null
#  phone      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Speaker < ActiveRecord::Base
  has_and_belongs_to_many :events
  has_one :user
end
