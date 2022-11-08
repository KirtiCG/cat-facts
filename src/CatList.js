import SingleCatFact from "./SingleCatFact";

import "./cat-list.css";

function CatList({ page, catList, setFavoritedCatFacts, favoritedCatFacts }) {
    return <div className="cat-list">
        {catList.filter((catFact, index) => {    
            return (index >= ((page - 1) * 10)) && (index < (page * 10))
        }).map((catFact, index) => {
            return <SingleCatFact 
                catFact={catFact} 
                setFavoritedCatFacts={setFavoritedCatFacts} 
                favoritedCatFacts={favoritedCatFacts}
                catFactIndex={index} 
            />
        })}
    </div>
}

export default CatList;