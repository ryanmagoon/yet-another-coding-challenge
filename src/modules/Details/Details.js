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
  const [lastName, setLastName] = useState(myUser.lastName || '')
  const [phone, setPhone] = useState(myUser.phone || '')
  const [address, setAddress] = useState(myUser.address || '')
  const [birthDate, setBirthDate] = useState(myUser.birthDate || '')
  const [age, setAge] = useState(myUser.age || null)
  const [height, setHeight] = useState(myUser.height || null)
  const [education, setEducation] = useState(myUser.education || null)

  const handleChangeBirthDate = (newBirthDate) => {
    setBirthDate(newBirthDate)
    const ageDifMs = Date.now() - Date.parse(newBirthDate)
    const ageDate = new Date(ageDifMs) // miliseconds from epoch
    setAge(Math.abs(ageDate.getUTCFullYear() - 1970))
  }

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
      <Address address={address} onChange={setAddress} />
      <BirthDate birthDate={birthDate} onChange={handleChangeBirthDate} />
      <Age age={age} />
      <Height />
      <Education />
      <Button type="submit" primary label="Submit" />
    </Form>
  )
}

export default Details
