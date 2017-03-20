Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: "registrations"}
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root to: "home#index"

get "profile" => "home#profile", as: "profile"

get "/users/:id" => "users#profile", as: "user_profile"


get "/challenge_one", to: "challenges#profile_picture"
get "/challenge_two", to: "challenges#heading"
get "/challenge_three", to: "challenges#about"
get "/challenge_four", to: "challenges#gallery"
get "/challenge_five", to: "challenges#video"

get "/css_challenge_1", to: "challenges#background"
get	"/css_challenge_2", to: "challenges#picture_positioning"
get	"/css_challenge_3", to: "challenges#layout"
get	"/css_challenge_4", to: "challenges#typography"
get	"/css_challenge_5", to: "challenges#styling"
end
