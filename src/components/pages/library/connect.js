const connector = ({ main: { books, categories, publishers, addictions:{series,authors} } }) => 
    ({
        books,
        categories,
        publishers,
        series,
        authors,
    })
export default connector