Rails.application.routes.draw do
  namespace :api do
    get :csrf, to: 'csrf#index'
    resource :session, only: [:create, :show, :destroy]

    resources(
      :password_resets,
      only: [:create, :update],
      constraints: {
        id: TokenAuthenticateMe::UUID_REGEX
      }
    )

    namespace :v1 do
      resources :comments
      resources :locations
      resources :speakers
      resources :service_stops
      resources :events
      resources :users
    end
  end

  get '(*path)', to: 'client_application#index'
end
