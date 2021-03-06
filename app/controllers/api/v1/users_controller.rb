require 'token_authenticate_me/controllers/token_authenticateable'

class Api::V1::UsersController < Api::BaseController
  include ApiMe
  include TokenAuthenticateMe::Controllers::TokenAuthenticateable

  skip_before_action :authenticate, only: [:create]
end
