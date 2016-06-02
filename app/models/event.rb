# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  label       :string           not null
#  description :text
#  location_id :integer          not null
#  start_at    :datetime         not null
#  end_at      :datetime         not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Foreign Keys
#
#  fk_rails_3d0bd29ec6  (location_id => locations.id)
#


class Event < ActiveRecord::Base
  has_many :comments, inverse_of: 'event'
  has_many :user_favorites, inverse_of: 'event'
  has_one :location, inverse_of: 'event'

  has_and_belongs_to_many :speakers
end
