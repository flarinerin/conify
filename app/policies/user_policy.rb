class UserPolicy < ApplicationPolicy
  def permitted_attributes
    [:username, :email, :password, :password_confirmation]
  end
end
