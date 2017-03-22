Rails.application.routes.draw do
  root to: 'tweets#index'
  resources :tweets, only: [:create, :index, :destroy]
end
