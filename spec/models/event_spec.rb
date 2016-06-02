# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  label       :string           not null
#  description :text
#  location_id :integer          not null
#  start_at    :datetime         not null
#  end_at      :datetime         not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Foreign Keys
#
#  fk_rails_3d0bd29ec6  (location_id => locations.id)
#

require 'rails_helper'

RSpec.describe Event, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
