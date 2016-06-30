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
    location nil
    label { Faker::Company.catch_phrase }
    description { Faker::Hipster.sentence }
    start_at { cur_daytime }
    end_at { cur_daytime + 20.minutes }

    transient do
      cur_daytime DateTime.parse('19th July 2016 08:30:00-08:00')
    end

    after(:create) do |e|
      new_speaker = Speaker.all.sample || FactoryGirl.create(:speaker)
      FactoryGirl.create(:event_speaker, event: e, speaker: new_speaker)

      comments = Array.new(rand(0...5)) do |c|
        FactoryGirl.create(:comment, event: e, author: new_speaker.user)
      end
    end
  end
end
