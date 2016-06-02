require 'token_authenticate_me/controllers/sessionable'

class Api::SessionsController < Api::BaseController
  include TokenAuthenticateMe::Controllers::Sessionable
end
