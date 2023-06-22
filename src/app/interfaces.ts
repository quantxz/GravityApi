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

export { episodesIinterface, mainCharsInterface, BooksInterface }