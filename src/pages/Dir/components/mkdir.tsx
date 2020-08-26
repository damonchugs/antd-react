import React from 'react'
import { Typography } from 'antd'
import { MkdirType } from '../data'

const { Paragraph } = Typography

const MkdirChild: React.FC<MkdirType> = (props) => {
    return (
        <Paragraph style={{ margin: '10px' }} copyable>{props.name}</Paragraph>
    )
}

export default MkdirChild