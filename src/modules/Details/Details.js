import React, { useState } from 'react'
import { Button, Form } from 'grommet'
import PropTypes from 'prop-types'

import FirstName from './FirstName/FirstName'
import LastName from './LastName/LastName'
import Phone from './Phone/Phone'
import Address from './Address/Address'
import BirthDate from './BirthDate/BirthDate'
import Age from './Age/Age'
import Height from './Height/Height'
import Education from './Education/Education'

const Details = ({ id = '', onSubmit = () => {}, users }) => {
  const myUser = users.find(user => Number(id) === user.id) || {}
  const [firstName, setFirstName] = useState(myUser.firstName || '')
  const [lastName, setLastName] = useState(myUser.lastName || '')
  const [phone, setPhone] = useState(myUser.phone || '')
  const [address, setAddress] = useState(myUser.address || '')
  const [birthDate, setBirthDate] = useState(myUser.birthDate || '')
  const [age, setAge] = useState(myUser.age || '')
  const [height, setHeight] = useState(myUser.height || '')
  const [education, setEducation] = useState(myUser.education || null)

  const handleChangeBirthDate = (newBirthDate) => {
    setBirthDate(newBirthDate)
    const ageDate = new Date(Date.now() - Date.parse(newBirthDate))
    setAge(Math.abs(ageDate.getUTCFullYear() - 1970))
  }

  const handleSubmit = (event) => {
    console.table(event.value)
    onSubmit(event.value)
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
      <Height height={height} onChange={setHeight} />
      <Education />
      <Button type="submit" primary label="Submit" />
    </Form>
  )
}

Details.propTypes = {
  id: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      phone: PropTypes.string,
      address: PropTypes.string,
      birthDate: PropTypes.string,
      age: PropTypes.number,
      height: PropTypes.string,
      education: PropTypes.shape({
        institution: PropTypes.string.isRequired,
        graduationDate: PropTypes.string,
      }),
    }),
  ).isRequired,
}

export default Details
