import "./Pagination.css"

function Pagination({ catList, setPage }) {
    const pages = Math.ceil(catList.length/10)
    const collectionOfLists = []
    for (let i = 1; i <= pages; i += 1) {
        collectionOfLists.push(<label style={{ cursor: "pointer", marginRight: "10px" }}onClick={() => {
            setPage(i)
        }}>{i}</label>)
    }
    return <div className="pagination-wrapper"> 
        {collectionOfLists}
    </div>
}

export default Pagination;