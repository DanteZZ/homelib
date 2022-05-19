const connector = ({ modals: {external:{ open, loading, list }} }) => 
    ({
        list,
        open,
        loading,
    })
export default connector