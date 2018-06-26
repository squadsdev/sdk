// @flow
import React from 'react';
import * as R from 'ramda';
import { Form as FinalForm } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { compose, setDisplayName } from 'recompose';
import type { FormProps as FinalFormProps } from 'react-final-form';

import { FormContext } from './FormContext';
import { getInitialValues, withTableSchema } from './utils';
import type { FormProps, FormContextValue } from './types';

/**
 * `Form` wrapper based on `Form` from the [`react-final-form`](https://github.com/final-form/react-final-form). That accept [`FormProps`](https://github.com/final-form/react-final-form#formprops) props and some extra props for easy working with 8base API.
 * @prop {TableSchema} [tableSchema] - The 8base API table schema.
 * @prop {string} [tableSchemaName] - The name of the 8base API table schema. Worked only if you provide schema by `SchemaContext`.
 * @prop {boolean} [prefillInitialValues=false] - If `true`, than prefill all form fields with default values from passed table schema.
 */
class Form extends React.Component<FormProps> {
  static defaultProps = {
    prefillInitialValues: false,
    mutators: {},
  };

  collectProps = (): FinalFormProps => {
    const { prefillInitialValues, mutators, tableSchema, ...restProps } = this.props;

    const collectedProps = {
      mutators: R.merge(arrayMutators),
      tableSchema,
      ...restProps,
    };

    if (prefillInitialValues) {
      collectedProps.initialValues = getInitialValues(tableSchema);
    }

    return collectedProps;
  };

  collectContextValue = (): FormContextValue => {
    const { tableSchema } = this.props;

    return { tableSchema };
  };

  render() {
    const contextValue: FormContextValue = this.collectContextValue();

    const props: FinalFormProps = this.collectProps();

    return (
      <FormContext.Provider value={ contextValue }>
        <FinalForm { ...props } />
      </FormContext.Provider>
    );
  }
}

Form = compose(
  withTableSchema,
  setDisplayName('Form'),
)(Form);

export { Form };