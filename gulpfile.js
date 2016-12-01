const gulp = require("gulp");
const gutil = require("gulp-util");
const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const ngAnnotate = require("gulp-ng-annotate");
const cleanCSS = require("gulp-clean-css");
const htmlmin = require("gulp-htmlmin");
const flatten = require("gulp-flatten");
const stripDebug = require("gulp-strip-debug"); //eslint-disable-line
const deployCdn = require("gulp-deploy-azure-cdn");
const imageResize = require("gulp-image-resize");
const imagemin = require("gulp-imagemin");
const changed = require("gulp-changed");
const rename = require("gulp-rename");
const zip = require("gulp-zip");
const babel = require("gulp-babel");

const jsPath = "src";
const cssPath = "styles";
const deployPath = "deploy";

gulp.task("js", () => {
  gulp.src([`${jsPath}/*.js`, `${jsPath}/**/*.js`])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ["latest"]
    }))
    .pipe(concat("all.min.js", {newLine: ";"}))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(`${deployPath}/JS`));
});

gulp.task("css", () => {
  gulp.src(`${cssPath}/*.css`)
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(`${deployPath}/CSS`));
});

gulp.task("partials", () => {
  gulp.src(`${jsPath}/directives/**/*.html`)
    .pipe(flatten())
    .pipe(htmlmin())
    .pipe(gulp.dest(`${deployPath}/partials`));
});

gulp.task("upload-app-to-azure", () => {
  gulp.src([`${deployPath}/JS/*.js`, `${deployPath}/CSS/*.css`, `${deployPath}/partials/*.html`])
    .pipe(flatten())
    .pipe(deployCdn({
      containerName: "", // container name in blob
      serviceOptions: ["", ""], //storage name, encoded key
      zip: false, // gzip files if they become smaller after zipping, content-encoding header will change if file is zipped
      deleteExistingBlobs: false, // true means recursively deleting anything under folder
      concurrentUploadThreads: 10, // number of concurrent uploads, choose best for your network condition
      metadata: {
        cacheControl: "public, max-age=31530000", // cache in browser
        cacheControlHeader: "public, max-age=31530000" // cache in azure CDN. As this data does not change, we set it to 1 year
      },
      testRun: false // test run - means no blobs will be actually deleted or uploaded, see log messages for details
    }))
    .on("error", gutil.log);
});

gulp.task("default", ["js", "css", "partials", "upload-app-to-azure"]);

gulp.task("resize", () => {
  gulp.src(["frogConnected/Images/Profile Photos/**/*.jpg", "frogConnected/Images/Profile Photos/**/*.png"])
    .pipe(flatten())
    .pipe(rename((path) => {
      path.basename = path.basename.toLowerCase();
    }))
    .pipe(changed(`${deployPath}/images`))
    .pipe(imageResize({
      width: 340,
      height: 340,
      quality: 1,
      crop: true,
      upscale: false,
      format: "jpg"
    }))
    .pipe(imagemin())
    .pipe(gulp.dest(`${deployPath}/images`));
});

gulp.task("zip", () => {
  gulp.src([""])
    .pipe(zip("")); //zip name
});
