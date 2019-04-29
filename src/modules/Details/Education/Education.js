import React from 'react'
import { FormField, TextInput } from 'grommet'
import PropTypes from 'prop-types'

const Education = ({ education, onChange }) => (
  <FormField label="Education" component={null}>
    <TextInput
      placeholder="Institution"
      value={education.institution}
      onChange={(event) => {
        onChange({
          ...education,
          institution: event.target.value,
        })
      }}
    />
    <TextInput
      placeholder="Degree Obtained"
      value={education.degreeObtained}
      onChange={(event) => {
        onChange({
          ...education,
          degreeObtained: event.target.value,
        })
      }}
    />
  </FormField>
)

Education.propTypes = {
  education: PropTypes.shape({
    institution: PropTypes.string.isRequired,
    degreeObtained: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Education
