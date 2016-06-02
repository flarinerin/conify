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

FactoryGirl.define do
  factory :speaker do
    label "MyString"
    name "MyString"
    bio "MyText"
    user_id 1
    email "MyString"
    phone "MyString"
  end
end
