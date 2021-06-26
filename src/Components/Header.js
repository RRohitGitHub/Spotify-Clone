import React from "react"
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import { useDataLayerValue } from '../DataLayer'

const Header = ({spotify})=>{
    const [{user,token},dispatch] = useDataLayerValue();
    return(
        <div className="header">
            <div className="header__left">
                <SearchIcon/>
                <input type="text" placeholder="Artists, songs or podcasts"/>
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt="user?.display_name"/>
                <h4>Rohit Parab</h4>
            </div>
        </div>
    )
}

export default Header