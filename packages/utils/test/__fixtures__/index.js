export const SCHEMA = [{
  id: 'TABLE_SCHEMA_ID',
  name: 'tableSchema',
  displayName: 'Table Schema',
  isSystem: false,
  fields: [
    {
      name: 'number',
      displayName: 'number',
      description: null,
      fieldType: 'NUMBER',
      fieldTypeAttributes: {
        format: 'NUMBER',
        precision: 0,
        currency: null,
        minValue: null,
        maxValue: null,
      },
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
    {
      name: 'numberList',
      displayName: 'numberList',
      description: null,
      fieldType: 'NUMBER',
      fieldTypeAttributes: {
        format: 'NUMBER',
        precision: 0,
        currency: null,
        minValue: null,
        maxValue: null,
      },
      isList: true,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
    {
      name: 'meta',
      displayName: 'meta',
      description: null,
      fieldType: 'TEXT',
      fieldTypeAttributes: {
        format: 'UNFORMATTED',
        fieldSize: 100,
      },
      isMeta: true,
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: null,
      relation: null,
    },
    {
      name: 'address',
      displayName: 'Address',
      description: null,
      fieldType: 'SMART',
      fieldTypeAttributes: {
        format: 'ADDRESS',
        innerFields: [
          {
            name: 'street1',
            displayName: 'Street 1',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: true,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
          {
            name: 'street2',
            displayName: 'Street 2',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: false,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
          {
            name: 'zip',
            displayName: 'Zip',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: false,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
          {
            name: 'city',
            displayName: 'City',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: true,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
          {
            name: 'state',
            displayName: 'State',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: false,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
        ],
      },
      isList: false,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
    {
      name: 'addresses',
      displayName: 'Addresses',
      description: null,
      fieldType: 'SMART',
      fieldTypeAttributes: {
        format: 'ADDRESS',
        innerFields: [
          {
            name: 'street1',
            displayName: 'Street 1',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: true,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
          {
            name: 'street2',
            displayName: 'Street 2',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: false,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
          {
            name: 'zip',
            displayName: 'Zip',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: false,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
          {
            name: 'city',
            displayName: 'City',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: true,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
          {
            name: 'state',
            displayName: 'State',
            description: null,
            fieldType: 'TEXT',
            isList: false,
            isRequired: false,
            isUnique: false,
            fieldTypeAttributes: {
              format: 'UNFORMATTED',
              fieldSize: 255,
            },
          },
        ],
      },
      isList: true,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
    {
      name: 'scalar',
      displayName: 'Scalar',
      description: null,
      fieldType: 'TEXT',
      fieldTypeAttributes: {
        format: 'UNFORMATTED',
        fieldSize: 100,
      },
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: 'Scalar Default Value',
      relation: null,
    },
    {
      name: 'file',
      displayName: 'File',
      description: null,
      fieldType: 'FILE',
      fieldTypeAttributes: {
        format: 'FILE',
        maxSize: null,
        typeRestrictions: null,
      },
      isList: false,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
    {
      name: 'fileList',
      displayName: 'File List',
      description: null,
      fieldType: 'FILE',
      fieldTypeAttributes: {
        format: 'FILE',
        maxSize: null,
        typeRestrictions: null,
      },
      isList: true,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      isSystem: false,
      isMeta: false,
      relation: null,
    },
    {
      name: 'scalarList',
      displayName: 'Scalar List',
      description: null,
      fieldType: 'TEXT',
      fieldTypeAttributes: {
        format: 'UNFORMATTED',
        fieldSize: 100,
      },
      isList: true,
      isRequired: false,
      isUnique: false,
      defaultValue: 'Scalar List Default Value 1',
      relation: null,
    },
    {
      name: 'relation',
      displayName: 'Relation',
      description: null,
      fieldType: 'RELATION',
      fieldTypeAttributes: null,
      isList: false,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      relation: {
        id: 'RELATION_FIELD_ID_1',
        relationTableName: 'RELATION_TABLE_NAME_1',
        relationFieldName: 'aid',
        refTable: {
          id: 'RELATION_TABLE_SCHEMA_ID',
        },
        refFieldIsList: false,
        refFieldIsRequired: true,
      },
    },
    {
      name: 'relationList',
      displayName: 'RelationList',
      description: null,
      fieldType: 'RELATION',
      fieldTypeAttributes: null,
      isList: true,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      relation: {
        id: 'RELATION_FIELD_ID_2',
        relationTableName: 'RELATION_TABLE_NAME_2',
        relationFieldName: 'aid',
        refTable: {
          id: 'RELATION_TABLE_SCHEMA_ID',
        },
        refFieldIsList: false,
        refFieldIsRequired: true,
      },
    },
  ],
}, {
  id: 'RELATION_TABLE_SCHEMA_ID',
  name: 'relationTableSchema',
  displayName: 'Relation Table Schema',
  isSystem: false,
  fields: [
    {
      name: 'scalar',
      displayName: 'Scalar',
      description: null,
      fieldType: 'TEXT',
      fieldTypeAttributes: {
        format: 'UNFORMATTED',
        fieldSize: 100,
      },
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: 'Scalar Default Value',
      relation: null,
    },
    {
      name: 'scalarList',
      displayName: 'Scalar List',
      description: null,
      fieldType: 'TEXT',
      fieldTypeAttributes: {
        format: 'UNFORMATTED',
        fieldSize: 100,
      },
      isList: true,
      isRequired: false,
      isUnique: false,
      defaultValue: 'Scalar List Default Value 1',
      relation: null,
    },
    {
      name: 'relation',
      displayName: 'Relation',
      description: null,
      fieldType: 'RELATION',
      fieldTypeAttributes: null,
      isList: false,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      relation: {
        id: 'RELATION_FIELD_ID_3',
        relationTableName: 'RELATION_TABLE_NAME_1',
        relationFieldName: 'aid',
        refTable: {
          id: 'TABLE_SCHEMA_ID',
        },
        refFieldIsList: false,
        refFieldIsRequired: true,
      },
    },
    {
      name: 'relationList',
      displayName: 'RelationList',
      description: null,
      fieldType: 'RELATION',
      fieldTypeAttributes: null,
      isList: true,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      relation: {
        id: 'RELATION_FIELD_ID_4',
        relationTableName: 'RELATION_TABLE_NAME_2',
        relationFieldName: 'aid',
        refTable: {
          id: 'TABLE_SCHEMA_ID',
        },
        refFieldIsList: false,
        refFieldIsRequired: true,
      },
    },
    {
      name: 'nestedRelation',
      displayName: 'Nested Relation',
      description: null,
      fieldType: 'RELATION',
      fieldTypeAttributes: null,
      isList: false,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      relation: {
        id: 'RELATION_FIELD_ID_5',
        relationTableName: 'RELATION_TABLE_NAME_3',
        relationFieldName: 'aid',
        refTable: {
          id: 'NESTED_RELATION_TABLE_SCHEMA_ID',
        },
        refFieldIsList: false,
        refFieldIsRequired: true,
      },
    },
    {
      name: 'nestedRelationList',
      displayName: 'Nested Relation List',
      description: null,
      fieldType: 'RELATION',
      fieldTypeAttributes: null,
      isList: true,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      relation: {
        id: 'RELATION_FIELD_ID_6',
        relationTableName: 'RELATION_TABLE_NAME_4',
        relationFieldName: 'aid',
        refTable: {
          id: 'NESTED_RELATION_TABLE_SCHEMA_ID',
        },
        refFieldIsList: false,
        refFieldIsRequired: true,
      },
    },
  ],
}, {
  id: 'NESTED_RELATION_TABLE_SCHEMA_ID',
  name: 'nestedRelationTableSchema',
  displayName: 'Other Relation Table Schema',
  isSystem: false,
  fields: [
    {
      name: 'scalar',
      displayName: 'Scalar',
      description: null,
      fieldType: 'TEXT',
      fieldTypeAttributes: {
        format: 'UNFORMATTED',
        fieldSize: 100,
      },
      isList: false,
      isRequired: false,
      isUnique: false,
      defaultValue: 'Scalar Default Value',
      relation: null,
    },
    {
      name: 'scalarList',
      displayName: 'Scalar List',
      description: null,
      fieldType: 'TEXT',
      fieldTypeAttributes: {
        format: 'UNFORMATTED',
        fieldSize: 100,
      },
      isList: true,
      isRequired: false,
      isUnique: false,
      defaultValue: 'Scalar List Default Value 1',
      relation: null,
    },
    {
      name: 'nestedRelation',
      displayName: 'Nested Relation',
      description: null,
      fieldType: 'RELATION',
      fieldTypeAttributes: null,
      isList: false,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      relation: {
        id: 'RELATION_FIELD_ID_5',
        relationTableName: 'RELATION_TABLE_NAME_3',
        relationFieldName: 'aid',
        refTable: {
          id: 'RELATION_TABLE_SCHEMA_ID',
        },
        refFieldIsList: false,
        refFieldIsRequired: true,
      },
    },
    {
      name: 'nestedRelationList',
      displayName: 'Nested Relation List',
      description: null,
      fieldType: 'RELATION',
      fieldTypeAttributes: null,
      isList: true,
      isRequired: false,
      isUnique: null,
      defaultValue: null,
      relation: {
        id: 'RELATION_FIELD_ID_6',
        relationTableName: 'RELATION_TABLE_NAME_4',
        relationFieldName: 'aid',
        refTable: {
          id: 'RELATION_TABLE_SCHEMA_ID',
        },
        refFieldIsList: false,
        refFieldIsRequired: true,
      },
    },
  ],
}];
