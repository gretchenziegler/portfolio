require "sinatra"

get "/" do
	File.read('./views/index.html')
end