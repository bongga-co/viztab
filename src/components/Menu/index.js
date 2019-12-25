import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CustomIcon } from 'components/Icon'
import { Flex, Box } from '@rebass/grid'
import { Link } from 'react-router-dom'
import { Text } from 'components/Text'
import { fetchSidebarData } from 'state/modules/ui/sidebar'

export const Menu = () => {
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.ui.sidebar)

  useEffect(() => {
    data.length === 0 && dispatch(fetchSidebarData())
  }, [data, dispatch])

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>
          <Link to={item.to}>
            <Flex alignItems='center' py={3}>
              <CustomIcon src={item.icon} size='20px' />
              <Box ml={2}>
                <Text>{item.name}</Text>
              </Box>
            </Flex>
          </Link>
        </li>
      ))}
    </ul>
  )
}
