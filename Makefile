help:
	@echo "Please use \`make <target>' where <target> is one of"
	@echo "  dev-setup                        to setup dev environment"
	@echo "  dev-watch                        to start dev mode"
	@echo "  prod-setup                       to install dependencies for production"
	@echo "  prod-build                       to create a production build"

dev-setup:
	yarn

dev-watch:
	yarn watch

prod-setup:
	yarn install --non-interactive

prod-build:
	mkdir docs
	yarn prod
	cp CNAME docs
	cp public/app.css docs
	cp public/logo.png docs
	cp public/index.html docs
	cp public/favicon.ico docs
	cp public/favicon-16x16.png docs
	cp public/favicon-32x32.png docs
	cp public/favicon-96x96.png docs

.PHONY: dev-setup dev-watch prod-setup prod-build
