require 'token_authenticate_me/controllers/password_resetable'

class Api::PasswordResetsController < Api::BaseController
  include TokenAuthenticateMe::Controllers::PasswordResetable

end
