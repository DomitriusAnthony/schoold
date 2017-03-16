Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root to: "home#index"

get "about" => "home#about", as: "about"

get "show" => "games#show", as: "show"

end
