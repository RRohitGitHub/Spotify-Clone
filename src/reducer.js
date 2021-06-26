export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    discover_weekly:null,
    // token:"BQD0xFdEFdlUlL8cwG56ZWX7zVAs4KgWqTaruaHSC3O10b6t9fjnJrzfW-k18CNWcB-dMAyrRgkYjo8UGuEMhYnGXpD9gxqDX19N2bYVROKhigu5z6weQAscV_ADua1BcqhnJA7Yy3z176TIz8pLr7RKaT-c7u9ld06IqEFOh9pnXAHUz3UT"
}

const reducer = (state,action) => {
    console.log(action) //Pro Tip

    //Action ->  type, payload

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }

        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            }

        case "SET_PLAYLIST":
            return{
                ...state,
                playlists:action.playlists
            }

        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly:action.discover_weekly
            }

        default:
            return{
                state
            }
    }

}

export default reducer