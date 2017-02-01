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
    user

    label { Faker::StarWars.character }
    name { Faker::Name.name }
    bio { Faker::StarWars.quote }
    email { Faker::Internet.email }
    phone { Faker::PhoneNumber.phone_number }
  end
end
