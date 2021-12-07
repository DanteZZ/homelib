const connector = ({ main: {categories}, modals: {category:{ status, open, loading, data }} }) => 
    ({
        data,
        loading,
        open,
        status,
        categories
    })
export default connector