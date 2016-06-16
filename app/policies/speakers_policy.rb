class SpeakersPolicy < ApplicationPolicy
  def permitted_attributes
    [:label, :name, :bio, :user_id, :email, :phone]
  end
end
