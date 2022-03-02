$("#dashboard").fadeOut()
$("#addProduct").fadeOut()
$("#viewProduct").fadeOut()
$("#addUser").fadeOut()
$("#viewUser").fadeOut()
function start() {
    AOS.init()
}
function Img(size = "200x200", query) {
    return `https://source.unsplash.com/${size}/${query}`
}
$('.nav_link').click(function (e) {
    switchTabs($(this).attr("data"))
});


function switchTabs(id) {
    switch (id) {
        case "addProduct":
            $("#addProduct").fadeIn()
            $("#dashboard").fadeOut()
            $("#viewProduct").fadeOut()
            $("#addUser").fadeOut()
            $("#viewUser").fadeOut()
            break
        case "dashboard":
            $("#dashboard").fadeIn()
            $("#addProduct").fadeOut()
            $("#viewProduct").fadeOut()
            $("#addUser").fadeOut()
            $("#viewUser").fadeOut()
            break
        case "addUser":
            $("#dashboard").fadeOut()
            $("#addProduct").fadeOut()
            $("#viewProduct").fadeOut()
            $("#addUser").fadeIn()
            $("#viewUser").fadeOut()
            break
        case "viewUser":
            $("#dashboard").fadeOut()
            $("#addProduct").fadeOut()
            $("#viewProduct").fadeOut()
            $("#addUser").fadeOut()
            $("#viewUser").fadeIn()
            break
        case "addProduct":
            $("#dashboard").fadeOut()
            $("#addProduct").fadeIn()
            $("#viewProduct").fadeOut()
            $("#addUser").fadeOut()
            $("#viewUser").fadeOut()
            break
        case "viewProduct":
            $("#dashboard").fadeOut()
            $("#addProduct").fadeOut()
            $("#viewProduct").fadeIn()
            $("#addUser").fadeOut()
            $("#viewUser").fadeOut()
            break
        default:
            alert(id)
            break
    }
}