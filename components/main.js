import Tree from './tree.js'

const menu = [
    { 
        id: 1, 
        name: "Desktops", 
        parent_id: 3 
    },
    { 
        id: 3, 
        name: "Computers", 
        parent_id: 8 
    },
    { 
        id: 4, 
        name: "Smartphones", 
        parent_id: 6 
    },
    { 
        id: 6, 
        name: "Portables", 
        parent_id: 3 
    },
    { 
        id: 7, 
        name: "Tablets", 
        parent_id: 6 
    },
    { 
        id: 8, 
        name: "Electronics", 
        parent_id: null 
    },
    { 
        id: 18, 
        name: "Camping", 
        parent_id: null 
    },
    { 
        id: 10, 
        name: "TV", 
        parent_id: 8 
    },
    { 
        id: 20, 
        name: '11 pol', 
        parent_id: 7 
    },
    { 
        id: 13, 
        name: "Remotes", 
        parent_id: 14 
    },
    { 
        id: 14, 
        name: "Accessories", 
        parent_id: 10 
    }
]

Tree(menu)