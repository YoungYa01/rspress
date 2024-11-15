# 目录树-treer

[treer - npm (npmjs.com)](https://www.npmjs.com/package/treer)

## 全局安装

```shell
npm install treer -g
```

## 查看版本：

```shell
treer --version
```

## 查看目录树

```shell
treer
```

如果在一个比较大的前端项目里，因为存在`node_modules`的原因，不要直接使用该命令，不然会生成一棵比较大的树，所以可以使用下面的命令

### 忽略目录或文件查看目录树

```shell
treer -i "/^regex$/"
```

## 查看指定路径的目录树

```shell
查看指定路径的目录树
```

## 导出当前目录的目录树到特定路径下文件

```
treer -e <导出路径>
```

## 使用举例

进入目录，执行命令

```shell
treer -e ./tree.txt -i node_modules
```

eg：

```shell title="tree"
├─src	
| ├─App.vue
| ├─main.js
| ├─permission.js
| ├─settings.js
| ├─tree.md
| ├─views
| |   ├─index.vue
| |   ├─index_v1.vue
| |   ├─login.vue
| |   ├─redirect.vue
| |   ├─register.vue
| |   ├─tool
| |   |  ├─swagger
| |   |  |    └index.vue
| |   |  ├─gen
| |   |  |  ├─basicInfoForm.vue
| |   |  |  ├─editTable.vue
| |   |  |  ├─genInfoForm.vue
| |   |  |  ├─importTable.vue
| |   |  |  └index.vue
| |   |  ├─build
| |   |  |   ├─CodeTypeDialog.vue
| |   |  |   ├─DraggableItem.vue
| |   |  |   ├─IconsDialog.vue
| |   |  |   ├─index.vue
| |   |  |   ├─RightPanel.vue
| |   |  |   └TreeNodeDialog.vue
| |   ├─system
| |   |   ├─user
| |   |   |  ├─authRole.vue
| |   |   |  ├─index.vue
| |   |   |  ├─profile
| |   |   |  |    ├─index.vue
| |   |   |  |    ├─resetPwd.vue
| |   |   |  |    ├─userAvatar.vue
| |   |   |  |    └userInfo.vue
| |   |   ├─role
| |   |   |  ├─authUser.vue
| |   |   |  ├─index.vue
| |   |   |  └selectUser.vue
| |   |   ├─post
| |   |   |  └index.vue
| |   |   ├─notice
| |   |   |   └index.vue
| |   |   ├─menu
| |   |   |  └index.vue
| |   |   ├─dict
| |   |   |  ├─data.vue
| |   |   |  └index.vue
| |   |   ├─dept
| |   |   |  └index.vue
| |   |   ├─config
| |   |   |   └index.vue
| |   ├─site
| |   |  ├─sonsitemanage
| |   |  |       └index.vue
| |   |  ├─slide
| |   |  |   └index.vue
| |   |  ├─pic
| |   |  |  └index.vue
| |   |  ├─news
| |   |  |  └index.vue
| |   |  ├─navi
| |   |  |  └index.vue
| |   |  ├─link
| |   |  |  └index.vue
| |   |  ├─file
| |   |  |  └index.vue
| |   |  ├─about
| |   |  |   └index.vue
| |   ├─monitor
| |   |    ├─server
| |   |    |   └index.vue
| |   |    ├─operlog
| |   |    |    └index.vue
| |   |    ├─online
| |   |    |   └index.vue
| |   |    ├─logininfor
| |   |    |     └index.vue
| |   |    ├─job
| |   |    |  ├─index.vue
| |   |    |  └log.vue
| |   |    ├─druid
| |   |    |   └index.vue
| |   |    ├─cache
| |   |    |   ├─index.vue
| |   |    |   └list.vue
| |   ├─label-management
| |   |        ├─label
| |   |        |   └index.vue
| |   ├─error
| |   |   ├─401.vue
| |   |   └404.vue
| |   ├─dashboard
| |   |     ├─BarChart.vue
| |   |     ├─LineChart.vue
| |   |     ├─PanelGroup.vue
| |   |     ├─PieChart.vue
| |   |     ├─RaddarChart.vue
| |   |     ├─mixins
| |   |     |   └resize.js
| |   ├─components
| |   |     ├─TreeTable
| |   |     |     └index.vue
| |   |     ├─icons
| |   |     |   ├─element-icons.js
| |   |     |   ├─index.vue
| |   |     |   └svg-icons.js
| ├─utils
| |   ├─auth.js
| |   ├─errorCode.js
| |   ├─index.js
| |   ├─jsencrypt.js
| |   ├─permission.js
| |   ├─request.js
| |   ├─ruoyi.js
| |   ├─scroll-to.js
| |   ├─validate.js
| |   ├─generator
| |   |     ├─config.js
| |   |     ├─css.js
| |   |     ├─drawingDefault.js
| |   |     ├─html.js
| |   |     ├─icon.json
| |   |     ├─js.js
| |   |     └render.js
| |   ├─dict
| |   |  ├─Dict.js
| |   |  ├─DictConverter.js
| |   |  ├─DictData.js
| |   |  ├─DictMeta.js
| |   |  ├─DictOptions.js
| |   |  └index.js
| ├─store
| |   ├─getters.js
| |   ├─index.js
| |   ├─modules
| |   |    ├─app.js
| |   |    ├─dict.js
| |   |    ├─permission.js
| |   |    ├─settings.js
| |   |    ├─tagsView.js
| |   |    └user.js
| ├─router
| |   └index.js
| ├─plugins
| |    ├─auth.js
| |    ├─cache.js
| |    ├─download.js
| |    ├─index.js
| |    ├─modal.js
| |    └tab.js
| ├─layout
| |   ├─index.vue
| |   ├─mixin
| |   |   └ResizeHandler.js
| |   ├─components
| |   |     ├─AppMain.vue
| |   |     ├─index.js
| |   |     ├─Navbar.vue
| |   |     ├─TagsView
| |   |     |    ├─index.vue
| |   |     |    └ScrollPane.vue
| |   |     ├─Sidebar
| |   |     |    ├─FixiOSBug.js
| |   |     |    ├─index.vue
| |   |     |    ├─Item.vue
| |   |     |    ├─Link.vue
| |   |     |    ├─Logo.vue
| |   |     |    └SidebarItem.vue
| |   |     ├─Settings
| |   |     |    └index.vue
| |   |     ├─InnerLink
| |   |     |     └index.vue
| |   |     ├─IframeToggle
| |   |     |      └index.vue
| ├─directive
| |     ├─index.js
| |     ├─permission
| |     |     ├─hasPermi.js
| |     |     └hasRole.js
| |     ├─module
| |     |   └clipboard.js
| |     ├─dialog
| |     |   ├─drag.js
| |     |   ├─dragHeight.js
| |     |   └dragWidth.js
| ├─components
| |     ├─TopNav
| |     |   └index.vue
| |     ├─ThemePicker
| |     |      └index.vue
| |     ├─SvgIcon
| |     |    └index.vue
| |     ├─SizeSelect
| |     |     └index.vue
| |     ├─Screenfull
| |     |     └index.vue
| |     ├─RuoYi
| |     |   ├─Git
| |     |   |  └index.vue
| |     |   ├─Doc
| |     |   |  └index.vue
| |     ├─RightToolbar
| |     |      └index.vue
| |     ├─RightPanel
| |     |     └index.vue
| |     ├─ParentView
| |     |     └index.vue
| |     ├─PanThumb
| |     |    └index.vue
| |     ├─Pagination
| |     |     └index.vue
| |     ├─ImageUpload
| |     |      └index.vue
| |     ├─ImagePreview
| |     |      └index.vue
| |     ├─iFrame
| |     |   └index.vue
| |     ├─IconSelect
| |     |     ├─index.vue
| |     |     └requireIcons.js
| |     ├─HeaderSearch
| |     |      └index.vue
| |     ├─Hamburger
| |     |     └index.vue
| |     ├─FileUpload
| |     |     └index.vue
| |     ├─Editor
| |     |   └index.vue
| |     ├─DictTag
| |     |    └index.vue
| |     ├─DictData
| |     |    └index.js
| |     ├─Crontab
| |     |    ├─day.vue
| |     |    ├─hour.vue
| |     |    ├─index.vue
| |     |    ├─min.vue
| |     |    ├─month.vue
| |     |    ├─result.vue
| |     |    ├─second.vue
| |     |    ├─week.vue
| |     |    └year.vue
| |     ├─Breadcrumb
| |     |     └index.vue
| ├─api
| |  ├─login.js
| |  ├─menu.js
| |  ├─tool
| |  |  └gen.js
| |  ├─system
| |  |   ├─config.js
| |  |   ├─dept.js
| |  |   ├─menu.js
| |  |   ├─notice.js
| |  |   ├─post.js
| |  |   ├─role.js
| |  |   ├─user.js
| |  |   ├─dict
| |  |   |  ├─data.js
| |  |   |  └type.js
| |  ├─site
| |  |  ├─about.js
| |  |  ├─combo.js
| |  |  ├─file.js
| |  |  ├─link.js
| |  |  ├─navi.js
| |  |  ├─news.js
| |  |  ├─pic.js
| |  |  ├─slide.js
| |  |  └sonsitemanage.js
| |  ├─monitor
| |  |    ├─cache.js
| |  |    ├─job.js
| |  |    ├─jobLog.js
| |  |    ├─logininfor.js
| |  |    ├─online.js
| |  |    ├─operlog.js
| |  |    └server.js
| |  ├─firmManagement
| |  |       └label.js
```

## windows下的tree命令

```shell
tree [drive][path] [/F] [/A]
#/f 显示所有目录及目录下的所有文件，省略时，只显示目录，不显示目录下的文件
#/a 使用ASCII字符，而不使用扩展字符
```

### 目录下的目录及文件目录树输出到文件

```shell
# 举例
tree D:\nodejs /f > D:result.txt
```

```shell title="目录树"
├─bin
├─build
├─public
│  └─html
└─src
    ├─api
    │  ├─monitor
    │  ├─site
    │  ├─system
    │  │  └─dict
    │  └─tool
    ├─assets
    │  ├─401_images
    │  ├─404_images
    │  ├─icons
    │  │  └─svg
    │  ├─images
    │  ├─logo
    │  └─styles
    ├─components
    │  ├─Breadcrumb
    │  ├─Crontab
    │  ├─DictData
    │  ├─DictTag
    │  ├─Editor
    │  ├─FileUpload
    │  ├─Hamburger
    │  ├─HeaderSearch
    │  ├─IconSelect
    │  ├─iFrame
    │  ├─ImagePreview
    │  ├─ImageUpload
    │  ├─Pagination
    │  ├─PanThumb
    │  ├─ParentView
    │  ├─RightPanel
    │  ├─RightToolbar
    │  ├─RuoYi
    │  │  ├─Doc
    │  │  └─Git
    │  ├─Screenfull
    │  ├─SizeSelect
    │  ├─SvgIcon
    │  ├─ThemePicker
    │  └─TopNav
    ├─directive
    │  ├─dialog
    │  ├─module
    │  └─permission
    ├─layout
    │  ├─components
    │  │  ├─IframeToggle
    │  │  ├─InnerLink
    │  │  ├─Settings
    │  │  ├─Sidebar
    │  │  └─TagsView
    │  └─mixin
    ├─plugins
    ├─router
    ├─store
    │  └─modules
    ├─utils
    │  ├─dict
    │  └─generator
    └─views
        ├─components
        │  └─icons
        ├─dashboard
        │  └─mixins
        ├─error
        ├─monitor
        │  ├─cache
        │  ├─druid
        │  ├─job
        │  ├─logininfor
        │  ├─online
        │  ├─operlog
        │  └─server
        ├─site
        │  ├─about
        │  ├─file
        │  ├─link
        │  ├─navi
        │  ├─news
        │  ├─pic
        │  ├─slide
        │  └─sonsitemanage
        ├─system
        │  ├─config
        │  ├─dept
        │  ├─dict
        │  ├─menu
        │  ├─notice
        │  ├─post
        │  ├─role
        │  └─user
        │      └─profile
        └─tool
            ├─build
            ├─gen
            └─swagger
```

