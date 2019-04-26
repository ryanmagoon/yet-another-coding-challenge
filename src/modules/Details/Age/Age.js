import React from 'react'
import { FormField, TextInput } from 'grommet'
import PropTypes from 'prop-types'

const Age = ({ age }) => (
  <FormField name="age" label="Age" required>
    <TextInput placeholder="Eleventy two" value={age} />
  </FormField>
)

Age.propTypes = {
  age: PropTypes.string.isRequired,
}

export default Age
