require 'token_authenticate_me/controllers/password_resetable'

class Api::PasswordResetsController < ApplicationController
  include TokenAuthenticateMe::Controllers::PasswordResetable

end
