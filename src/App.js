
import React from "react";
import { Grid } from '@material-ui/core'
import youtube from "./api/youtube";
import {VideoDetail, VideoList, SearchBar} from './components';

class App extends React.Component {
    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
        params: {
            part: 'snippet',
            maxResults:5,
            key: process.env.REACT_APP_API_KEY,
            q: searchTerm,
    
        }
    }
        
        
        )
        
        
        ;
        console.log(response.data)
    }
render () {
    return (
    <Grid justifyContent='center' container spacing={10}> 
        <Grid item xs={12}>
            <Grid container spacing={10}> 
                <Grid item xs={12}>
                <SearchBar onFormSubmit={this.handleSubmit}/>
                </Grid>

                <Grid item xs={8}>
                <VideoDetail/>
                </Grid>

                <Grid item xs={4}>
                    {/* {Video List} */}
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    )
}

}




// const App = () => {
//     return <h1>Youtube clone</h1>
// }

export default App;