
import data from "../fakeDatabase/database.json"
const fakeDatabase =  data.data.advisorProfileCollection.items
const initialState ={
    list : fakeDatabase,
    active : 'Status',
    search : '',
    categories:"categoriesCollection",
    skillss:"skillsCollection",
    services:"servicesCollection"
    
}

const listItemReducer = (state = initialState,action)=> {
    switch(action.type) {
        case "FILTER_ITEM" :{
            state = {
                ...state,
                active :action.payload.active,
                search :action.payload.search,
                categories:action.payload.categories,
                skillss:action.payload.skillss,
                services:action.payload.services
            }
          
            return state
            
        }
        default:
      
            return state
    }
}
export default listItemReducer