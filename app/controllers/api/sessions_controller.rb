require 'token_authenticate_me/controllers/sessionable'

class Api::SessionsController < BaseAuthenticatedController
  include TokenAuthenticateMe::Controllers::Sessionable
end
