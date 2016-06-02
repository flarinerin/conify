class UserFavoritePolicy < ApplicationPolicy
  def permitted_attributes
    [:user_id, :event_id, :order_by]
  end
end
