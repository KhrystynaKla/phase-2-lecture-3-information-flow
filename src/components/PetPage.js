import Search from "./Search"
import PetList from "./PetList"

function PetPage({pets, setSearchText, deletePet}){
    console.log(deletePet)
    return(
        <main>
            <Search setSearchText={setSearchText} />
            <PetList pets={pets} deletePet={deletePet}/>
        </main>
    )
}

export default PetPage;