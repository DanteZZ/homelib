export default {
    book: {
        open: false,
        loading: false,
        status: null,
        data: {
            id: null,
            author: null,
            name: null,
            publisher: null,
            year: null,
            isbn: null,
            buy_date: null,
            language: null,
            pages: null,
            price : null,
            image: null,
            cover: null,
            category: null,
            rate: null,
            readed: null,
            read_date: null,
            serie: null,
            ordered: null,
            handovered: null,
        }
    },
    category: {
        status: null,
        open: false,
        loading: false,
        data: {
            id: null,
            name: null,
            parent: null
        }
    },
    cover: {
        status: null,
        open: false,
        loading: false,
        data: {
            id: null,
            name: null,
        }
    },
    friend: {
        status: null,
        open: false,
        loading: false,
        data: {
            id: null,
            name: null,
        }
    },
    language: {
        status: null,
        open: false,
        loading: false,
        data: {
            id: null,
            name: null,
            icon: null
        }
    },
    publisher: {
        status: null,
        open: false,
        loading: false,
        data: {
            id: null,
            name: null,
            image: null
        }
    },
    review: {
        status: null,
        open: false,
        loading: false,
        data: {
            id: null,
            book: null,
            text: null,
            page: null
        }
    },
    handover: {
        status: null,
        open: false,
        loading: false,
        data: {
            id: null,
            book: null,
            to: null,
            date: null,
            return_date: null,
            fact_date: null,
            handovered: null
        }
    },
    external: {
        open: false,
        loading: false,
        list:[]
    }
}