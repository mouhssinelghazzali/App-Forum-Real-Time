import Token from './Token'
import AppStorage from './AppStorage'
class User{

Login(data){

    axios.post('/api/auth/login',data)
    .then(res => this.responseAfterLogin(res))
    .catch(error => console.log(error.response.data))
}

responseAfterLogin(res){

    const access_token = res.data.access_token
    const username = res.data.user
    const loading = false
    if(Token.isValid(access_token))
    {
        
      AppStorage.store(username,access_token)
      window.location ='/forum'
    }
}

hasToken(){
    const storedToken = AppStorage.getToken();
    if (storedToken) {
        return Token.isValid(storedToken) ?true : this.logOut()
    }
return false
}
loggedIn(){

    return this.hasToken()
    
}

logOut(){

   AppStorage.clear()
   window.location = '/forum'
}

name(){
if (this.loggedIn()) {
    return  AppStorage.getUser()
 }

}
id(){
    if (this.loggedIn()) {
      const payload = Token.Apptoken(AppStorage.getToken())
      return payload.sub
     }
}

own(id){

    return this.id() == id
}


admin(id){

    return this.id()== 44
}


}
export default User = new User();
 


