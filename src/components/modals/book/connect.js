const connector = ({ main: {publishers, languages, categories, covers, addictions:{authors,series}}, modals: {book:{ status, open, loading, data }} }) => 
    ({
        data,
        loading,
        open,
        status,
        
        publishers,
        languages,
        categories,
        covers,
        
        authors,
        series
    })
export default connector