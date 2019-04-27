import React from 'react'
import { Calendar, FormField } from 'grommet'
import PropTypes from 'prop-types'

const BirthDate = ({ birthDate, onChange }) => (
  <FormField name="birthDate" label="Birth Date*" required>
    <Calendar
      bounds={['01-01-1900', new Date().toISOString()]}
      size="small"
      date={birthDate}
      onSelect={(date) => {
        onChange(date)
      }}
    />
  </FormField>
)

BirthDate.propTypes = {
  birthDate: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default BirthDate
