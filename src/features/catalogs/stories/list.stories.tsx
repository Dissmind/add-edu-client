import React from 'react'
import {Story, Meta} from "@storybook/react/types-6-0"

import {Items, List, Props} from "../components/list"
import styled from "styled-components"
import {itemsArticlesMock} from "../test/mocks/items.mock"

export default {
  title: 'Catalog/List',
  component: List,
} as Meta



const BgStl = styled.div`
  width: 50%;
`

const Template: Story<Props> = (args) => (
  <BgStl>
    <List {...args} />
  </BgStl>
)


export const Primary = Template.bind({})



Primary.args = {
  items: itemsArticlesMock
}