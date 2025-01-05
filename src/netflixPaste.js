// paste into browser console in Netflix (make sure to scroll down until all Watch List titles are loaded)
const elems = Array.from(document.querySelectorAll('.title-card'))
let data = []
elems.forEach((elem, index) => {
    let link = elem.getElementsByTagName('a')[0]
    console.log(link.ariaLabel)

    data.push(link.ariaLabel)
})
console.log(data)