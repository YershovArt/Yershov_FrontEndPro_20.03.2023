
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve()); // project folder name


const buildFolder = `./dist`; // you can use rootFlder it will be created automatically
const scrFolder = `./src`;

export const path = {
	build: {
		js: `${buildFolder}/js/`, /// everything into  js folder will be saved 
		css: `${buildFolder}/css/`,  // куди перенесемо
		html: `${buildFolder}/`, // кидаємо не у файли у а корінь папки because html
		images: `${buildFolder}/img/`, // кидаємо не у файли у а корінь папки because html
		files: `${buildFolder}/files/`,  // куди перенесемо
	},
	src: {
		js: `${scrFolder}/js/app.js`,
		images: `${scrFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${scrFolder}/img/**/*.{svg}`,
		scss: `${scrFolder}/scss/style.scss`,
		html: `${scrFolder}/*.html`,
		files: `${scrFolder}/files/**/*.*`, /// ми перевіряємо файли з любою вкладеністю з будь якою назвою і розширення
	},
	watch: {
		js: `${scrFolder}/js/**/*.js`,
		images: `${scrFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${scrFolder}/img/**/*.{svg}`,
		scss: `${scrFolder}/scss/**/*.scss`,
		html: `${scrFolder}/**/*.html`, /// спостерігаємо за файлами будь-якої вкладеності (html only)ж
		files: `${scrFolder}/files/**/*.*`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	scrFolder: scrFolder,
	rootFolder: rootFolder,
	ftp: `` /// we can show folder in distant ftp server
}
