import React from 'react'
import { FormField, TextInput } from 'grommet'
import PropTypes from 'prop-types'

const FirstName = ({ firstName, onChange }) => (
  <FormField name="firstName" label="First Name*" required>
    <TextInput
      placeholder="Edward"
      value={firstName}
      onChange={(event) => {
        onChange(event.target.value)
      }}
    />
  </FormField>
)

FirstName.propTypes = {
  firstName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default FirstName
