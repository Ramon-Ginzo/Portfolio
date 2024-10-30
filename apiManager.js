class APIManager{
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }
    // baseUrl: la url de mi API
    // resourceName: el nombre de registro que quiero obtener ( especificado en la documentacion de la API)
    // resourdeeId: identificador unico de un registro en el sistema, proveido por la documentacion de la API
    // Fetch ("baseUrl + resoruceName + [resourceId")
    
    // Obtener todos los posts
    async getPosts(){

        try{
            const posts = await fetch('${this.baseUrl}/posts')
            console.log("respuesta de promesa", posts);
        } catch(error) {
            console.log(error);
        }

    }

}

const testAPIManager = new APIManager