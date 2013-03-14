R20130211Basics::Application.routes.draw do
  get '/home' => 'home#homepage'
  get '/about' => 'home#about'
  get '/faq' => "home#faq"


  get "/dogs" => "dogs#dogpage"

  get "/dogs/new" => "dogs#new"

  get "/dogs/faq" => "dogs#faq"

  get "/dogs/faq2" => "dogs#faq2"

  get '/auto/:color' => 'auto#color'
  get '/auto/:hp/:torque' => 'auto#engine'

  #get "/calc/:num1/:num2/+" => "calc#add"

  #  get "calc/:num1/:num2/-" => "calc#subtract"

  get "/calc/:x/:y/:operator" => "calc#calculate"

  get '/funny' => 'funny#lol'


 root :to => 'home#homepage'
end
