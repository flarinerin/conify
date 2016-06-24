# == Schema Information
#
# Table name: locations
#
#  id            :integer          not null, primary key
#  label         :string           not null
#  latitude      :float
#  longitude     :float
#  address_line1 :string
#  address_line2 :string
#  city          :string
#  state         :string
#  postal_code   :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'rails_helper'

RSpec.describe Location, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
