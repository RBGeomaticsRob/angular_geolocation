require 'sinatra'

set :public_folder, File.dirname(__FILE__) + '/public'

get '/' do
  cache_control :public, :must_revalidate, :max_age => 60
  send_file('index.html')
end
