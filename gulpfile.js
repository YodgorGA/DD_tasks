
let project_folder = 'dist';
let source_folder = '#src';

const gulp = require('gulp'),
    browsersync = require('browser-sync').create(),
    scss = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    groupmedia = require('gulp-group-css-media-queries'),
    cleancss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    del = require('del'),
    fileinclude = require('gulp-file-include');


let path={
    build:{
        html:project_folder+"/",
        css: project_folder+"/css",
        js: project_folder+"/js",
        img: project_folder+"/img",
        fonts: project_folder+"/fonts",
    },
    src:{
        html:[source_folder+"/*.html", "!"+source_folder + '/_*.html'],
        css: source_folder+"/scss/styles.scss",
        js: [source_folder+"/js/srcipt.js", '!' + source_folder +'/_*.js'],
        img: source_folder+"/img/**/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: source_folder+"/fonts/*.ttf",
    },
    watch:{
        html:source_folder+"/**/*.html",
        css: source_folder+"/scss/**/*.scss",
        js: source_folder+"/js/**.js",
        img: source_folder+"/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: source_folder+"/fonts/*.ttf",
    },
    clean:'./'+ project_folder + '/'
};


function watchFiles(params)
{
    gulp.watch([path.watch.html],html);
    gulp.watch([path.watch.css],css);
    gulp.watch([path.watch.js],js);
    gulp.watch([path.watch.img],images);
}
/*Подключение библиотек */


function browserSync(params) {
    browsersync.init({
        server:{
            baseDir:'./'+ project_folder + '/'
        },
        port:3000,
        notify:true
    });
}
function clean(params)
{
    return del(path.clean);
}

function html()
{
    return gulp.src(path.src.html)
        .pipe(fileinclude())
        .pipe( gulp.dest(path.build.html))
        .pipe(browsersync.stream());
}

function images()
{
    return  gulp.src(path.src.img)
        .pipe( gulp.dest(path.build.img))
        .pipe(browsersync.stream());
}

/*Последовательность сохранения css файла в папку dist */
function css()
{
    return  gulp.src(path.src.css)
    .pipe(
        scss({
            outputStyle:'expanded'
        })
    )
    .pipe(
        groupmedia()
    )
    .pipe(
        autoprefixer({
            overrideBrowserslist:['last 5 versions'],
            cascade:true,
        })
    )
    .pipe( gulp.dest(path.build.css))
    .pipe(cleancss())
    .pipe(rename({
        extname:'.min.css'
    }))
    .pipe( gulp.dest(path.build.css))
    .pipe(browsersync.stream());
}

function js()
{
    return  gulp.src('#src/js/script.js')
    .pipe(fileinclude())
    .pipe( gulp.dest(path.build.js))
    .pipe(browsersync.stream());
}

/*Алгоритм работы галпа */
let build = gulp.series(clean,gulp.parallel(html,css,images,js));
let watch = gulp.parallel(build,watchFiles, browserSync);


exports.js = js;
exports.css = css;
exports.html = html;
exports.images = images;
exports.build = build;
exports.watch = watch;
exports.default = watch;


