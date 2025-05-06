.PHONY: backend frontend

# 個別にバックエンドを起動
backend:
	(cd backend && php artisan serve)

# 個別にフロントエンドを起動
frontend:
	(cd frontend && npm run dev )

# Laravel依存インストール
install-backend:
	cd backend && composer install

# Nuxt/Vue依存インストール
install-frontend:
	cd frontend && npm install

#バックエンド静的解析1
stan:
	cd backend && ./vendor/bin/phpstan analyse --memory-limit=1G

#バックエンド静的解析2
pint:
	cd backend && ./vendor/bin/pint

#フロントエンド静的解析1
lint:
	cd frontend && npm run lint

#フロントエンド静的解析2
format:
	cd frontend && npx prettier --write .

clear:
	cd backend && php artisan cache:clear && php artisan config:clear && php artisan route:clear && php artisan view:clear