export default function(data) {

    // pega a tag principal que irá receber o menu.
    const tree = document.querySelector('nav#tree')

    // filtrar todos os itens do menu que não tenha filhos.
    const firstLevel = data.filter(item => !item.parent_id) 

    // recebe toda a arvore de elementos.
    const menu = document.createElement('ul')

    tree.appendChild(menu)
    
    // retorna um novo array com li's.
    const getFirstLis = firstLevel.map(buildTree)

    // adiciona li's ao menu.
    getFirstLis.forEach(li => menu.append(li))

    
    function buildTree(item) {
        const li = document.createElement('li')

        // cria o primeiro elemento.
        li.innerHTML = item.name

        // filtra os filhos.
        const children = data.filter(child => child.parent_id === item.id);

        if(children.length > 0) {

            // adiciona um click aos parents.
            li.addEventListener('click', event => {
                event.stopPropagation()
                event.target.classList.toggle('open')
            })

            // adiciona uma classe indentificado que tem filhos.

            li.classList.add('has-children')

            // constroi o sub menu.
            const subMenu = document.createElement('ul')
            children.map(buildTree).forEach(li => subMenu.append(li))

            li.append(subMenu)
        }
        
        return li

    }

}
