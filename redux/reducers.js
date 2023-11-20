import data from '../data/data'
const Reducer = (state = data, action)=>{
    switch(action.type){
        case "add":
            return[...state, action.task]
    
    default:
    return state;
    }
}

export default Reducer;