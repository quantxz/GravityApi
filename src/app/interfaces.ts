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
    fisrt_episode: string,
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

export { episodesIinterface, mainCharsInterface }