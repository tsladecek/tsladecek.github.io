import { Container} from '@mui/material'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const PageContainer = (props: Props) => {
  return (
    <Container sx={{ pt: 1 }}>{props.children}</Container>
  )
}

export default PageContainer