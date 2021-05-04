import React from 'react'
import styled from 'styled-components'
import {Items} from "./list";


const ListItemStl = styled.div`
    background: #E1E8EF;
    border-radius: 5px;
    padding: 9px 0 9px 4px;
    font-size: 14px;
    transition: all .5s;
    
    
    
    &:hover {
        transition: all .5s;
        opacity: .7;
        cursor: pointer;
    }
`





interface Props extends Items {
    onClickHandler: ((id: number) => void)
}



export const ListItem: React.FunctionComponent<Props> = ({id, title, onClickHandler}) => {

    // const onClickHandler = (id: number) => {}

    return (
        <ListItemStl
            onClick={() => onClickHandler(id)}
        >
            {title}
        </ListItemStl>
    )
}