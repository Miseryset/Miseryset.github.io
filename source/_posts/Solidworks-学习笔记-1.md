---
title: Solidworks 学习笔记(1)
author: Miseryset
hide: false
date: 2024-10-20 09:57:11
updated: 2024-10-20 14:32
tags:
index_img:
banner_img:
---
### Solidworks 学习笔记(1)
&emsp;&emsp;不知道过了多久，又再一次写起笔记。这其中经历了太多，有时候真的挺无奈的。
&emsp;&emsp;记叙一下在 Solidworks 使用过程中的心得。
***
<!-- more -->
#### 背景
&emsp;&emsp;众所周知，使用 Solidworks 画焊件需要型材截面数据，但是软件本身提供的 **gb** 库太少，甚至无法使用。这就需要我们自行把焊件截面数据导入，通过种种方法在互联网上找到了免费的型材数据，但是有些截面数据不能用。
&emsp;&emsp;这时候，可以上某宝花那么一些小钱就能解决。但是某宝上面的东西也是良莠不齐。如果你也爱折腾，不妨试试这个方法。
* * *
#### 开始操作
##### 第一步
&emsp;&emsp;首先查一下想要的型材标准，这里就以圆钢为例（其他的槽钢，工字钢之类的我已经做好了），看图：
![1729396986416](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729396986416.webp)
* * *
##### 第二步
&emsp;&emsp;接着打开 Solidworks 新建一个零件，选一个面绘制草图，就是绘制圆钢的截面轮廓，看图：
![1729397316566](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729397316566.webp)
&emsp;&emsp;这个草图原点就是焊件轮廓的插入点，像什么型钢之类的可以适当调整一下。
&emsp;&emsp;把图上的尺寸标一下，确保完全定义，这里稍微修改一下草图尺寸名称，便于直观观察
![1729397639832](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729397639832.webp)
&emsp;&emsp;然后退出草图，我这里还没有保存，保存一下，这里选中草图然后保存为 **.sldlfp**
![1729397805246](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729397805246.webp)
![1729397969950](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729397969950.webp)
* * *
##### 第三步
&emsp;&emsp;然后使用 excel 表格插入一些配置，在窗口标题栏上插入，插入-表格-excel设计表
![1729398262620](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729398262620.webp)
&emsp;&emsp;这里，自动生成，然后打勾
![1729398397020](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729398397020.webp)
&emsp;&emsp;这里，选择哪些尺寸要被表格控制，圆钢就一个外径尺寸需要控制，如果要是其他截面，要控制的尺寸就比较多一些
![1729398550063](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729398550063.webp)
&emsp;&emsp;确认之后，表格就创建好了，表格第一列是配置名称，第二列就是被控制的参数。把默认的配置复制一份，随便改一下配置名称，然后点击表格外区域关闭表格
![1729398953692](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729398953692.webp)
&emsp;&emsp;可以看到配置已经被添加了
![1729399153324](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729399153324.webp)
&emsp;&emsp;切换到配置页面看看
![1729399163535](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729399163535.webp)
&emsp;&emsp;这个意思就是，使用不同的配置控制不同的轮廓大小，对于一些轮廓相同但是大小不同的零件很好用，展开表格，右键 excel 设计表，把表格打开
![1729399566143](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729399566143.webp)
&emsp;&emsp;这里在询问，添加哪些其他的参数，没有额外的参数就直接 **取消**
![1729399627648](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729399627648.webp)
&emsp;&emsp;表格打开之后就是这个样子
![1729399749349](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729399749349.webp)
&emsp;&emsp;操作一下表格，把配置都添加进去
![1729399976015](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729399976015.webp)
&emsp;&emsp;然后关闭表格窗口，配置都被添加进来
![1729400068947](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729400068947.webp)
&emsp;&emsp;在表格中把 默认0 配置删了，这里询问要不要在零件中删掉默认 配置0 ，**确认**
![1729400129545](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729400129545.webp)
&emsp;&emsp;往下拉，可以看到最初的默认配置还在
![1729400293530](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729400293530.webp)
&emsp;&emsp;随便激活其他的配置，然后右键**默认**配置，删除它
![1729400495233](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729400495233.webp)
&emsp;&emsp;到目前为止，一个拥有多配置的草图就完成了，当然它是激活哪个配置就是哪个配置的外径大小
* * *
##### 第四步
&emsp;&emsp;把上一步中的那些配置都拆分出来
&emsp;&emsp;先看一下保存选项，在 设置-性能-清除缓存配置数据 选项开启
![1729400795173](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729400795173.webp)
&emsp;&emsp;把设计树栏点到其他非配置界面（似乎能提高性能？）
![1729401418143](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729401418143.webp)
&emsp;&emsp;然后标题栏 工具-宏-新建
![1729401689693](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729401689693.webp)
&emsp;&emsp;选定保存位置之后，会自动打开宏编辑界面
![1729401851396](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729401851396.webp)
&emsp;&emsp;把原有的代码全部删掉，然后把下面的代码粘贴进去
```
Dim swApp As Object
Dim Part As Object
Dim boolstatus As Boolean
Dim longstatus As Long

Sub main()
    Set swApp = Application.SldWorks
    Set Part = swApp.ActiveDoc
    
    Dim myModelView As Object
    
    Set myModelView = Part.ActiveView
    myModelView.FrameState = swWindowState_e.swWindowMaximized

    ' 获取所有配置名称
    Dim configNames As Variant
    configNames = Part.GetConfigurationNames()
    
    Dim i As Integer
    For i = LBound(configNames) To UBound(configNames)
        ' 选择并显示当前配置
        boolstatus = Part.Extension.SelectByID2(configNames(i), "CONFIGURATIONS", 0, 0, 0, False, 0, Nothing, 0)
        boolstatus = Part.ShowConfiguration2(configNames(i))
        ' 生成保存路径
        Dim savePath As String
        savePath = "E:\sollidworks\库\焊件型材库\GB型材库\GBT 702-2004 热轧圆钢\" & configNames(i) & ".SLDLFP"
        
        ' 保存当前配置
        longstatus = Part.SaveAs3(savePath, 0, 2)
    Next i
End Sub
```
![1729402265351](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729402265351.webp)
&emsp;&emsp;把`savePath = "E:\sollidworks\库\焊件型材库\GB型材库\GBT 702-2004 热轧圆钢\" & configNames(i) & ".SLDLFP"`这里面的`E:\sollidworks\库\焊件型材库\GB型材库\GBT 702-2004 热轧圆钢`替换为要保存的路径，即为图中的高亮部分，然后点击运行
![1729402488829](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729402488829.webp)
&emsp;&emsp;经过一段时间的运行，导航到目录下，可以看到型材数据已经被拆分出来了
![1729402619839](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729402619839.webp)
&emsp;&emsp;这时候已经可以使用了，只不过还存在问题，原来的配置并没有被删掉，文件夹下面的所有文件都是原来那么多配置，只是被激活的配置不同
* * *
##### 第五步
&emsp;&emsp;删除未被激活的配置
&emsp;&emsp;关掉打开的文件和宏窗口，这时回到了主页，在主页标题栏 工具-宏-新建 ，再新建一个宏文件
![1729403085123](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729403085123.webp)
&emsp;&emsp;同样，删掉原有的代码，然后粘贴以下内容
```
Sub main()

    Dim swApp As Object
    Set swApp = Application.SldWorks

    ' 文件夹路径
    Dim folderPath As String
    folderPath = "E:\sollidworks\库\焊件型材库\GB型材库\GBT 702-2004 热轧圆钢\" ' 请根据实际情况修改路径

    ' 创建 FileSystemObject
    Dim fso As Object
    Set fso = CreateObject("Scripting.FileSystemObject")

    ' 获取文件夹对象
    Dim folder As Object
    Set folder = fso.GetFolder(folderPath)

    ' 遍历文件夹中的所有 SLDLFP 文件
    Dim file As Object
    For Each file In folder.Files
        If LCase(fso.GetExtensionName(file.Name)) = "sldlfp" Then ' 检查扩展名
            On Error GoTo Cleanup ' 错误处理
            
            ' 打开文档
            Dim Part As Object
            Dim longstatus As Long, longwarnings As Long

            Set Part = swApp.OpenDoc6(file.Path, 1, 0, "", longstatus, longwarnings)
            swApp.ActivateDoc2 file.Name, False, longstatus
            Set Part = swApp.ActiveDoc
            
            ' 窗口管理
            Dim myModelView As Object
            Set myModelView = Part.ActiveView
            myModelView.FrameLeft = 0
            myModelView.FrameTop = 0
            myModelView.FrameState = swWindowState_e.swWindowMaximized

            ' 获取当前激活的配置名称（与文件名相同）
            Dim activeConfigName As String
            activeConfigName = Part.GetTitle() ' 获取文件名作为激活配置名

            ' 获取所有配置名称
            Dim configNames As Variant
            Dim i As Integer
            Dim configCount As Long

            ' 获取配置数量
            configNames = Part.GetConfigurationNames() ' 获取所有配置名称
            configCount = UBound(configNames) + 1 ' 数组长度

            ' 选择并删除非激活配置
            For i = 0 To configCount - 1
                If configNames(i) <> activeConfigName Then ' 检查是否为激活配置
                    boolstatus = Part.Extension.SelectByID2(configNames(i), "CONFIGURATIONS", 0, 0, 0, True, 0, Nothing, 0)
                    boolstatus = Part.DeleteConfiguration2(configNames(i)) ' 删除选择的配置
                End If
            Next i

            ' 保存文档
            Dim swErrors As Long
            Dim swWarnings As Long
            boolstatus = Part.Save3(1, swErrors, swWarnings)
            Part.ClearSelection2 True

Cleanup:
            ' 确保关闭并清理资源
            If Not Part Is Nothing Then
                swApp.CloseDoc activeConfigName ' 使用文件名来关闭文档
                Set Part = Nothing
            End If
        End If
    Next file

    ' 清理资源
    Set folder = Nothing
    Set fso = Nothing
    Set swApp = Nothing

End Sub
```
![1729403346986](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729403346986.webp)
&emsp;&emsp;把`folderPath = "E:\sollidworks\库\焊件型材库\GB型材库\GBT 702-2004 热轧圆钢\"`这里面的`E:\sollidworks\库\焊件型材库\GB型材库\GBT 702-2004 热轧圆钢`替换为刚刚保存的路径，即为图中的高亮部分，然后点击运行
&emsp;&emsp;运行结束后，到文件夹下查看，可以看到文件明显变小了许多
![1729403623383](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729403623383.webp)
&emsp;&emsp;随便打开一个看看
![1729403807449](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729403807449.webp)
&emsp;&emsp;切换到配置树，其他配置都被删掉了，excel设计表亦是如此
&emsp;&emsp;把文件夹添加到焊件库，绘制焊件试试
![1729403993125](https://cdn.jsdelivr.net/gh/Miseryset/PicX@master/20241020/1729403993125.webp)
&emsp;&emsp;这样就完成了对焊件库的自制与使用
* * *
#### 完结
&emsp;&emsp;其实还有一些问题，例如第二个宏程序在使用过程中会造成内存回收不及时造成内存泄漏，不知道有无大神优化一下程序。另外，本文仅作参考，本文具有时效性，或许有更好用的工具，只是没有被发现而已。