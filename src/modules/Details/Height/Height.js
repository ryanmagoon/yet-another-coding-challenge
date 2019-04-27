import React from 'react'
import { FormField, TextInput } from 'grommet'
import PropTypes from 'prop-types'

const Height = ({ height, onChange }) => (
  <FormField
    name="height"
    label="Height"
    required
    validate={{
      regexp: /^(\d{1,5})'((\s?)(-?)(\s?)([0-9]|(1[0-1]))")?$/,
      message: 'Please enter a valid height',
    }}
  >
    <TextInput
      placeholder={'5\'8"'}
      value={height}
      onChange={(event) => {
        onChange(event.target.value)
      }}
    />
  </FormField>
)

Height.propTypes = {
  height: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Height
