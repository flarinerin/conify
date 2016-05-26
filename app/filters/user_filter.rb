class UserFilter < ApiMe::BaseFilter
  include ::SearchObject.module #required
  
  # Add custom filter logic here
  # Ex:
  #   option(:search) { |scope, value| scope.where("username LIKE ?", "%#{value}%") }
end
