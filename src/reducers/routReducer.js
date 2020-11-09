const initState={
    posts:[{
        id:'1',title:'Dinozavrlar niye mehv oldu',body:'Lorem iprsum faqakm lqoanrm fauwq dsadwqi asdamwklq nqwn'
    },{
        id:'2',title:'Cetenenin 8000 illik tarixi',body:'Lorem iprsum faqakm lqoanrm fauwq dsadwqi asdamwklq nqwn'
    },{
        id:'3',title:'Agcaqanadlar mehv etsek ne olar',body:'Lorem iprsum faqakm lqoanrm fauwq dsadwqi asdamwklq nqwn'
    }]
}
const routReducer = (state=initState,action) =>{
    if(action.type==='DELETE_POST'){
        let newPost =state.posts.filter(post=>{
            return post.id!==action.id
        });
        return{
            ...state,
            posts:newPost
        }
    }
return state;
}
export default routReducer;