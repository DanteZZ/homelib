const connector = ({ modals: {category:{ status, open, loading, data }} }) => 
    ({
        data,
        loading,
        open,
        status,
    })
export default connector