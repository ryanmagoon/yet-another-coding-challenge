import React from 'react'
import { FormField, TextInput } from 'grommet'
import PropTypes from 'prop-types'

const Age = ({ age }) => (
  <FormField name="age" label="Age">
    <TextInput placeholder="Eleventy two" value={age} />
  </FormField>
)

Age.propTypes = {
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

export default Age
