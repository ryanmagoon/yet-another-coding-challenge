import React from 'react'
import { FormField, TextInput } from 'grommet'
import PropTypes from 'prop-types'

const LastName = ({ lastName, onChange }) => (
  <FormField name="lastName" label="Last Name" required>
    <TextInput
      placeholder="Scissorhands"
      value={lastName}
      onChange={(event) => {
        onChange(event.target.value)
      }}
    />
  </FormField>
)

LastName.propTypes = {
  lastName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default LastName
