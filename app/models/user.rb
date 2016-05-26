# == Schema Information
#
# Table name: users
#
#  id                       :integer          not null, primary key
#  username                 :string           not null
#  email                    :string           not null
#  password_digest          :string           not null
#  reset_password_token     :string
#  reset_password_token_exp :datetime
#  created_at               :datetime
#  updated_at               :datetime
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#  index_users_on_username              (username) UNIQUE
#

require 'token_authenticate_me/models/authenticatable'

class User < ActiveRecord::Base
  include TokenAuthenticateMe::Models::Authenticatable

  has_many :sessions

  def as_json(options=nil)
    { user: super(options) }
  end
end
