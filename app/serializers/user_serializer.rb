class UserSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :username, :email, :created_at, :updated_at
end
