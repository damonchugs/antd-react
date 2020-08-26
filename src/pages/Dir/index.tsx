import React, { useState, useMemo } from "react"
// antd DOM
import { Typography } from 'antd'
// 组件
import MkdirImg from './components/img'
import MkdirVideo from './components/video'
import MkdirChild from './components/mkdir'
// style file
import styles from './style.less'

const AppContext = React.createContext({})
const { Paragraph } = Typography

const dirs = {
    name: 'pixiv',
    type: 'dir',
    child: [
        {
            name: '72461417_p0_master1200.jpg',
            type: 'jpg'
        },
        {
            name: 'MI8/Video/video_1.mp4',
            type: 'mp4'
        }
    ]
}

const Mkdirs: React.FC<{}> = () => {
    const baseUrl: string = 'http://uf.damonchu.fun/'
    const Dir: Object = { ...dirs }
    const [name, handleChangeName] = useState<string>(Dir.child[0].name)

    // const handleImgLoad = (events: Object) => {
    //     // eslint-disable-next-line no-console
    //     console.log(events.target.src.split('fun/')[1], 'imgLoad')
    // }
    
    const onChange = (str: string) => {
        // 71510766_p0.jpg
        handleChangeName(str)
    }
    
    const ImgMeno = useMemo(() => name, [name])

    const nameChoose = () => {
        return name === '71510766_p0.jpg' ? '72461417_p0_master1200.jpg' : '71510766_p0.jpg'
    }

    return (
        <div className={styles.mkdir}>
            <AppContext.Provider value={{
                imgName: name
            }}>
                <div>
                    <MkdirImg name={ImgMeno} apps={AppContext} url={`${baseUrl}pixiv/`} onChange={onChange} />
                    <p onClick={() => handleChangeName(nameChoose())}>{name}</p>
                    <Paragraph editable={{ onChange }}>{name}</Paragraph>
                </div>
                <MkdirVideo name={Dir.child[1].name} url={baseUrl} />
                <MkdirChild name={Dir.name} />
                {/* <img alt={name} src={baseUrl+name} onLoad={handleImgLoad} /> */}
            </AppContext.Provider>
        </div>
    )
}
export default Mkdirs