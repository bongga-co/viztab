import React, { useEffect } from 'react'
import { Flex, Box } from '@rebass/grid'
import { NavLink } from 'react-router-dom'
import { Button } from 'components/Button'
import { CustomIcon } from 'components/Icon'
import { Text } from 'components/Text'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from './components/Container'
import { setSidebarOpen, fetchSidebarData } from 'state/modules/ui/sidebar'

export const Sidebar = () => {
  const dispatch = useDispatch()
  const { open, data } = useSelector(state => state.ui.sidebar)

  useEffect(() => {
    data.length === 0 && dispatch(fetchSidebarData())
  }, [data, dispatch])

  return (
    <Container open={open}>
      <Flex justifyContent='flex-end'>
        <Button onClick={() => dispatch(setSidebarOpen())}>
          <CustomIcon src='./images/icons/close.png' />
        </Button>
      </Flex>
      <Flex flexDirection='column' justifyContent='space-evenly'>
        {data.map(item => (
          <NavLink
            key={item.id}
            to={item.to}
            activeClassName={item.active}
            onClick={() => dispatch(setSidebarOpen())}
          >
            <Flex alignItems='center' py={3}>
              <CustomIcon src={item.icon} />
              <Box ml={2}>
                <Text fontsize='18px'>{item.name}</Text>
              </Box>
            </Flex>
          </NavLink>
        ))}
      </Flex>
    </Container>
  )
}
