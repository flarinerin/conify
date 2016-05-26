Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
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
      resources :users
    end
  end
end
