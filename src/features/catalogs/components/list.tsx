import React from 'react'
import styled from "styled-components"
import {ListItem} from "./list-item";


const ListStl = styled.div`
  border-radius: 10px;
  background: white;
  padding: 45px 0;
  height: 100%;
  box-sizing: border-box;
`



const ItemWrapper = styled.div`
  margin: 10px 20px;
`







export interface Items {
  id: number,
  title: string,
}


export interface Props {
  items: Array<Items> | null,
  onClickHandler: ((id: number) => void)
}


const Loading = () => {
  return (
    <h1>Loading</h1>
  )
}

export const List: React.FunctionComponent<Props> = ({items, onClickHandler}) => {

  const isLoadingItems = items === null
  const isEmptyItems = Array.isArray(items)
    ? items.length < 1
    : true

  const list = !isEmptyItems
    // @ts-ignore => (items isn't null always)
    ? items.map(i => <ItemWrapper>
        <ListItem
          id={i.id}
          title={i.title}
          onClickHandler={onClickHandler}
        />
      </ItemWrapper>)
    : <h1>List is empty</h1>


  return (
    <ListStl>
      {
        (isLoadingItems)
          ? list
          : <Loading />
      }
    </ListStl>
  )
}