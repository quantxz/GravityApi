interface episodesIinterface {
    title: string,
    ptBr_title: string,
    first_exibition: string,
    season: number,
    directed_by: string,
    image: string,
    written_by: string
}

interface mainCharsInterface {
    name: string,
    first_episode: string,
    last_episode: string,
    voice: string,
    age: string,
    born: string,
    ocuppation: string,
    inspiration: string,
    likes: string,
    dislikes: string,
    description: string
    image: string
}

interface BooksInterface {
    title: string,
    titleBr: string,
    format: string,
    formatBr: string,
    mainGenre: string,
    mainGenreBr: string,
    pages: string,
    published: string,
    publishedBr: string,
    rating: string,
    ratingBr: string,
    author: string,
    image: string

}

interface mainCharsRelativesInterface {
    parents?: string,
    sister_or_brother?: string,
    grandfather?: string,
    great_grandfather_or_great_grandmother?: string,
    granduncle?: string,
    ex_grandaunt_in_law?: string,
    great_niece_or_great_nephew?: string,
    nephew_or_niece_in_law?: string,
    ex_wife?: string,
    ancestor?: string,
    maternal_cousin?: string,
    maternal_grandfather?: string,
    maternal_grandmother?: string,
    charactername?: string,

}

export { episodesIinterface, mainCharsInterface, BooksInterface, mainCharsRelativesInterface }