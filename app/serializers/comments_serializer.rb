class CommentsSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :comment, :event_id, :rating, :created_at, :updated_at

  has_one :event
end
