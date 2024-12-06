//收藏页样式注入
hexo.extend.injector.register('head_end', '<link rel="stylesheet" href="/collection/css/tool.css">', 'collection');
hexo.extend.injector.register('head_end', '<link rel="stylesheet" href="/collection/css/li-bgc-color.css">', 'collection');

//音乐播放暂停注入
hexo.extend.injector.register('body_end', '<script src="/js/pauseaudio.js"></script>', 'post');
//自动播放注入
//hexo.extend.injector.register('body_begin', '<script src="/js/autoplay.js"></script>', 'about');
//hexo.extend.injector.register('body_begin', '<audio id="music" autoplay loop preload="auto"><source src="https://static-res.qq.com/static-res/pandian2022/home-bgm-1.mp3" type="audio/mpeg"></audio>', 'about');
