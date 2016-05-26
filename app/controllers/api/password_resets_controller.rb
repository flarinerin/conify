require 'token_authenticate_me/controllers/password_resetable'

class Api::PasswordResetsController < BaseController
  include TokenAuthenticateMe::Controllers::PasswordResetable

end
