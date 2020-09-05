import React from 'react'
import { css } from '@emotion/core'
import PropagateLoader from 'react-spinners/PropagateLoader'

const override = css`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

const Loader = () => {
  return (
    <PropagateLoader
      css={override}
      size={15}
      color={'#bd6441'}
      loading={true}
    />
  )
}

export default Loader
