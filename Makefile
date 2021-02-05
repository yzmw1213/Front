# Generete Code by Protocol Buffer
generate:
	docker-compose exec client sh generate.sh

# Lint js,ts,vue files
lint:
	docker-compose exec client npm run lint