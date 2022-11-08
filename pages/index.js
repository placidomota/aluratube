import config from '../config.json';
import styled from 'styled-components';
import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu'
import {StyledTimeline} from '../src/components/TimeLine'

function HomePage() {
    const estiloDaHomePage = { 
        // backgroundColor: "red" 
    };

    return (
        <>
        <CSSReset />
        <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
            <Menu />
            <Header />
            <TimeLine playlists={config.playlists} />
        </div>
        </>
    )
}

export default HomePage;

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }


const StyledHeader = styled.div`
    img{
        width:80px;
        height:80px;
        border-radius:50%;
    }

    .user-info{
        display:flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
        margin-top: 50px;
    }
 
 `

//  console.log(config.playlists)

function Header() {
    return (
        <StyledHeader>
            {/* <img src="banner" /> */}
            <section className='user-info'>
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>

        </StyledHeader>
    )
}


function TimeLine(propriedades) {
    // console.log("Dentro do componente", propriedades.playlists)
    const playlistNames = Object.keys(propriedades.playlists)
    // console.log(playlistNames)

    return (
        <StyledTimeline>
            {playlistNames.map((playlistNames) => {
                const videos = propriedades.playlists[playlistNames]
                console.log(playlistNames)
                console.log(videos)
                return (
                    <section>
                        <h2>{playlistNames}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
                                    
        </StyledTimeline>
    )
}