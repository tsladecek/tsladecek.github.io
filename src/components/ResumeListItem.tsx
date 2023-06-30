import React from 'react'

type Props = {
  children: React.ReactNode
}

const ResumeListItem = (props: Props) => {
  return (
    <li style={{ textAlign: 'justify' }}>{props.children}</li>
  )
}

export default ResumeListItem