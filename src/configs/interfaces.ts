import { queryStrValues } from "./types"

interface episodesIinterface {
    title: queryStrValues,
    ptBr_title: queryStrValues,
    first_exibition: queryStrValues,
    season: number,
    directed_by: queryStrValues,
    image: queryStrValues,
    written_by: queryStrValues
}

interface CharsInterface {
    name: queryStrValues,
    first_episode: queryStrValues,
    last_episode: queryStrValues,
    mentions?: queryStrValues,
    no_lines?: queryStrValues,
    voice: queryStrValues,
    abilities?: queryStrValues,
    age: queryStrValues,
    born: queryStrValues,
    ocuppation: queryStrValues,
    inspiration: queryStrValues,
    likes: queryStrValues,
    dislikes: queryStrValues,
    description: queryStrValues
    image: queryStrValues
}

interface BooksInterface {
    title: queryStrValues,
    titleBr: queryStrValues,
    format: queryStrValues,
    formatBr: queryStrValues,
    mainGenre: queryStrValues,
    mainGenreBr: queryStrValues,
    pages: queryStrValues,
    published: queryStrValues,
    publishedBr: queryStrValues,
    rating: queryStrValues,
    ratingBr: queryStrValues,
    author: queryStrValues,
    image: queryStrValues

}

interface mainCharsRelativesInterface {
    parents?: queryStrValues,
    sister_or_brother?: queryStrValues,
    grandfather?: queryStrValues,
    great_grandfather_or_great_grandmother?: queryStrValues,
    granduncle?: queryStrValues,
    ex_grandaunt_in_law?: queryStrValues,
    great_niece_or_great_nephew?: queryStrValues,
    nephew_or_niece_in_law?: queryStrValues,
    ex_wife?: queryStrValues,
    ancestor?: queryStrValues,
    maternal_cousin?: queryStrValues,
    maternal_grandfather?: queryStrValues,
    maternal_grandmother?: queryStrValues,
    charactername?: queryStrValues,

}

interface recAndminorsCharsRelativesInterface {
    parents?: queryStrValues,
    sister_or_brother?: queryStrValues,
    grandfather?: queryStrValues,
    great_grandfather_or_great_grandmother?: queryStrValues,
    granduncle?: queryStrValues,
    ex_grandaunt_in_law?: queryStrValues,
    great_niece_or_great_nephew?: queryStrValues,
    nephew_or_niece_in_law?: queryStrValues,
    ex_wife?: queryStrValues,
    ancestor?: queryStrValues,
    maternal_cousin?: queryStrValues,
    maternal_grandfather?: queryStrValues,
    maternal_grandmother?: queryStrValues,
    wife?: queryStrValues,
    son?: queryStrValues,
    grand_daughters?: queryStrValues,
    husband?: queryStrValues,
    grandson?: queryStrValues,
    mother?: queryStrValues,
    father?: queryStrValues,
    daughter?: queryStrValues,
    Unnamed_niece_or_nephew?: queryStrValues,
    father_in_law?: queryStrValues,
    great_grandfather_in_law?: queryStrValues,
    ancestor_in_law?: queryStrValues,
    unknow?: queryStrValues,
    cousin?: queryStrValues,
    charactername?: queryStrValues,

}



export { 
    episodesIinterface,
    CharsInterface,
    BooksInterface, 
    mainCharsRelativesInterface,
    recAndminorsCharsRelativesInterface 
}