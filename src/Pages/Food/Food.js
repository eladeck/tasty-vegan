
import React from 'react';
import Seperator from '../../components/Seperator';
import PhotosGallery from './components/PhotosGallery/PhotosGallery';
import { VideoContainer, VideoIframe } from './StyledFood';

const Food = () => {
    return (
        <div>
            <PhotosGallery />
            <Seperator />
            <VideoContainer>
                <VideoIframe id="vp1sLf1x" title="Video Player" width="360" height="640" frameborder="0" src="https://s3.amazonaws.com/embed.animoto.com/play.html?w=swf/production/vp1&e=1630534837&f=sLf1xLz2sxrHJp146YYByw&d=0&m=p&r=360x640+480x854+720x1280&volume=100&start_res=720x1280&i=m&asset_domain=s3-p.animoto.com&animoto_domain=animoto.com&options=autostart" allowfullscreen></VideoIframe>
            </VideoContainer>
        </div>
    );
}

export default Food;

