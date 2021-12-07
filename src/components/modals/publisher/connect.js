const connector = ({ modals: {publisher:{ status, open, loading, data }} }) => 
    ({
        data,
        loading,
        open,
        status,
    })
export default connector