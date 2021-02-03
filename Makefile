# Generete Code by Protocol Buffer
generate:
	docker-compose exec front sh generate.sh

# Lint js,ts,vue files
lint:
	docker-compose exec front npm run lint
