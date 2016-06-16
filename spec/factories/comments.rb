# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  comment    :text
#  event_id   :integer          not null
#  rating     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Foreign Keys
#
#  fk_rails_c6b77e33aa  (event_id => events.id)
#

FactoryGirl.define do
  factory :comment do
    comment "MyText"
    event_id 1
    rating 1
  end
end
