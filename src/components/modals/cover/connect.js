const connector = ({ modals: {cover:{ status, open, loading, data }} }) => 
    ({
        data,
        loading,
        open,
        status,
    })
export default connector