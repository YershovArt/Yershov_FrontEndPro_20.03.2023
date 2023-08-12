// информация об общих плагинах
import replace from "gulp-replace"; // Пошук і змінення
import plumber from "gulp-plumber"; // Обробка помилок
import notify from "gulp-notify"; // Повідомлення
import browsersync from "browser-sync"; // Локальний сервер
import newer from "gulp-newer"; // Чи оновиось зображення галп обробить лише те чого нема у папці з результатом

export const plugins = {
	replace:replace,
	plumber:plumber,
	notify:notify,
	browsersync:browsersync,
	newer:newer,
}