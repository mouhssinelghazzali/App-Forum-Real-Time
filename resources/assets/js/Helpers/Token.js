class Token{


isValid(token){
    const payload = this.Apptoken(token);
    console.log(payload.iss)
    if (payload) {
        return payload.iss == "http://localhost:8000/api/auth/login" || "http://localhost:8000/api/auth/signup"  ? true : false
    }

return false
}

Apptoken(token){

const payload = token.split('.')[1]
return this.decode(payload)

}

decode(payload){

    return JSON.parse(atob(payload))
}
decode(payload){
    if(this.isBase64(payload)){
        return JSON.parse(atob(payload))
    }
    return false
}
isBase64(str){


    try{
        return btoa(atob(str)).replace(/=/g,"") == str
    }
    catch(err){
        return false
    }
}
}
export default Token = new Token()

