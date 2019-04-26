import React, { useState } from 'react'
import { Button, Form } from 'grommet'

import FirstName from './FirstName/FirstName'
import LastName from './LastName/LastName'
import Phone from './Phone/Phone'
import Address from './Address/Address'
import BirthDate from './BirthDate/BirthDate'
import Age from './Age/Age'
import Height from './Height/Height'
import Education from './Education/Education'

// const Card = ({ avatar, firstName, lastName }) => (
//   <section>
//     <img src={avatar} alt={`${firstName} ${lastName}`} />
//     <span>{`${firstName} ${lastName}`}</span>
//   </section>
// )

const Details = ({ id, users }) => {
  const myUser = users.find(user => Number(id) === user.id) || {}
  // const {
  //   firstName, lastName, phone, address, birthDate, age, height, education,
  // } = myUser
  const [firstName, setFirstName] = useState(myUser.firstName || '')
  const [lastName, setLastName] = useState(myUser.lastName || null)
  const [phone, setPhone] = useState(myUser.phone || null)
  const [address, setAddress] = useState(myUser.address || null)
  const [birthDate, setBirthDate] = useState(myUser.birthDate || null)
  const [age, setAge] = useState(myUser.age || null)
  const [height, setHeight] = useState(myUser.height || null)
  const [education, setEducation] = useState(myUser.education || null)

  const handleSubmit = (event) => {
    console.table(event.value)
  }

  return (
    <Form
      onSubmit={handleSubmit}
      value={{
        firstName,
        lastName,
        phone,
        address,
        birthDate,
        age,
        height,
        education,
      }}
    >
      <FirstName firstName={firstName} onChange={setFirstName} />
      <LastName lastName={lastName} onChange={setLastName} />
      <Phone phone={phone} onChange={setPhone} />
      <Address />
      <BirthDate />
      <Age />
      <Height />
      <Education />
      <Button type="submit" primary label="Submit" />
    </Form>
  )
}

export default Details
