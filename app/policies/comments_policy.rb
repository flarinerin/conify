class CommentsPolicy < ApplicationPolicy
  def permitted_attributes
    [:comment, :event_id, :rating]
  end
end
