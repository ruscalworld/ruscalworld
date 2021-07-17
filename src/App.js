import React from "react";
import './style/app.sass';
import BackgroundImage from './images/background.jpg';
import Button from "./components/Button";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import {faGithub, faYoutube, faDiscord, faVk, faTelegramPlane, faSteam} from "@fortawesome/free-brands-svg-icons";

function App() {
    return (
        <>
            <img src={ BackgroundImage } alt="" className="background-image" />
            <main>
                <h1>RuscalWorld</h1>
                <br/>
                <div className="buttons">
                    <Button href="https://github.com/ruscalworld" icon={ faGithub }>
                        <span className="service">GitHub</span>
                        <br/>
                        <span className="username">/ruscalworld</span>
                    </Button>
                    <Button href="#" icon={ faDiscord }>
                        <span className="service">Discord</span>
                        <br/>
                        <span className="username">RuscalWorld#9999</span>
                    </Button>
                    <Button href="https://t.me/RuscalWorld" icon={ faTelegramPlane }>
                        <span className="service">Telegram</span>
                        <br/>
                        <span className="username">/RuscalWorld</span>
                    </Button>
                    <Button href="https://steamcommunity.com/id/ruscalworld" icon={ faSteam }>
                        <span className="service">Steam</span>
                        <br/>
                        <span className="username">/ruscalworld</span>
                    </Button>
                    <Button href="https://youtube.com/channel/UCdqRU3jyD2xo6PhzK-mF2jw" icon={ faYoutube }>
                        <span className="service">YouTube</span>
                        <br/>
                        <span className="username">RuscalWorld</span>
                    </Button>
                    <Button href="mailto:me@ruscalworld.ru" icon={ faAt }>
                        <span className="service">E-mail</span>
                        <br/>
                        <span className="username">me@ruscalworld.ru</span>
                    </Button>
                </div>
            </main>
        </>
    );
}

export default App;
