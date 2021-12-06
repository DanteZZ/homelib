const connector = ({ main: {publishers, languages, categories, covers}, modals: {book:{ status, open, loading, data }} }) => 
    ({
        data,
        loading,
        open,
        status,
        
        publishers,
        languages,
        categories,
        covers
    })
export default connector