const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState =  {
    postsData: [
        { id: 1, post: 'Hey,my name is Yarik,  why nobody love me?', likes: '12' },
        { id: 2, post: 'Whhoooah, new year coming!!!', likes: '42' },
        { id: 3, post: 'First day after new year!!', likes: '27' },
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [
                    ...state.postsData,
                    {id:4,  post: state.newPostText, likes: '14'}
                ],
                newPostText: ''
            };
            // let newPost = {
            //     id: 4, post: state.newPostText, likes: '14'
            // };

            // state.postsData.push(newPost);
            // state.newPostText = '';
            // return state;
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
            // state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}


export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export default profileReducer;