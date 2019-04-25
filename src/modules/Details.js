import React from 'react'

const Card = ({ avatar, firstName, lastName }) => (
  <section>
    <img src={avatar} alt={`${firstName} ${lastName}`} />
    <span>{`${firstName} ${lastName}`}</span>
  </section>
)

const Details = ({ id, users }) => {
  const myUser = users.find(user => Number(id) === user.id)
  return <Card {...myUser} />
}

export default Details
