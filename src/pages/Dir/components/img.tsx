import React, { useState, useEffect, useContext } from 'react'
import { MkdirType } from '../data'

export interface MkdirImgType extends Partial<MkdirType> {
    name: string,
    type?: string,
    url?: string,
    onChange: (res: string) => void,
    apps?: any
}

const MkdirImg: React.FC<MkdirImgType> = (props) => {
    const [name, setImgName] = useState<string>(props.name)
    let { imgName } = useContext(props.apps)
    console.log(imgName, 'asdsad')

    useEffect(() => {
        console.log(name, 'effect')
    }, [name])
    const names = () => {
        // eslint-disable-next-line no-shadow
        const names = name === '71510766_p0.jpg' ? '72461417_p0_master1200.jpg' : '71510766_p0.jpg'
        props.onChange(names)
        imgName = names
        return names
    }
    const handleImgLoad = (events: Object) => {
        // eslint-disable-next-line no-console
        console.log(events.target.src.split('/pixiv/')[1], 'imgLoad')
    }

    return (
        <img alt={name} src={props.url+imgName} onLoad={handleImgLoad} onClick={() => setImgName(names())} />
    )
}

export default MkdirImg