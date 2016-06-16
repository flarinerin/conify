# == Schema Information
#
# Table name: locations
#
#  id            :integer          not null, primary key
#  label         :string           not null
#  latitude      :float
#  longitude     :float
#  address_line1 :string
#  address_line2 :string
#  city          :string
#  state         :string
#  postal_code   :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

FactoryGirl.define do
  factory :location do
    label "MyString"
    latitude 1.5
    longitude 1.5
    address_line1 "MyString"
    address_line2 "MyString"
    city "MyString"
    state "MyString"
    postal_code "MyString"
  end
end
