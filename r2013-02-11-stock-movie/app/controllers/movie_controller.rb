class MovieController < ApplicationController


def movieinput

end


def findmovie
  @name= params[:title].gsub(' ','+')

  url = "http://www.omdbapi.com/?t=#{@name}"
    html = HTTParty.get(url)

    @hash = JSON(html)
    @title= @hash['Title']
    @year= @hash['Year']
    @rated= @hash['Rated']
    @runtime= @hash['Runtime']
    @genre= @hash['Genre']
    @director= @hash['Director']
    @actors= @hash['Actors']
    @plot = @hash['Plot']
    @poster= @hash['Poster']




end





end
