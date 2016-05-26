# == Schema Information
#
# Table name: sessions
#
#  id         :integer          not null, primary key
#  key        :string           not null
#  expiration :datetime
#  user_id    :integer
#  created_at :datetime
#  updated_at :datetime
#
# Indexes
#
#  index_sessions_on_key  (key) UNIQUE
#

require 'token_authenticate_me/models/sessionable'

class Session < ActiveRecord::Base
  include TokenAuthenticateMe::Models::Sessionable

  belongs_to :user

  def as_json(options={})
    { session: super({ include: :user }.merge(options)) }
  end

end
