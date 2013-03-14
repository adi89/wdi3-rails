R20130211StockMovie::Application.routes.draw do

get '/start' => 'home#start'
get '/about' => 'home#about'
get '/faq' => 'home#faq'

get '/stocks' => 'stock#stockinput'

get '/calc' => 'stock#calc'




get '/movies' => 'movie#movieinput'

get '/findmovie' => 'movie#findmovie'

root :to => 'home#start'
end
