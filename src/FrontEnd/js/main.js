const dipperImage = document.querySelector('.dipperImage')
const mabelImage = document.querySelector('.mabelImage')


const fetchRequest = async () => {
    const result = await fetch('https://gf-db-transfer-quantxz.vercel.app/Characters/Main')
    const data = result.json()

    return data
}

const render = async () => {
    const data = await fetchRequest()

    if(data) {
        console.log(data)
        dipperImage.src = data[0]['image']
        mabelImage.src = data[1]['image']
    }

}

render()