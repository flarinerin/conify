require 'token_authenticate_me/controllers/sessionable'

class Api::SessionsController < ApplicationController
  include TokenAuthenticateMe::Controllers::Sessionable

end
