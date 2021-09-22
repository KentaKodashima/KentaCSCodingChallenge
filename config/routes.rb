Rails.application.routes.draw do
  root 'pages#home'
  namespace :api do
    resources :articles, only: %i[index show]
  end
  match '*path', to: 'pages#home', via: :all
end
