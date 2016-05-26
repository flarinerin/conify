require 'token_authenticate_me/controllers/token_authenticateable'
class ApplicationController < ActionController::Base
  force_ssl if Rails.env.production?

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  include TokenAuthenticateMe::Controllers::TokenAuthenticateable

end
