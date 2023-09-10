---
title: ShortX随机壁纸实现
author: Miseryset
hide: false
date: 2023-09-10 18:37:54
updated: 2023-09-10 18:41:54
tags:
index_img:
banner_img:
excerpt: 利用ShortX shell脚本配合magick裁剪图片设置壁纸
---
### ShortX随机壁纸实现
&emsp;&emsp;利用ShortX shell脚本配合magick裁剪图片设置壁纸
#### 关于ShortX
&emsp;&emsp;[ShortX是什么](https://shortx-repo.github.io/ShortX-Pages/zh/2022/12/01/shortx-intro.html)
#### 随机壁纸实现
&emsp;&emsp;使用shell脚本返回目录中随机图片路径
```bash
_path="globalVarOf$_wallpaper_path"

cd "$_path"

random_filename=$(find . -type f \( -name "*.jpg" -o -name "*.JPG" -o -name "*.png" -o -name "*.PNG" \) | shuf -n 1)
random_filename="${random_filename#./}"

echo "$_path/$random_filename"
```
&emsp;&emsp;前提是需要一个全局变量`_wallpaper_path`方便修改壁纸路径
- 将全局变量的值传入`_path`
- 进入目录
- 在目录下查找后缀为jpg或png的文件并且随机返回一项
- 然后去掉文件名前的`./`
#### 裁剪实现
&emsp;&emsp;图片大小不一怎么办？使用[ImageMagick](https://imagemagick.org)来处理
##### 关于ImageMagick
&emsp;&emsp;预编译二进制文件[在此](https://github.com/MolotovCherry/Android-ImageMagick7)，我们只需要把二进制文件和库文件复制到手机内部设置好权限就可以使用，还可以做一个magisk模块挂载，模块的结构就像这样
```text
──system
  └bin
    └magick
  └lib64
    └libc++_shared.so
    └libomp.so
```
设置权限755，输入即可
##### shell脚本裁剪
```bash
magick "${random_filename}" -resize 1080x "/data/adb/wallpaper.jpg"

wallpaper_height=$(magick identify -format "%w" "/data/adb/wallpaper.jpg")

if [ "$wallpaper_height" -ge 2340 ]; then
  magick "/data/adb/wallpaper.jpg" -gravity center -crop 1080x2340+0+0 +repage "/data/adb/wallpaper1.jpg"
else
  magick "${random_filename}" -resize x2340 "/data/adb/wallpaper2.jpg"
  magick "/data/adb/wallpaper2.jpg" -blur 0x6 "/data/adb/wallpaper3.jpg"
  magick convert "/data/adb/wallpaper3.jpg" "/data/adb/wallpaper.jpg" -gravity center -composite "/data/adb/wallpaper1.jpg"
  magick convert "/data/adb/wallpaper1.jpg" -gravity center -crop 1080x2340+0+0 +repage "/data/adb/wallpaper1.jpg"
fi
```
- 重设图片宽度1080，保证宽高比，输出文件`/data/adb/wallpaper.jpg`
- 判断重设宽度后图片的高度
 1. 若高度大于2340，就居中裁剪1080*2340
 2. 若高度小于2340，就依照2340高度再重设一张`/data/adb/wallpaper2.jpg`，并给它加上模糊，输出为`/data/adb/wallpaper3.jpg`，然后把模糊的作为背景，把宽度为1080的依照中心锚点合并，最后再切出1080*2340，输出为`/data/adb/wallpaper1.jpg`

### 设置壁纸
&emsp;&emsp;直接使用ShortX内部动作设置壁纸实现即可，路径`/data/adb/wallpaper.jpg`
&emsp;&emsp;不要忘了日后删除`/data/adb`下面的几张图片呐，当然也可以输出到其他位置