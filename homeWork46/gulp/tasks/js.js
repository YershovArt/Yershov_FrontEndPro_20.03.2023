import webpack from "webpack-stream" // для передачі модулів (es6) і підключення їх у фінальній зборці (щоб працювало як під час розробки )

export const js = () => { // function created 
	return app.gulp.src(app.path.src.js, { sourcemaps: true }) // access to file we need  включаємо можливість створення вихідної мапи
		.pipe(app.plugins.plumber( // обробка помилок під час компіляціїї
			app.plugins.notify.onError({
				title: "JS",
				message: "Error: <%= error.message %>",
			}))
		)
		.pipe(webpack({
			mode: 'development',
			output: {
				filename: 'app.min.js',
			}
		}))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream());
}