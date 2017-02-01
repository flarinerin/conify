# == Schema Information
#
# Table name: service_stops
#
#  id          :integer          not null, primary key
#  label       :string           not null
#  type        :integer          not null
#  location_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Foreign Keys
#
#  fk_rails_c9cf1a6a0a  (location_id => locations.id)
#

FactoryGirl.define do
  factory :service_stop do
    label { Faker::Book.title }
    type { rand(1...5) }
    location
  end
end
