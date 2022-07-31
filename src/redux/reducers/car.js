
const ADD_CAR = 'ADD_CAR';
const AIDANA = 'AIDANA';


const initState = {
    cars: [
        {
            model: 'BMW',
            year: 2010
        },
        {
            model: 'Lexus',
            year: 2015
        },
        {
            model: 'Toyota',
            year: 2019
        },
        {
            model: 'Honda',
            year: 2013
        },
        {
            model: 'KIA',
            year: 2015
        }
    ],
    elmyrza:{
        name:'Elmyrza',
        age:12,
    },
    aidana:{
        name: 'Aidana',
        age:14,
    },
    liliya:{
        name: 'Liliya',
        age:25,
    },
};

export default(state = initState, action) => {
    switch (action.type) {
        case ADD_CAR:{
            return {
                ...state,
                cars: [...state.cars,action.new]
            }
        }

        case AIDANA: {
            return {
                ...state,
                aidana: {...state.aidana, age: action.age}

            }
        }
        default: return state

}
};
export const addCar=() =>{
   return (dispatch)=> {
       return dispatch( {type: ADD_CAR, new: {
               model: 'Nissan',
               year: 2015
           }})
   }
};

export const changeAidana =() =>{
  return(dispatch)=>{
      return dispatch(
          {
             type: AIDANA, age:100
          }
      )
  }
};









