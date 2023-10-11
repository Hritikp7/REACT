
const reactElement = {
    type:'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click to visit google'
}

function customRender(reactElement,mainContainer) {
    // const dom = document.createElement(reactElement.type)
    // dom.innerHTML = reactElement.children
    // dom.setAttribute("href",reactElement.props.href)
    // dom.setAttribute("target",reactElement.props.target)

    // mainContainer.appendChild(dom)
    const dom = document.createElement(reactElement.type)
    dom.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
       dom.setAttribute(prop,reactElement.props[prop]) 
        }
    mainContainer.appendChild(dom)
}


const mainContainer = document.getElementById("root")

customRender(reactElement,mainContainer)