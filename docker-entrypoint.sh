dockerize -wait tcp://database:3306 -timeout 20s

echo "Start Aegis Docker Test Project!"

node app.js