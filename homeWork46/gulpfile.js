import  gulp from "gulp";
// імпорт шляхів 
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";
// Передаємо значення у глобальну змінну 
global.app = {
	path: path, // шляхи 
	gulp: gulp, // основний модуль
	plugins: plugins,
}

// tasks import
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";


function watcher() {
	gulp.watch(path.watch.files, copy) // 
	gulp.watch(path.watch.html, html) // 
	gulp.watch(path.watch.scss, scss) // 
	gulp.watch(path.watch.js, js) // 
	gulp.watch(path.watch.images, images) // 
}

const mainTasks = gulp.parallel(copy, html, scss, js, images);
/// default scenario
const dev = gulp.series(reset, mainTasks, gulp.parallel( watcher, server)) /// віполняет задачи последовательно видаляємо папку з результатом, виконуємо щось і спостерігаємо
gulp.task('default', dev); // default scenario