let gulp = require("gulp");
let server = require("gulp-webserver");
let ts = require("gulp-typescript");
let sourcemaps = require("gulp-sourcemaps");
let tsConfig = require("./tsconfig.json");

const APP_SRC = "builds/dev";
const TS_SRC = "process/ts";

gulp.task("html", () => {
    gulp.src(`${APP_SRC}/**/*.html`);
});

gulp.task("css", () => {
    gulp.src(`${APP_SRC}/**/*.css`);
});

gulp.task("copy", () => {
    return gulp
        .src([
            "node_modules/es6-shim/es6-shim.min.js",
            "node_modules/systemjs/dist/system-polyfills.js",
            "node_modules/angular2/bundles/angular2-polyfills.js",
            "node_modules/systemjs/dist/system.src.js",
            "node_modules/rxjs/bundles/Rx.js",
            "node_modules/angular2/bundles/angular2.dev.js"
        ])
        .pipe(gulp.dest(`${APP_SRC}/js/lib/angular2`));
});

gulp.task("ts", () => {
    return gulp
        .src(`${TS_SRC}/**/*.ts`)
        .pipe(sourcemaps.init())
        .pipe(ts(tsConfig.compilerOptions))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(`${APP_SRC}/js/`));
});

gulp.task("watch", () => {
    gulp.watch(`${TS_SRC}/**/*.ts`, ["ts"]);
    gulp.watch(`${APP_SRC}/css/*.css`, ["css"]);
    gulp.watch(`${APP_SRC}/**/*.html`, ["html"]);
});

gulp.task("server", () => {
    gulp.src(APP_SRC)
        .pipe(server({
            livereload: true,
            open: true
        }));
});

gulp.task("default", ["copy", "ts", "watch", "server"]);