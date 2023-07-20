import logo1 from './../emoji-me.png'
import logo2 from './../cool.png'
import logo3 from './../hug.jpg'
 
 let initialState =  {
    friends: [
        { image: logo1, name: 'Sasha' },
        { image: logo2, name: 'Yarik' },
        { image: logo3, name: 'Dima' },
    ],
};
 
 const sidebarReducer = (state = initialState, action) => {

    
    return state;
}

export default sidebarReducer;