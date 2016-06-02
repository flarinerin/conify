require 'token_authenticate_me/controllers/token_authenticateable'
class BaseAuthenticatedController < ApplicationController
  include TokenAuthenticateMe::Controllers::TokenAuthenticateable
end
