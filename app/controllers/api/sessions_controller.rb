require 'token_authenticate_me/controllers/sessionable'

class Api::SessionsController < BaseController
  include TokenAuthenticateMe::Controllers::Sessionable
end
