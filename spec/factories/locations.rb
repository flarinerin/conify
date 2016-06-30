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
    label { Faker::Company.name }
    latitude 46.230485
    longitude -119.092247
    address_line1 { Faker::Address.street_address }
    address_line2 { Faker::Address.secondary_address }
    city "Pasco"
    state "WA"
    postal_code "99301"

    after(:create) do |location|
      open_daytime = DateTime.parse('19th July 2016 08:30:00-08:00')
      3.times do |day|

        cur_daytime = open_daytime
        16.times do |half_hr|
          FactoryGirl.create(:event, location: location, cur_daytime: cur_daytime)

          cur_daytime = cur_daytime + 30.minutes
        end
        open_daytime = open_daytime + 1.days
      end
    end
  end
end
