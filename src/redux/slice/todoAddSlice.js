import { createSlice } from "@reduxjs/toolkit";
export const todoAddSlice = createSlice({
    name:'todoListe',
    initialState:{
       
            
            todos:[],
            todosYedek:[],
            count:0
            
        
    },
    reducers:{
        
        todoEkle:(state,action)=>{
            
          
            state.todos.push({todo:action.payload,id:state.count,completed:true})
            state.todosYedek=state.todos
            state.count =state.todosYedek.length
          
        },
        todoCompleted:(state,action)=>{
           
           state.todos.map((item)=>{
            
            if(item.id===action.payload)
            {
        
               
                if(item.completed){
                  
                    state.count -=1
                    item.completed = false
                   
                }
                else{
                    state.count +=1
                    item.completed=true
                  
                }
            }
           })
          state.todosYedek=state.todos
        },
        todoActiveList:(state,action)=>{
           
                if(action.payload==="all"){
                    state.todosYedek = state.todos.filter((item)=>{
                        return item
                    })
                    state.count=state.todosYedek.length
                }
                else if(action.payload==="active")
                {
                    state.todosYedek = state.todos.filter((item)=>{
                        return item.completed===true
                    })
                    state.count=state.todosYedek.length
                }
               else if(action.payload==="completed")
                {
                    state.todosYedek = state.todos.filter((item)=>{
                        return item.completed===false
                    })
                    state.count=state.todosYedek.length
                }
            
           
        },
        todoDelete:(state,action)=>{
          state.todosYedek =  state.todos.filter((item)=>{
            return item.id!==action.payload
          })
         state.todos = state.todosYedek 
         state.count = state.todosYedek.length
        }
        
    }
})
export const {todoEkle,todoCompleted,todoActiveList,todoDelete} = todoAddSlice.actions
export default  todoAddSlice.reducer