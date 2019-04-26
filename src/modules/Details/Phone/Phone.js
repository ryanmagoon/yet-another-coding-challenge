import React from 'react'
import { FormField, TextInput } from 'grommet'
import PropTypes from 'prop-types'

const Phone = ({ phone, onChange }) => (
  <FormField
    name="phone"
    label="Phone Number"
    required
    validate={{
      regexp: /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/,
      message: 'phone number must be valid',
    }}
  >
    <TextInput
      placeholder="555-555-5555"
      value={phone}
      onChange={(event) => {
        onChange(event.target.value)
      }}
    />
  </FormField>
)

Phone.propTypes = {
  phone: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Phone
