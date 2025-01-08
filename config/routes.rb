Rails.application.routes.draw do
  devise_for :users
  root to: "schedules#index"

  resources :users do
    resources :schedules
  end  
  resources :rooms
end
