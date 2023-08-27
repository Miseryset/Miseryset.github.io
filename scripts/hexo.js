//收藏页样式注入
hexo.extend.injector.register('head_end', '<link rel="stylesheet" href="/collection/css/tool.css">', 'collection');
hexo.extend.injector.register('head_end', '<link rel="stylesheet" href="/collection/css/li-bgc-color.css">', 'collection');

//音乐播放暂停注入
hexo.extend.injector.register('body_begin', '<script src="/js/pauseaudio.js"></script>', 'post');
//自动播放注入
//hexo.extend.injector.register('body_begin', '<script src="/js/autoplay.js"></script>', 'about');
//hexo.extend.injector.register('body_begin', '<audio id="music" autoplay loop preload="auto"><source src="https://static-res.qq.com/static-res/pandian2022/home-bgm-1.mp3" type="audio/mpeg"></audio>', 'about');

// //随机颜色注入
// hexo.extend.injector.register('head_begin', '<script src="/js/switch_color.js"></script>', 'default');
// //文章注入时效性提示
// hexo.extend.injector.register('body_begin', '<script src="/js/available.js"></script>', 'post');
// //樱花飘落注入
// hexo.extend.injector.register('head_begin', '<script src="https://npm.elemecdn.com/tzy-blog/lib/js/other/sakura.js"></script>', 'default');
// //雪花飘落注入
// //hexo.extend.injector.register('head_begin', '<script src="https://cdn.jsdelivr.net/gh/bynotes/texiao/source/js/xiaoxuehua.js"></script>', 'default');


// hexo.extend.injector.register('head_begin', '<link rel="stylesheet" href="/css/global.css">', 'default');
// hexo.extend.injector.register('head_begin', '<link rel="stylesheet" href="/css/iconfont.css">', 'default');
// hexo.extend.injector.register('head_begin', '<link rel="stylesheet" href="/css/loading.css">', 'default');
// hexo.extend.injector.register('head_begin', '<link rel="stylesheet" href="/css/footer_icon_animation.css">', 'default');
// hexo.extend.injector.register('head_begin', '<link rel="stylesheet" href="/css/color.css">', 'default');
// hexo.extend.injector.register('head_begin', '<link rel="stylesheet" href="/css/gradient_other.css">', 'default');
// hexo.extend.injector.register('head_begin', '<link rel="stylesheet" href="/css/gradient_dynamic.css">', 'default');
// hexo.extend.injector.register('head_begin', '<link rel="stylesheet" href="/css/maccode.css">', 'default');
// hexo.extend.injector.register('head_begin', '<link rel="stylesheet" href="/css/scrollbar.css">', 'default');

