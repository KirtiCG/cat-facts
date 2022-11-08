function AddCatForm({ catList, setCatList, setCatIndex }) {
    const getRandomCatFact = async function() {
        const response = await fetch('https://catfact.ninja/fact')
        const responseJSON = await response.json();
        const randomFact = responseJSON.fact
        const copyCatList = [...catList]; // deep copy to change the catList reference
        copyCatList.push(randomFact)
        setCatList(copyCatList)
        return copyCatList.length
    }   

    return <div>
        <button onClick={async () => {
            const catListLength = await getRandomCatFact();
            setCatIndex(catListLength-1)
        }}>
            Click for new fact!
        </button>
    </div>
}

export default AddCatForm;