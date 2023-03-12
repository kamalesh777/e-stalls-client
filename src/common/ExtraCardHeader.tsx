import React from 'react'

interface propTypes {
  title: string
  rightComponent?: JSX.Element
}

const ExtraCardHeader = ({ title, rightComponent }: propTypes): JSX.Element => (
  <div className="card-extra-header">
    <h5 className="font-weight-bold">{title}</h5>
    {rightComponent}
  </div>
)

export default ExtraCardHeader
