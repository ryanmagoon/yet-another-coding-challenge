import React from 'react'
import { Calendar, FormField } from 'grommet'
import PropTypes from 'prop-types'

/* <TextInput
      placeholder="Scissorhands"
      value={birthDate}
      onChange={(event) => {
        onChange(event.target.value)
      }}
    /> */

const BirthDate = ({ birthDate, onChange }) => (
  <FormField name="birthDate" label="Birth Date*" required>
    <Calendar
      size="small"
      date={birthDate}
      onSelect={(date) => {
        onChange(date)
      }}
    />
  </FormField>
)

BirthDate.propTypes = {
  // lastName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default BirthDate
