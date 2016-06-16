# == Schema Information
#
# Table name: speakers
#
#  id         :integer          not null, primary key
#  label      :string           not null
#  name       :string
#  bio        :text
#  user_id    :integer          not null
#  email      :string           not null
#  phone      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Speaker, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
