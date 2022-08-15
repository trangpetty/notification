const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document) 

const apps = {
    customs: [
        {
            id: 1,
            name: 'Trang le',
            age: 21
        },
        {
            id: 2,
            name: 'Ngoc Nghia',
            age: 21
        },
        {
            id: 3,
            name: 'Hai Yen',
            age: 21
        },
        {
            id: 4,
            name: 'Truong Luan',
            age: 21
        },
        {
            id: 5,
            name: 'Minh Khanh',
            age: 21
        }
    ],
    render: function() {
        const htmls = this.customs.map(custom => {
            return `
                <li class="list-group-item item-${custom.id}">
                    <i class="fas fa-street-view" style="margin-right: 4px;"></i>
                    Id: ${custom.id} | Name: ${custom.name} | Age: ${custom.age}
                    <button class="btn btn-danger btn-choose">Từ chối</button>
                    <button class="btn btn-choose btn-find" style="background-color: #ccc;">Tìm vị trí</button>
                </li> 
            `
        })
        $('.list-group').innerHTML = htmls.join('')

    },
    start: function () {
        this.render()
        this.handleEvents()
    }
}

apps.start()