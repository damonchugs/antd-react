import React from 'react'
import { MkdirType } from '../data'

const MkdirVideo: React.FC<MkdirType> = (props) => {
    return (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video src={props.url+props.name} controls />
    )
}

export default MkdirVideo