<template>
<div v-if="question">
        <edit-question v-if="editing" :data=question></edit-question>

       
    <show-question  :data=question  v-else></show-question>
    <v-container>
    <replies :question="question"> </replies>
    <new-reply v-if="loggedIn" :questionSlug="question.slug"></new-reply>
    <div class="mt-4"  v-else >
    <router-link to="/login">Login in to reply</router-link>

    </div>

    </v-container>

        </div>
    

</template>

<script>
import ShowQuestion from './ShowQuestion'
import EditQuestion from './EditQuestion'
import Replies from '../Reply/replies'
import NewReply from '../Reply/newReply'
export default {
components:{ShowQuestion,EditQuestion,Replies,NewReply},
data(){
    return {
        question :null,
        editing:false
    }

},
created()
{
this.getQuestion()
this.listen()
},
computed:{
    loggedIn(){
    return  User.loggedIn()
    }
},
methods:{
    listen(){
        EventBus.$on('startEditing',() =>{
            this.editing = true

        })

        EventBus.$on('cancelEditing',() =>{

            this.editing = false
        })

    },
    getQuestion(){
    axios.get('/api/question/' + this.$route.params.slug)
    .then(res => this.question =  res.data.data)

    }


}


}
</script>

<style>

</style>
