require 'factory_girl'
require 'date'

namespace :demo do
  task seed: :environment do

    # make 6 locations
    FactoryGirl.create_list(:speaker, 75)
    FactoryGirl.create_list(:location, 6)

    # setup some random favorites for each user
    User.all.each do |u|
      favs = Array.new(rand(0...5)) do |c|
        FactoryGirl.create(
          :user_favorite,
          user: u,
          event: Event.all.sample
        )
      end
    end
    # make the service stops
  end
end
