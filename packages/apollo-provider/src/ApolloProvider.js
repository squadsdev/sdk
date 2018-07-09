// @flow
import React, { PureComponent } from 'react';
import * as R from 'ramda';
import { ApolloProvider as DefaultApolloProvider } from 'react-apollo';

import { getFragmentsSchema } from './schemaLoader';

type ApolloClient = *;

type ApolloProviderState = {
  client: ?ApolloClient,
}

type ApolloProviderProps = {
  children: React$Node | ({ isLoading: boolean }) => React$Node,
  uri: string,
  getClient: (schema?: ?Object) => ?ApolloClient,
}

/**
 * Provider fetch interfaces fragments schema and create apollo client
 * @property {React$Node | Function} children Children of the provider. Could be either react node or function with loading state.
 * @property {string} uri Children 8base endpoint
 * @property {Function} getClient 8base endpoint
 */
class ApolloProvider extends PureComponent<ApolloProviderProps, ApolloProviderState> {
  state = {
    client: null,
  };

  async componentDidMount() {
    const { uri, getClient } = this.props;
    const schemaJson = await getFragmentsSchema(uri);
    const client = getClient(schemaJson);

    this.setState({ client });
  }

  render() {
    const { client } = this.state;
    const { children } = this.props;
    const isClientCreated = !R.isNil(client);
    const isLoading = !isClientCreated;

    const rendered = typeof children === 'function'
      ? children({ isLoading })
      : children;

    return isClientCreated
      ? (
        <DefaultApolloProvider client={ client }>
          { rendered }
        </DefaultApolloProvider>
      )
      : rendered;
  }
}


export { ApolloProvider };