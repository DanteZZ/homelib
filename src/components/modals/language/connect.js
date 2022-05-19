const connector = ({ modals: {language:{ status, open, loading, data }} }) => 
    ({
        data,
        loading,
        open,
        status,
    })
export default connector