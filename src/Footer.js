import React from 'react'
import './footer.css'
import {FaBeer} from 'react-icons/fa'
import {HiCash} from 'react-icons/hi'
import {IoLogoGooglePlaystore,IoHeartCircle } from 'react-icons/io5'
import { Grid, Slider } from "@material-ui/core";
import { Favorite } from '@material-ui/icons';
import FavoriteIcon from "@material-ui/icons/FavoriteBorderOutlined";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayArrow";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import DevicesSharpIcon from '@material-ui/icons/DevicesSharp';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumLogo" src="https://www.lahiguera.net/musicalia/artistas/bad_bunny/disco/10999/tema/24149/bad_bunny_dakiti-portada.jpg" alt="" />
                <div className="footer__songInfo">
                    <h4>Dakiti</h4>
                    <p>Bad bunny</p>
                </div>
            </div>

            <div className="footer__center">
            <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon 
                fontSize="large"
                className="footer__icon footer__play" 
                />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
                

            </div>

            <div className="footer__right">
                <div className="footer__rightContainer">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon className="footer__playlistIcon" />
                    </Grid>
                    <Grid item>
                        <DevicesSharpIcon className="footer__deviceIcon" />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon className="footer__volumeIcon" />
                    </Grid>
                    <Grid item xs>
                        <Slider className="footer__volumeSlider" />
                    </Grid>
                </Grid>
                </div>
            </div>
        </div>
    )
}

export default Footer
