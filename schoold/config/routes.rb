Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: "registrations"}
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root to: "home#index"

get "profile" => "home#profile", as: "profile"

get "/users/:id" => "users#profile", as: "user_profile"


get "/challenge_one", to: "challenges#profile_picture"
post "/challenge_one", to: "challenges#profile_picture"

get "/challenge_two", to: "challenges#heading"
post "/challenge_two", to: "challenges#heading"

get "/challenge_three", to: "challenges#about"
post "/challenge_three", to: "challenges#about"

get "/challenge_four", to: "challenges#gallery"
post "/challenge_four", to: "challenges#gallery"

get "/challenge_five", to: "challenges#video"
post "/challenge_five", to: "challenges#video"
end
