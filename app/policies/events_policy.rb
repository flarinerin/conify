class EventsPolicy < ApplicationPolicy
  def permitted_attributes
    [:label, :description, :location_id, :start_at, :end_at]
  end
end
