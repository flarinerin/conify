class SpeakersSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :label, :name, :bio, :user_id, :email, :phone, :created_at, :updated_at

  has_one :user
end
