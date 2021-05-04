import React from 'react'
import {Story, Meta} from "@storybook/react/types-6-0"
import styled from "styled-components"

import {Catalog} from "../pages";




export default {
  title: 'Catalog/Pages/Index',
  component: Catalog,
} as Meta



const BgStl = styled.div``

const Template: Story = (args) => (
  <BgStl>
    <Catalog {...args} />
  </BgStl>
)

export const Primary = Template.bind({})
Primary.args = {}