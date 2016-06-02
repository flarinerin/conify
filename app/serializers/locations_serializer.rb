class LocationsSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id,
    :label,
    :latitude,
    :longitude,
    :address_line1,
    :address_line2,
    :city,
    :state,
    :postal_code,
    :created_at,
    :updated_at
end
