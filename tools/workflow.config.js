var yargs_1 = require('yargs');
var PORT = yargs_1.argv['port'] || 5555;
exports.PORT = PORT;
var LIVE_RELOAD_PORT = yargs_1.argv['reload-port'] || 4002;
exports.LIVE_RELOAD_PORT = LIVE_RELOAD_PORT;
var APP_BASE = yargs_1.argv['base'] || '/';
exports.APP_BASE = APP_BASE;
var APP_SRC = 'app';
exports.APP_SRC = APP_SRC;
var APP_DEST = 'dist';
exports.APP_DEST = APP_DEST;
var ANGULAR_BUNDLES = './node_modules/angular2/bundles';
exports.ANGULAR_BUNDLES = ANGULAR_BUNDLES;
var PATH = {
    dest: {
        all: APP_DEST,
        dev: {
            all: APP_DEST + '/dev',
            lib: APP_DEST + '/dev/lib'
        },
        test: 'test',
        prod: {
            all: APP_DEST + '/prod',
            lib: APP_DEST + '/prod/lib'
        }
    },
    src: {
        all: APP_SRC,
        lib_inject: [
            require.resolve('es6-shim/es6-shim.min.js'),
            require.resolve('es6-shim/es6-shim.map'),
            require.resolve('reflect-metadata/Reflect.js'),
            require.resolve('reflect-metadata/Reflect.js.map'),
            require.resolve('systemjs/dist/system.src.js'),
            APP_SRC + '/system.config.js',
            ANGULAR_BUNDLES + '/angular2.dev.js',
            ANGULAR_BUNDLES + '/router.dev.js',
            ANGULAR_BUNDLES + '/http.dev.js'
        ],
        lib_copy_only: [
            require.resolve('systemjs/dist/system-polyfills.js'),
            require.resolve('systemjs/dist/system-polyfills.js.map')
        ]
    }
};
exports.PATH = PATH;
//# sourceMappingURL=workflow.config.js.map