import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TabsList } from './components/TabsList'
import { TabContent } from './components/TabContent'

export const Tabs = ({ children }) => {
  const [active, setActive] = useState(children[0].props.label)

  const handleClick = (tab) => setActive(tab)

  return (
    <div>
      <TabsList
        data={children}
        active={active}
        onClick={handleClick}
      />
      <TabContent
        active={active}
        content={children}
      />
    </div>
  )
}

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired
}
