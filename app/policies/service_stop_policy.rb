class ServiceStopPolicy < ApplicationPolicy
  def permitted_attributes
    [:label, :type, :location_id]
  end
end
