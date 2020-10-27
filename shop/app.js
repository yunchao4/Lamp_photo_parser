//初始化后端交互组件（后端接口需要验证你有无权限访问）


//获取当前登录用户信息，如果未登录为null


//传入要跳转到哪一页:*.html
function toPage(targetPage) {
    open(targetPage)
}

function toFolderPage(Folder,targetPage){
    openByFolder(Folder,targetPage)
}

//利用location打开对应页面
function open(targetPage) {
    location.href = '../' + targetPage + '/' + targetPage + '.html'
}

function openByFolder(Folder, targetPage){
    location.href = '../../' + Folder + '/' + targetPage + '/' + targetPage + '.html'
}

//返回上一页
function ret() {
    history.go(-1)
}

//刷新当前页面
function refresh() {
    location.reload();
}

//关闭当前页面
function close() {
    window.close()
}