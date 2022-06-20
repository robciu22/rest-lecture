import { Card, Text } from '@mantine/core'
import { Link } from 'react-router-dom'

const BarCard = ({ bar }) => {
  return (
    <Card shadow='sm' p='xl' component={Link} to={`/bars/${bar._id}`}>
      <Card.Section>
        <Text weight={500} size='lg' align='center'>
          {bar.name}
        </Text>
      </Card.Section>

      <Text weight={500} align='center'>
        Number of beers: {bar.beers.length}
      </Text>
    </Card>
  )
}

export default BarCard
