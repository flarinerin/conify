# == Schema Information
#
# Table name: user_favorites
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  event_id   :integer          not null
#  order_by   :integer          not null
#  created_at :datetime
#  updated_at :datetime
#
# Foreign Keys
#
#  fk_rails_25ed4cb388  (user_id => users.id)
#  fk_rails_9a1e3b3f19  (event_id => events.id)
#

class UserFavorite < ActiveRecord::Base
  belongs_to :user, inverse_of: :user_favorites
  belongs_to :event, inverse_of: :user_favorites
end
