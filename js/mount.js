let mount = () => {
    let data = new Date()
    let y = data.getFullYear()
    let m = data.getMonth()
    let d = data.getDay()
    let h = data.getHours()
    let f = data.getMinutes()
    let s = data.getSeconds()
    let datas = y + '年' + m + '月' + d + '日' + h + '时' + f + '分' + s + '秒'
    document.getElementById('data').innerText = datas
}
mount();
let timer = window.setInterval(() => {
    mount()
}, 1000);