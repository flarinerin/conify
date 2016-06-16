# == Schema Information
#
# Table name: service_stops
#
#  id          :integer          not null, primary key
#  label       :string           not null
#  type        :integer          not null
#  location_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Foreign Keys
#
#  fk_rails_c9cf1a6a0a  (location_id => locations.id)
#

require 'rails_helper'

RSpec.describe ServiceStop, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
