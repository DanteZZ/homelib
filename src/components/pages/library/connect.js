const connector = ({ main: { books, categories, publishers, addictions:{series,authors} } }) => 
    ({
        allbooks: books,
        categories,
        publishers,
        series,
        authors,
    })
export default connector