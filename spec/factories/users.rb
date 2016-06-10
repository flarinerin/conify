FactoryGirl.define do
  factory :user do
    sequence(:username) { |i| "user#{i}" }
    email { Faker::Internet.email }
    password 'Password'
  end
end
