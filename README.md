# Webapp template
## A template for Angular 1.x with Gulp & Bower

```
|-- .gitignore
|-- README.md
|-- frontend/
	|-- assets/
		|-- fonts
			|-- RobotoTTF/
		|-- images/
		|-- js/
		|-- sass/
			|-- _base.scss
			|-- _robotoFonts.scss
			|-- style.scss
	|--	bower_components/
	|--	components/
		|-- main/
			|-- main.html
			|-- mainController.js
	|--	directives/
		|-- navbar/
			|-- navbar.html
			|-- navbar.js
	|--	app.module.js
	|--	app.routes.js
	|--	index.html
|-- backend
	|-- .bowerrc
	|-- bower.json
	|-- gulpfile.js
	|-- package.json
	|-- server.js
	|-- modules/
		|-- development.js
	|-- node_modules/
|-- dist.dev
	|-- css/
	|-- fonts/
	|-- html/
	|-- images/
	|-- js/
	|-- vendor/
|-- dist.prod
	|-- css/
	|-- fonts/
	|-- html/
	|-- images/
	|-- js/
	|-- vendor/
```

### Setup
1. From inside the **backend** folder run `npm install`
2. From inside the **backend** folder run `bower install`
3. From inside the **backend** folder run `gulp`
4. On a new console, while gulp is running, start the webserver `NODE_ENV=development node server.js`