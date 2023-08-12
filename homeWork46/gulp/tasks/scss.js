import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css'; // Зжимання CSS файла
import webpcss from 'gulp-webpcss'; // Вивід вебп  зображень
import autoprefixer from 'gulp-autoprefixer'; // Додавання векторних префіксів
import groupsCssMediaQueries from 'gulp-group-css-media-queries'; // Групування медіа запитів

const sass = gulpSass(dartSass); /// call from plugin to compiler

export const scss = () => {
	return app.gulp.src(app.path.src.scss, { sourcemaps: true })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SCSS",
				message: 'Error: <%= error.message %>'
			})))
		.pipe(app.plugins.replace(/@img\//g, '../img/'))
		.pipe(sass({
			outputStyle: 'expanded',
		}))
		.pipe(groupsCssMediaQueries())
		.pipe(webpcss(
			{
				webpClass: ".webp", // if browser supports webp we will see it 
				noWebpClass: ".no-webp", // if it doesnt and wee nedd gulp webp converter npm i -D webp-converter@2.2.3
			}
		))
		.pipe(autoprefixer({
			grid: true, // підтримка гріда 
			overrideBrowserslists: ["last 3 versions"],
			cascade: true,
		}))
		// Розкоментувати якщо потрібно подивитись не сжатий файлик стилей 2 файла поличм сжатій і не сжатій
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(cleanCss()) // сжати файл стилю
		.pipe(rename({
			extname: ".min.css",
		}))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream())
}