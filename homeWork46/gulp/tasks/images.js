import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

export const images = () => { // function created 
	return app.gulp.src(app.path.src.images) // access to file we need  включаємо можливість створення вихідної мапи
		.pipe(app.plugins.plumber( // обробка помилок під час компіляціїї
			app.plugins.notify.onError({
				title: "IMAGES",
				message: "Error: <%= error.message %>",
			}))
		)
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(webp())
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.gulp.src(app.path.src.images))
		.pipe(app.plugins.newer(app.path.build.images)) // перевірили на оновлення , щоб сняти навантаження
		.pipe(imagemin({ // зтискаємо зображення
			progressive: true,
			svgoPlugins: [{ removeViewBox: false}],
			interplaced: true,
			optimizationLevel: 3 // 0 to 7
		}))
		.pipe(app.gulp.dest(app.path.build.images)) // into result folder
		.pipe(app.gulp.src(app.path.src.svg)) // into result folder
		.pipe(app.gulp.dest(app.path.build.images)) // into result folder
		.pipe(app.plugins.browsersync.stream());
}