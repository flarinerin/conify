class LocationsPolicy < ApplicationPolicy
  def permitted_attributes
    [:label, :latitude, :longitude, :address_line1, :address_line2, :city, :state, :postal_code]
  end
end
