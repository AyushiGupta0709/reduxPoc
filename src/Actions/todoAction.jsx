 export const addList=(addData)=>{
    return{
        type:"add_data",
        payload:{
            id: new Date().getTime().toString(),
            data:addData
        }
    }
}
export const deleteList=(id)=>{
    return{
        type:"delete_Todo",
        id:id
    }
}
