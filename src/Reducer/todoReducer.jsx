const initialState={
    allData:[]
}

const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case "add_data":
            const {id,data}=action.payload;
            return {
                ...state,
                allData:[
                    ...state.allData,
                    {
                        id:id,
                        data:data

                }
            ]
            }
            case "delete_Todo":
              const newList=  state.allData.filter((element)=>element.id !== action.id)
                return {
                    ...state,
                    allData:newList

                }
            default: return  state; 
    }

}
export default todoReducer;