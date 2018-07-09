//@flow

import {
  validatorFacade as validator,
  type RelationField,
  type PreparedValidator,
} from '../../src/validator';

import {
  FIELD_TYPE,
  VALIDATION_ERROR,
} from '../../src/validator.constants';

import { mockField } from '../utils/';

const mockRelationField = mockField(FIELD_TYPE.RELATION);

describe('As developer, i can create relation field vaidator', () => {
  it('should check invalid value by "isRequired" attribute and provide error message', () => {
    const relationField: RelationField = mockRelationField({});
    relationField.isRequired = true;

    const validate: PreparedValidator = validator(relationField);

    expect(validate(null)).toBe(VALIDATION_ERROR.IS_REQUIRED());
  });

  it('should check empty value by "isRequired" attribute and provide error message', () => {
    const relationField: RelationField = mockRelationField({});
    relationField.isRequired = true;

    const validate: PreparedValidator = validator(relationField);

    expect(validate('')).toBe(VALIDATION_ERROR.IS_REQUIRED());
  });

  it('should check valid value by "isRequired" attribute and return undefined', () => {
    const relationField: RelationField = mockRelationField({});
    relationField.isRequired = true;

    const validate: PreparedValidator = validator(relationField);

    expect(validate('relationValue')).toBeUndefined();
  });
});