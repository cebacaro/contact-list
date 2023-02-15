const info = "http://jsonplace-univclone.herokuapp.com"

const getAllContactsWithFetch = async ()=>{
    try{
        const response = await fetch(`${info}/users`)
        const data = response.json()

        return data
    }catch(error){
        console.error(error)
    }
}

module.exports = {
    getAllContactsWithFetch
}