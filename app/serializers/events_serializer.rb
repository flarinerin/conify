class EventsSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id,
    :label,
    :description,
    :location_id,
    :start_at,
    :end_at,
    :created_at,
    :updated_at

  has_many :comments
  has_many :user_favorites
end
