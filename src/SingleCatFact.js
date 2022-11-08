import "./single-cat-fact.css";

function SingleCatFact({ 
    catFact, 
    catFactIndex, 
    setFavoritedCatFacts,
    favoritedCatFacts
}){
    return <div className="single-cat-fact" onClick={() => {
        const indexInFavoritesArray = favoritedCatFacts.indexOf(catFactIndex);
        const copyFavoritesList = [...favoritedCatFacts];
        if (indexInFavoritesArray > -1 ) {
            copyFavoritesList.splice(indexInFavoritesArray, 1)
        } else {
            copyFavoritesList.push(catFactIndex)
        }
        // update catIndex to cat fact index
        setFavoritedCatFacts(copyFavoritesList)
    }}>
        <div className="single-cat-fact__content">
            <p style={{ 
            cursor: "pointer",
            color: favoritedCatFacts.indexOf(catFactIndex) > -1 ? 'green' : 'black'}}>{catFact}</p>
        </div>
    </div>
}
export default SingleCatFact