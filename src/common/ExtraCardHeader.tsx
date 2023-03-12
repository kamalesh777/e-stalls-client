import React from 'react'

interface propTypes {
  title: string
  rightComponent?: JSX.Element
  classes?: string
}

const ExtraCardHeader = ({ title, rightComponent, classes }: propTypes): JSX.Element => (
  <div className="card-extra-header">
    <h5 className={`font-weight-bold ${classes}`}>{title}</h5>
    {rightComponent}
  </div>
)

export default ExtraCardHeader
