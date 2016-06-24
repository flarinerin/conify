class UserFavorite < ActiveRecord::Base
  has_one :user, inverse_of: 'user_favorite'
  has_one :event, inverse_of: 'user_favorite'
end
