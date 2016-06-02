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

FactoryGirl.define do
  factory :event do
    label "MyString"
    description "MyText"
    location_id 1
    start_at "2016-06-01 20:31:15"
    end_at "2016-06-01 20:31:15"
  end
end
