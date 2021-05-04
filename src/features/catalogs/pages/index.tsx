import React from 'react'
import styled from 'styled-components'
import {Items, List} from "../components/list";
import {itemsArticlesMock} from "../test/mocks/items.mock";


const CatalogStl = styled.div`
  background: #B7C2CE;
  height: 100vh;
`
const GridStl = styled.div`
  
  
  height: inherit;
  display: grid;
  grid-template-columns: .25fr 1fr .1fr 1fr .25fr;
  grid-template-rows: 1fr 10fr 1fr;
  
`


const LeftSideStl = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 2;
  
`

const RightSideStl = styled.div`
  grid-column: 4 / 5;
  grid-row: 2 / 3;
`

interface Props {}



export const Catalog: React.FunctionComponent<Props> = ({}) => {

  const articles: Array<Items> = itemsArticlesMock // TODO: mock data
  const sections: Array<Items> = itemsArticlesMock // TODO: mock data


  const chooseChapter = (id: number) => {
    alert('choose chapter id: ' + id)
  }

  const redirectToArticle = (id: number) => {
    alert('redirect to article id: ' + id)
  }


  return (
    <CatalogStl>
      <GridStl>
        <LeftSideStl>
          <List items={articles} onClickHandler={chooseChapter} />
        </LeftSideStl>

        <RightSideStl>
          <List items={sections} onClickHandler={redirectToArticle} />
        </RightSideStl>
      </GridStl>
    </CatalogStl>
  )
}