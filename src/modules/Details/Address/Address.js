import React from 'react'
import { FormField, TextInput } from 'grommet'
import PropTypes from 'prop-types'

const Address = ({ address, onChange }) => (
  <FormField name="address" label="Address*" required>
    <TextInput
      placeholder="123 Sesame St"
      value={address}
      onChange={(event) => {
        onChange(event.target.value)
      }}
    />
  </FormField>
)

Address.propTypes = {
  address: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Address
