class StockController < ApplicationController


def stockinput
end




def calc

  @symbol= params[:symbol].upcase
  @stockvalue= YahooFinance::get_quotes(YahooFinance::StandardQuote, @symbol)[@symbol].lastTrade
end




end
