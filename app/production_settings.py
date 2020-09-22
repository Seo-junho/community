from .settings import *

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "app/assets"),
]

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'bundles/',
        'STATS_FILE': os.path.join(BASE_DIR, 'app/webpack-stats.prod.json'),
    }
}
