query GetTags($storeId: uuid_comparison_exp) {
  tags(where: { store_id: $storeId }) {
    id
    name
    store_id
  }
}
`;

/**
* __useGetTagsQuery__
*
* To run a query within a React component, call `useGetTagsQuery` and pass it any options that fit your needs.
* When your component renders, `useGetTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useGetTagsQuery({
*   variables: {
*      storeId: // value for 'storeId'
*   },
* });
*/
export function useGetTagsQuery(
baseOptions?: Apollo.QueryHookOptions<GetTagsQuery, GetTagsQueryVariables>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useQuery<GetTagsQuery, GetTagsQueryVariables>(
  GetTagsDocument,
  options
);
}
export function useGetTagsLazyQuery(
baseOptions?: Apollo.LazyQueryHookOptions<GetTagsQuery, GetTagsQueryVariables>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useLazyQuery<GetTagsQuery, GetTagsQueryVariables>(
  GetTagsDocument,
  options
);
}
export type GetTagsQueryHookResult = ReturnType<typeof useGetTagsQuery>;
export type GetTagsLazyQueryHookResult = ReturnType<typeof useGetTagsLazyQuery>;
export type GetTagsQueryResult = Apollo.QueryResult<
GetTagsQuery,
GetTagsQueryVariables
>;
export const GetDetailsForBulkBookingDocument = gql`
query GetDetailsForBulkBooking($ids: [uuid!]) {
  salesOrders: sales_orders(
    where: {
      _and: {
        fulfilment_shipments: { status: { _eq: DRAFT } }
        id: { _in: $ids }
      }
    }
  ) {
    id
    fulfilmentShipments: fulfilment_shipments(
      where: { status: { _eq: DRAFT } }
    ) {
      ...BulkActionFulfilmentShipment
    }
  }
}
${BulkActionFulfilmentShipmentFragmentDoc}
`;

/**
* __useGetDetailsForBulkBookingQuery__
*
* To run a query within a React component, call `useGetDetailsForBulkBookingQuery` and pass it any options that fit your needs.
* When your component renders, `useGetDetailsForBulkBookingQuery` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useGetDetailsForBulkBookingQuery({
*   variables: {
*      ids: // value for 'ids'
*   },
* });
*/
export function useGetDetailsForBulkBookingQuery(
baseOptions?: Apollo.QueryHookOptions<
  GetDetailsForBulkBookingQuery,
  GetDetailsForBulkBookingQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useQuery<
  GetDetailsForBulkBookingQuery,
  GetDetailsForBulkBookingQueryVariables
>(GetDetailsForBulkBookingDocument, options);
}
export function useGetDetailsForBulkBookingLazyQuery(
baseOptions?: Apollo.LazyQueryHookOptions<
  GetDetailsForBulkBookingQuery,
  GetDetailsForBulkBookingQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useLazyQuery<
  GetDetailsForBulkBookingQuery,
  GetDetailsForBulkBookingQueryVariables
>(GetDetailsForBulkBookingDocument, options);
}
export type GetDetailsForBulkBookingQueryHookResult = ReturnType<
typeof useGetDetailsForBulkBookingQuery
>;
export type GetDetailsForBulkBookingLazyQueryHookResult = ReturnType<
typeof useGetDetailsForBulkBookingLazyQuery
>;
export type GetDetailsForBulkBookingQueryResult = Apollo.QueryResult<
GetDetailsForBulkBookingQuery,
GetDetailsForBulkBookingQueryVariables
>;
export const GetDetailsForBulkCancellingDocument = gql`
query GetDetailsForBulkCancelling($ids: [uuid!]) {
  salesOrders: sales_orders(
    where: {
      _and: {
        fulfilment_shipments: {
          source: { _neq: EXTERNAL }
          status: { _eq: UNSENT }
        }
        id: { _in: $ids }
      }
    }
  ) {
    id
    fulfilmentShipments: fulfilment_shipments(
      where: { source: { _neq: EXTERNAL }, status: { _eq: UNSENT } }
    ) {
      ...BulkActionFulfilmentShipment
    }
  }
}
${BulkActionFulfilmentShipmentFragmentDoc}
`;

/**
* __useGetDetailsForBulkCancellingQuery__
*
* To run a query within a React component, call `useGetDetailsForBulkCancellingQuery` and pass it any options that fit your needs.
* When your component renders, `useGetDetailsForBulkCancellingQuery` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useGetDetailsForBulkCancellingQuery({
*   variables: {
*      ids: // value for 'ids'
*   },
* });
*/
export function useGetDetailsForBulkCancellingQuery(
baseOptions?: Apollo.QueryHookOptions<
  GetDetailsForBulkCancellingQuery,
  GetDetailsForBulkCancellingQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useQuery<
  GetDetailsForBulkCancellingQuery,
  GetDetailsForBulkCancellingQueryVariables
>(GetDetailsForBulkCancellingDocument, options);
}
export function useGetDetailsForBulkCancellingLazyQuery(
baseOptions?: Apollo.LazyQueryHookOptions<
  GetDetailsForBulkCancellingQuery,
  GetDetailsForBulkCancellingQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useLazyQuery<
  GetDetailsForBulkCancellingQuery,
  GetDetailsForBulkCancellingQueryVariables
>(GetDetailsForBulkCancellingDocument, options);
}
export type GetDetailsForBulkCancellingQueryHookResult = ReturnType<
typeof useGetDetailsForBulkCancellingQuery
>;
export type GetDetailsForBulkCancellingLazyQueryHookResult = ReturnType<
typeof useGetDetailsForBulkCancellingLazyQuery
>;
export type GetDetailsForBulkCancellingQueryResult = Apollo.QueryResult<
GetDetailsForBulkCancellingQuery,
GetDetailsForBulkCancellingQueryVariables
>;
export const OnSalesOrderRatesUpdatedDocument = gql`
subscription OnSalesOrderRatesUpdated($salesOrderId: uuid!) {
  salesOrder: sales_orders_by_pk(id: $salesOrderId) {
    id
    ...SalesOrderDraftFulfilmentShipmentWithRates
  }
}
${SalesOrderDraftFulfilmentShipmentWithRatesFragmentDoc}
`;

/**
* __useOnSalesOrderRatesUpdatedSubscription__
*
* To run a query within a React component, call `useOnSalesOrderRatesUpdatedSubscription` and pass it any options that fit your needs.
* When your component renders, `useOnSalesOrderRatesUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useOnSalesOrderRatesUpdatedSubscription({
*   variables: {
*      salesOrderId: // value for 'salesOrderId'
*   },
* });
*/
export function useOnSalesOrderRatesUpdatedSubscription(
baseOptions: Apollo.SubscriptionHookOptions<
  OnSalesOrderRatesUpdatedSubscription,
  OnSalesOrderRatesUpdatedSubscriptionVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useSubscription<
  OnSalesOrderRatesUpdatedSubscription,
  OnSalesOrderRatesUpdatedSubscriptionVariables
>(OnSalesOrderRatesUpdatedDocument, options);
}
export type OnSalesOrderRatesUpdatedSubscriptionHookResult = ReturnType<
typeof useOnSalesOrderRatesUpdatedSubscription
>;
export type OnSalesOrderRatesUpdatedSubscriptionResult =
Apollo.SubscriptionResult<OnSalesOrderRatesUpdatedSubscription>;
export const SalesOrderCommandDocument = gql`
mutation SalesOrderCommand($command: SalesOrderCommand!, $storeId: uuid!) {
  handleSalesOrderCommand: command_sales_order(
    command: $command
    storeId: $storeId
  ) {
    outcome
    error
    salesOrderId
  }
}
`;
export type SalesOrderCommandMutationFn = Apollo.MutationFunction<
SalesOrderCommandMutation,
SalesOrderCommandMutationVariables
>;

/**
* __useSalesOrderCommandMutation__
*
* To run a mutation, you first call `useSalesOrderCommandMutation` within a React component and pass it any options that fit your needs.
* When your component renders, `useSalesOrderCommandMutation` returns a tuple that includes:
* - A mutate function that you can call at any time to execute the mutation
* - An object with fields that represent the current status of the mutation's execution
*
* @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
*
* @example
* const [salesOrderCommandMutation, { data, loading, error }] = useSalesOrderCommandMutation({
*   variables: {
*      command: // value for 'command'
*      storeId: // value for 'storeId'
*   },
* });
*/
export function useSalesOrderCommandMutation(
baseOptions?: Apollo.MutationHookOptions<
  SalesOrderCommandMutation,
  SalesOrderCommandMutationVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useMutation<
  SalesOrderCommandMutation,
  SalesOrderCommandMutationVariables
>(SalesOrderCommandDocument, options);
}
export type SalesOrderCommandMutationHookResult = ReturnType<
typeof useSalesOrderCommandMutation
>;
export type SalesOrderCommandMutationResult =
Apollo.MutationResult<SalesOrderCommandMutation>;
export type SalesOrderCommandMutationOptions = Apollo.BaseMutationOptions<
SalesOrderCommandMutation,
SalesOrderCommandMutationVariables
>;
export const GetSalesOrderWithFulfilmentShipmentsDocument = gql`
query GetSalesOrderWithFulfilmentShipments($salesOrderId: uuid!) {
  salesOrder: sales_orders_by_pk(id: $salesOrderId) {
    ...SalesOrderWithShipments
  }
}
${SalesOrderWithShipmentsFragmentDoc}
`;

/**
* __useGetSalesOrderWithFulfilmentShipmentsQuery__
*
* To run a query within a React component, call `useGetSalesOrderWithFulfilmentShipmentsQuery` and pass it any options that fit your needs.
* When your component renders, `useGetSalesOrderWithFulfilmentShipmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useGetSalesOrderWithFulfilmentShipmentsQuery({
*   variables: {
*      salesOrderId: // value for 'salesOrderId'
*   },
* });
*/
export function useGetSalesOrderWithFulfilmentShipmentsQuery(
baseOptions: Apollo.QueryHookOptions<
  GetSalesOrderWithFulfilmentShipmentsQuery,
  GetSalesOrderWithFulfilmentShipmentsQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useQuery<
  GetSalesOrderWithFulfilmentShipmentsQuery,
  GetSalesOrderWithFulfilmentShipmentsQueryVariables
>(GetSalesOrderWithFulfilmentShipmentsDocument, options);
}
export function useGetSalesOrderWithFulfilmentShipmentsLazyQuery(
baseOptions?: Apollo.LazyQueryHookOptions<
  GetSalesOrderWithFulfilmentShipmentsQuery,
  GetSalesOrderWithFulfilmentShipmentsQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useLazyQuery<
  GetSalesOrderWithFulfilmentShipmentsQuery,
  GetSalesOrderWithFulfilmentShipmentsQueryVariables
>(GetSalesOrderWithFulfilmentShipmentsDocument, options);
}
export type GetSalesOrderWithFulfilmentShipmentsQueryHookResult = ReturnType<
typeof useGetSalesOrderWithFulfilmentShipmentsQuery
>;
export type GetSalesOrderWithFulfilmentShipmentsLazyQueryHookResult =
ReturnType<typeof useGetSalesOrderWithFulfilmentShipmentsLazyQuery>;
export type GetSalesOrderWithFulfilmentShipmentsQueryResult =
Apollo.QueryResult<
  GetSalesOrderWithFulfilmentShipmentsQuery,
  GetSalesOrderWithFulfilmentShipmentsQueryVariables
>;
export const OnSalesOrderTrackingDataUpdatedDocument = gql`
subscription OnSalesOrderTrackingDataUpdated($salesOrderId: uuid!) {
  salesOrder: sales_orders_by_pk(id: $salesOrderId) {
    fulfilmentShipments: fulfilment_shipments(
      where: { source: { _neq: EXTERNAL }, status: { _eq: UNSENT } }
    ) {
      id
      trackingNumber: tracking_number
      trackingUrl: tracking_url
    }
  }
}
`;

/**
* __useOnSalesOrderTrackingDataUpdatedSubscription__
*
* To run a query within a React component, call `useOnSalesOrderTrackingDataUpdatedSubscription` and pass it any options that fit your needs.
* When your component renders, `useOnSalesOrderTrackingDataUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useOnSalesOrderTrackingDataUpdatedSubscription({
*   variables: {
*      salesOrderId: // value for 'salesOrderId'
*   },
* });
*/
export function useOnSalesOrderTrackingDataUpdatedSubscription(
baseOptions: Apollo.SubscriptionHookOptions<
  OnSalesOrderTrackingDataUpdatedSubscription,
  OnSalesOrderTrackingDataUpdatedSubscriptionVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useSubscription<
  OnSalesOrderTrackingDataUpdatedSubscription,
  OnSalesOrderTrackingDataUpdatedSubscriptionVariables
>(OnSalesOrderTrackingDataUpdatedDocument, options);
}
export type OnSalesOrderTrackingDataUpdatedSubscriptionHookResult = ReturnType<
typeof useOnSalesOrderTrackingDataUpdatedSubscription
>;
export type OnSalesOrderTrackingDataUpdatedSubscriptionResult =
Apollo.SubscriptionResult<OnSalesOrderTrackingDataUpdatedSubscription>;
export const OnSalesOrderUpdatedDocument = gql`
subscription OnSalesOrderUpdated($salesOrderId: uuid!) {
  salesOrder: sales_orders_by_pk(id: $salesOrderId) {
    ...SalesOrderWithShipments
  }
}
${SalesOrderWithShipmentsFragmentDoc}
`;

/**
* __useOnSalesOrderUpdatedSubscription__
*
* To run a query within a React component, call `useOnSalesOrderUpdatedSubscription` and pass it any options that fit your needs.
* When your component renders, `useOnSalesOrderUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useOnSalesOrderUpdatedSubscription({
*   variables: {
*      salesOrderId: // value for 'salesOrderId'
*   },
* });
*/
export function useOnSalesOrderUpdatedSubscription(
baseOptions: Apollo.SubscriptionHookOptions<
  OnSalesOrderUpdatedSubscription,
  OnSalesOrderUpdatedSubscriptionVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useSubscription<
  OnSalesOrderUpdatedSubscription,
  OnSalesOrderUpdatedSubscriptionVariables
>(OnSalesOrderUpdatedDocument, options);
}
export type OnSalesOrderUpdatedSubscriptionHookResult = ReturnType<
typeof useOnSalesOrderUpdatedSubscription
>;
export type OnSalesOrderUpdatedSubscriptionResult =
Apollo.SubscriptionResult<OnSalesOrderUpdatedSubscription>;
export const GetSalesOrdersWithFulfilmentShipmentsDocument = gql`
query GetSalesOrdersWithFulfilmentShipments(
  $where: sales_order_bool_exp!
  $orderBy: [sales_order_order_by!]
  $storeId: uuid!
  $limit: Int
  $offset: Int
) {
  salesOrders: sales_orders(
    order_by: $orderBy
    where: { store_id: { _eq: $storeId }, _and: [$where] }
    limit: $limit
    offset: $offset
  ) {
    ...SalesOrderWithShipments
  }
  salesOrdersAggregate: sales_orders_aggregate(
    where: { store_id: { _eq: $storeId }, _and: [$where] }
  ) {
    aggregate {
      count
    }
  }
}
${SalesOrderWithShipmentsFragmentDoc}
`;

/**
* __useGetSalesOrdersWithFulfilmentShipmentsQuery__
*
* To run a query within a React component, call `useGetSalesOrdersWithFulfilmentShipmentsQuery` and pass it any options that fit your needs.
* When your component renders, `useGetSalesOrdersWithFulfilmentShipmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useGetSalesOrdersWithFulfilmentShipmentsQuery({
*   variables: {
*      where: // value for 'where'
*      orderBy: // value for 'orderBy'
*      storeId: // value for 'storeId'
*      limit: // value for 'limit'
*      offset: // value for 'offset'
*   },
* });
*/
export function useGetSalesOrdersWithFulfilmentShipmentsQuery(
baseOptions: Apollo.QueryHookOptions<
  GetSalesOrdersWithFulfilmentShipmentsQuery,
  GetSalesOrdersWithFulfilmentShipmentsQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useQuery<
  GetSalesOrdersWithFulfilmentShipmentsQuery,
  GetSalesOrdersWithFulfilmentShipmentsQueryVariables
>(GetSalesOrdersWithFulfilmentShipmentsDocument, options);
}
export function useGetSalesOrdersWithFulfilmentShipmentsLazyQuery(
baseOptions?: Apollo.LazyQueryHookOptions<
  GetSalesOrdersWithFulfilmentShipmentsQuery,
  GetSalesOrdersWithFulfilmentShipmentsQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useLazyQuery<
  GetSalesOrdersWithFulfilmentShipmentsQuery,
  GetSalesOrdersWithFulfilmentShipmentsQueryVariables
>(GetSalesOrdersWithFulfilmentShipmentsDocument, options);
}
export type GetSalesOrdersWithFulfilmentShipmentsQueryHookResult = ReturnType<
typeof useGetSalesOrdersWithFulfilmentShipmentsQuery
>;
export type GetSalesOrdersWithFulfilmentShipmentsLazyQueryHookResult =
ReturnType<typeof useGetSalesOrdersWithFulfilmentShipmentsLazyQuery>;
export type GetSalesOrdersWithFulfilmentShipmentsQueryResult =
Apollo.QueryResult<
  GetSalesOrdersWithFulfilmentShipmentsQuery,
  GetSalesOrdersWithFulfilmentShipmentsQueryVariables
>;
export const OnSalesOrdersWithFulfilmentShipmentsUpdatedDocument = gql`
subscription OnSalesOrdersWithFulfilmentShipmentsUpdated(
  $where: sales_order_bool_exp!
  $orderBy: [sales_order_order_by!]
  $storeId: uuid!
  $limit: Int
  $offset: Int
) {
  salesOrders: sales_orders(
    order_by: $orderBy
    where: { store_id: { _eq: $storeId }, _and: [$where] }
    limit: $limit
    offset: $offset
  ) {
    ...SalesOrderWithFulfilmentShipmentsSubscription
  }
}
${SalesOrderWithFulfilmentShipmentsSubscriptionFragmentDoc}
`;

/**
* __useOnSalesOrdersWithFulfilmentShipmentsUpdatedSubscription__
*
* To run a query within a React component, call `useOnSalesOrdersWithFulfilmentShipmentsUpdatedSubscription` and pass it any options that fit your needs.
* When your component renders, `useOnSalesOrdersWithFulfilmentShipmentsUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useOnSalesOrdersWithFulfilmentShipmentsUpdatedSubscription({
*   variables: {
*      where: // value for 'where'
*      orderBy: // value for 'orderBy'
*      storeId: // value for 'storeId'
*      limit: // value for 'limit'
*      offset: // value for 'offset'
*   },
* });
*/
export function useOnSalesOrdersWithFulfilmentShipmentsUpdatedSubscription(
baseOptions: Apollo.SubscriptionHookOptions<
  OnSalesOrdersWithFulfilmentShipmentsUpdatedSubscription,
  OnSalesOrdersWithFulfilmentShipmentsUpdatedSubscriptionVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useSubscription<
  OnSalesOrdersWithFulfilmentShipmentsUpdatedSubscription,
  OnSalesOrdersWithFulfilmentShipmentsUpdatedSubscriptionVariables
>(OnSalesOrdersWithFulfilmentShipmentsUpdatedDocument, options);
}
export type OnSalesOrdersWithFulfilmentShipmentsUpdatedSubscriptionHookResult =
ReturnType<typeof useOnSalesOrdersWithFulfilmentShipmentsUpdatedSubscription>;
export type OnSalesOrdersWithFulfilmentShipmentsUpdatedSubscriptionResult =
Apollo.SubscriptionResult<OnSalesOrdersWithFulfilmentShipmentsUpdatedSubscription>;
export const OnSalesOrdersWithFulfilmentShipmentsCountUpdatedDocument = gql`
subscription OnSalesOrdersWithFulfilmentShipmentsCountUpdated(
  $where: sales_order_bool_exp!
  $storeId: uuid!
) {
  salesOrdersAggregate: sales_orders_aggregate(
    where: { store_id: { _eq: $storeId }, _and: [$where] }
  ) {
    aggregate {
      count
    }
  }
}
`;

/**
* __useOnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscription__
*
* To run a query within a React component, call `useOnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscription` and pass it any options that fit your needs.
* When your component renders, `useOnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useOnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscription({
*   variables: {
*      where: // value for 'where'
*      storeId: // value for 'storeId'
*   },
* });
*/
export function useOnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscription(
baseOptions: Apollo.SubscriptionHookOptions<
  OnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscription,
  OnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscriptionVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useSubscription<
  OnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscription,
  OnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscriptionVariables
>(OnSalesOrdersWithFulfilmentShipmentsCountUpdatedDocument, options);
}
export type OnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscriptionHookResult =
ReturnType<
  typeof useOnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscription
>;
export type OnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscriptionResult =
Apollo.SubscriptionResult<OnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscription>;
export const SalesOrderTabCountsDocument = gql`
query SalesOrderTabCounts($storeId: uuid!) {
  open: fulfilment_shipments_aggregate(
    where: {
      status: { _eq: DRAFT }
      store_id: { _eq: $storeId }
      sales_order: { status: { _nin: [ARCHIVED, CANCELLED] } }
    }
  ) {
    ...FulfilmentShipmentCount
  }
  processing: fulfilment_shipments_aggregate(
    where: {
      status: { _eq: PROCESSING_AT_SKUTOPIA }
      store_id: { _eq: $storeId }
      sales_order: { status: { _nin: [ARCHIVED, CANCELLED] } }
    }
  ) {
    ...FulfilmentShipmentCount
  }
  scheduled: fulfilment_shipments_aggregate(
    where: {
      source: { _neq: EXTERNAL }
      status: { _eq: UNSENT }
      store_id: { _eq: $storeId }
      sales_order: { status: { _nin: [ARCHIVED, CANCELLED] } }
      scheduled_pickup_date: { _is_null: false }
    }
  ) {
    ...FulfilmentShipmentCount
  }
  awaitingCarrier: fulfilment_shipments_aggregate(
    where: {
      source: { _neq: EXTERNAL }
      status: { _eq: UNSENT }
      store_id: { _eq: $storeId }
      sales_order: { status: { _nin: [ARCHIVED, CANCELLED] } }
      scheduled_pickup_date: { _is_null: true }
    }
  ) {
    ...FulfilmentShipmentCount
  }
  review: fulfilment_shipments_aggregate(
    where: {
      status: { _eq: DRAFT }
      store_id: { _eq: $storeId }
      selected_rate_id: { _is_null: true }
      sales_order: { status: { _nin: [ARCHIVED, CANCELLED] } }
    }
  ) {
    ...FulfilmentShipmentCount
  }
}
${FulfilmentShipmentCountFragmentDoc}
`;

/**
* __useSalesOrderTabCountsQuery__
*
* To run a query within a React component, call `useSalesOrderTabCountsQuery` and pass it any options that fit your needs.
* When your component renders, `useSalesOrderTabCountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useSalesOrderTabCountsQuery({
*   variables: {
*      storeId: // value for 'storeId'
*   },
* });
*/
export function useSalesOrderTabCountsQuery(
baseOptions: Apollo.QueryHookOptions<
  SalesOrderTabCountsQuery,
  SalesOrderTabCountsQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useQuery<
  SalesOrderTabCountsQuery,
  SalesOrderTabCountsQueryVariables
>(SalesOrderTabCountsDocument, options);
}
export function useSalesOrderTabCountsLazyQuery(
baseOptions?: Apollo.LazyQueryHookOptions<
  SalesOrderTabCountsQuery,
  SalesOrderTabCountsQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useLazyQuery<
  SalesOrderTabCountsQuery,
  SalesOrderTabCountsQueryVariables
>(SalesOrderTabCountsDocument, options);
}
export type SalesOrderTabCountsQueryHookResult = ReturnType<
typeof useSalesOrderTabCountsQuery
>;
export type SalesOrderTabCountsLazyQueryHookResult = ReturnType<
typeof useSalesOrderTabCountsLazyQuery
>;
export type SalesOrderTabCountsQueryResult = Apollo.QueryResult<
SalesOrderTabCountsQuery,
SalesOrderTabCountsQueryVariables
>;
export const OnSalesOrderTabCountsUpdatedDocument = gql`
subscription OnSalesOrderTabCountsUpdated(
  $source: String
  $storeId: uuid!
  $status: shipment_status_enum!
  $scheduled_pickup_date: Int
) {
  open: fulfilment_shipments_aggregate(
    where: {
      status: { _eq: $status }
      store_id: { _eq: $storeId }
      sales_order: { status: { _nin: [ARCHIVED, CANCELLED] } }
    }
  ) {
    ...FulfilmentShipmentCount
  }
}
${FulfilmentShipmentCountFragmentDoc}
`;

/**
* __useOnSalesOrderTabCountsUpdatedSubscription__
*
* To run a query within a React component, call `useOnSalesOrderTabCountsUpdatedSubscription` and pass it any options that fit your needs.
* When your component renders, `useOnSalesOrderTabCountsUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useOnSalesOrderTabCountsUpdatedSubscription({
*   variables: {
*      source: // value for 'source'
*      storeId: // value for 'storeId'
*      status: // value for 'status'
*      scheduled_pickup_date: // value for 'scheduled_pickup_date'
*   },
* });
*/
export function useOnSalesOrderTabCountsUpdatedSubscription(
baseOptions: Apollo.SubscriptionHookOptions<
  OnSalesOrderTabCountsUpdatedSubscription,
  OnSalesOrderTabCountsUpdatedSubscriptionVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useSubscription<
  OnSalesOrderTabCountsUpdatedSubscription,
  OnSalesOrderTabCountsUpdatedSubscriptionVariables
>(OnSalesOrderTabCountsUpdatedDocument, options);
}
export type OnSalesOrderTabCountsUpdatedSubscriptionHookResult = ReturnType<
typeof useOnSalesOrderTabCountsUpdatedSubscription
>;
export type OnSalesOrderTabCountsUpdatedSubscriptionResult =
Apollo.SubscriptionResult<OnSalesOrderTabCountsUpdatedSubscription>;
export const GetOrderDetailsForBulkBookingByIdsDocument = gql`
query GetOrderDetailsForBulkBookingByIds($ids: [uuid!]) {
  salesOrders: sales_orders(
    where: {
      _and: {
        fulfilment_shipments: { status: { _eq: DRAFT } }
        id: { _in: $ids }
      }
    }
  ) {
    ...SalesOrderWithUncancelledShipmentListing
  }
}
${SalesOrderWithUncancelledShipmentListingFragmentDoc}
`;

/**
* __useGetOrderDetailsForBulkBookingByIdsQuery__
*
* To run a query within a React component, call `useGetOrderDetailsForBulkBookingByIdsQuery` and pass it any options that fit your needs.
* When your component renders, `useGetOrderDetailsForBulkBookingByIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useGetOrderDetailsForBulkBookingByIdsQuery({
*   variables: {
*      ids: // value for 'ids'
*   },
* });
*/
export function useGetOrderDetailsForBulkBookingByIdsQuery(
baseOptions?: Apollo.QueryHookOptions<
  GetOrderDetailsForBulkBookingByIdsQuery,
  GetOrderDetailsForBulkBookingByIdsQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useQuery<
  GetOrderDetailsForBulkBookingByIdsQuery,
  GetOrderDetailsForBulkBookingByIdsQueryVariables
>(GetOrderDetailsForBulkBookingByIdsDocument, options);
}
export function useGetOrderDetailsForBulkBookingByIdsLazyQuery(
baseOptions?: Apollo.LazyQueryHookOptions<
  GetOrderDetailsForBulkBookingByIdsQuery,
  GetOrderDetailsForBulkBookingByIdsQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useLazyQuery<
  GetOrderDetailsForBulkBookingByIdsQuery,
  GetOrderDetailsForBulkBookingByIdsQueryVariables
>(GetOrderDetailsForBulkBookingByIdsDocument, options);
}
export type GetOrderDetailsForBulkBookingByIdsQueryHookResult = ReturnType<
typeof useGetOrderDetailsForBulkBookingByIdsQuery
>;
export type GetOrderDetailsForBulkBookingByIdsLazyQueryHookResult = ReturnType<
typeof useGetOrderDetailsForBulkBookingByIdsLazyQuery
>;
export type GetOrderDetailsForBulkBookingByIdsQueryResult = Apollo.QueryResult<
GetOrderDetailsForBulkBookingByIdsQuery,
GetOrderDetailsForBulkBookingByIdsQueryVariables
>;
export const GetOrderDetailsForBulkCancellingByIdsDocument = gql`
query GetOrderDetailsForBulkCancellingByIds($ids: [uuid!], $storeId: uuid) {
  salesOrders: sales_orders(
    where: {
      _and: {
        fulfilment_shipments: {
          source: { _neq: EXTERNAL }
          status: { _eq: UNSENT }
        }
        id: { _in: $ids }
        store_id: { _eq: $storeId }
      }
    }
  ) {
    ...SalesOrderWithUncancelledShipmentListing
  }
}
${SalesOrderWithUncancelledShipmentListingFragmentDoc}
`;

/**
* __useGetOrderDetailsForBulkCancellingByIdsQuery__
*
* To run a query within a React component, call `useGetOrderDetailsForBulkCancellingByIdsQuery` and pass it any options that fit your needs.
* When your component renders, `useGetOrderDetailsForBulkCancellingByIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useGetOrderDetailsForBulkCancellingByIdsQuery({
*   variables: {
*      ids: // value for 'ids'
*      storeId: // value for 'storeId'
*   },
* });
*/
export function useGetOrderDetailsForBulkCancellingByIdsQuery(
baseOptions?: Apollo.QueryHookOptions<
  GetOrderDetailsForBulkCancellingByIdsQuery,
  GetOrderDetailsForBulkCancellingByIdsQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useQuery<
  GetOrderDetailsForBulkCancellingByIdsQuery,
  GetOrderDetailsForBulkCancellingByIdsQueryVariables
>(GetOrderDetailsForBulkCancellingByIdsDocument, options);
}
export function useGetOrderDetailsForBulkCancellingByIdsLazyQuery(
baseOptions?: Apollo.LazyQueryHookOptions<
  GetOrderDetailsForBulkCancellingByIdsQuery,
  GetOrderDetailsForBulkCancellingByIdsQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useLazyQuery<
  GetOrderDetailsForBulkCancellingByIdsQuery,
  GetOrderDetailsForBulkCancellingByIdsQueryVariables
>(GetOrderDetailsForBulkCancellingByIdsDocument, options);
}
export type GetOrderDetailsForBulkCancellingByIdsQueryHookResult = ReturnType<
typeof useGetOrderDetailsForBulkCancellingByIdsQuery
>;
export type GetOrderDetailsForBulkCancellingByIdsLazyQueryHookResult =
ReturnType<typeof useGetOrderDetailsForBulkCancellingByIdsLazyQuery>;
export type GetOrderDetailsForBulkCancellingByIdsQueryResult =
Apollo.QueryResult<
  GetOrderDetailsForBulkCancellingByIdsQuery,
  GetOrderDetailsForBulkCancellingByIdsQueryVariables
>;
export const GetSalesOrdersByIdsDocument = gql`
query GetSalesOrdersByIds($ids: [uuid!], $storeId: uuid) {
  salesOrders: sales_orders(
    where: { _and: { id: { _in: $ids }, store_id: { _eq: $storeId } } }
  ) {
    ...SalesOrderWithShipments
  }
}
${SalesOrderWithShipmentsFragmentDoc}
`;

/**
* __useGetSalesOrdersByIdsQuery__
*
* To run a query within a React component, call `useGetSalesOrdersByIdsQuery` and pass it any options that fit your needs.
* When your component renders, `useGetSalesOrdersByIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useGetSalesOrdersByIdsQuery({
*   variables: {
*      ids: // value for 'ids'
*      storeId: // value for 'storeId'
*   },
* });
*/
export function useGetSalesOrdersByIdsQuery(
baseOptions?: Apollo.QueryHookOptions<
  GetSalesOrdersByIdsQuery,
  GetSalesOrdersByIdsQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useQuery<
  GetSalesOrdersByIdsQuery,
  GetSalesOrdersByIdsQueryVariables
>(GetSalesOrdersByIdsDocument, options);
}
export function useGetSalesOrdersByIdsLazyQuery(
baseOptions?: Apollo.LazyQueryHookOptions<
  GetSalesOrdersByIdsQuery,
  GetSalesOrdersByIdsQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useLazyQuery<
  GetSalesOrdersByIdsQuery,
  GetSalesOrdersByIdsQueryVariables
>(GetSalesOrdersByIdsDocument, options);
}
export type GetSalesOrdersByIdsQueryHookResult = ReturnType<
typeof useGetSalesOrdersByIdsQuery
>;
export type GetSalesOrdersByIdsLazyQueryHookResult = ReturnType<
typeof useGetSalesOrdersByIdsLazyQuery
>;
export type GetSalesOrdersByIdsQueryResult = Apollo.QueryResult<
GetSalesOrdersByIdsQuery,
GetSalesOrdersByIdsQueryVariables
>;
export const OnSalesOrdersPackingSlipsReadyDocument = gql`
subscription OnSalesOrdersPackingSlipsReady($ids: [uuid!]!) {
  salesOrders: sales_orders(
    where: {
      _and: {
        id: { _in: $ids }
        fulfilment_shipments: {
          status: { _nin: [CANCELLED] }
          packing_slip_document_path: { _is_null: false }
        }
      }
    }
  ) {
    id
    fulfilmentShipments: fulfilment_shipments(
      where: { status: { _nin: [CANCELLED] } }
    ) {
      id
      packingSlipDocumentPath: packing_slip_document_path
    }
  }
}
`;

/**
* __useOnSalesOrdersPackingSlipsReadySubscription__
*
* To run a query within a React component, call `useOnSalesOrdersPackingSlipsReadySubscription` and pass it any options that fit your needs.
* When your component renders, `useOnSalesOrdersPackingSlipsReadySubscription` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useOnSalesOrdersPackingSlipsReadySubscription({
*   variables: {
*      ids: // value for 'ids'
*   },
* });
*/
export function useOnSalesOrdersPackingSlipsReadySubscription(
baseOptions: Apollo.SubscriptionHookOptions<
  OnSalesOrdersPackingSlipsReadySubscription,
  OnSalesOrdersPackingSlipsReadySubscriptionVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useSubscription<
  OnSalesOrdersPackingSlipsReadySubscription,
  OnSalesOrdersPackingSlipsReadySubscriptionVariables
>(OnSalesOrdersPackingSlipsReadyDocument, options);
}
export type OnSalesOrdersPackingSlipsReadySubscriptionHookResult = ReturnType<
typeof useOnSalesOrdersPackingSlipsReadySubscription
>;
export type OnSalesOrdersPackingSlipsReadySubscriptionResult =
Apollo.SubscriptionResult<OnSalesOrdersPackingSlipsReadySubscription>;
export const SalesOrdersCommandDocument = gql`
mutation SalesOrdersCommand($command: SalesOrdersCommand!, $storeId: uuid!) {
  handleSalesOrdersCommand: command_sales_orders(
    command: $command
    storeId: $storeId
  ) {
    outcome
    error
    url
    result {
      createdSalesOrders {
        salesOrderId
        orderReference
      }
      failedSalesOrders {
        reason
        orderReference
        salesOrderId
      }
    }
  }
}
`;
export type SalesOrdersCommandMutationFn = Apollo.MutationFunction<
SalesOrdersCommandMutation,
SalesOrdersCommandMutationVariables
>;

/**
* __useSalesOrdersCommandMutation__
*
* To run a mutation, you first call `useSalesOrdersCommandMutation` within a React component and pass it any options that fit your needs.
* When your component renders, `useSalesOrdersCommandMutation` returns a tuple that includes:
* - A mutate function that you can call at any time to execute the mutation
* - An object with fields that represent the current status of the mutation's execution
*
* @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
*
* @example
* const [salesOrdersCommandMutation, { data, loading, error }] = useSalesOrdersCommandMutation({
*   variables: {
*      command: // value for 'command'
*      storeId: // value for 'storeId'
*   },
* });
*/
export function useSalesOrdersCommandMutation(
baseOptions?: Apollo.MutationHookOptions<
  SalesOrdersCommandMutation,
  SalesOrdersCommandMutationVariables
>
query GetTags($storeId: uuid_comparison_exp) {
  tags(where: { store_id: $storeId }) {
    id
    name
    store_id
  }
}
`;

/**
* __useGetTagsQuery__
*
* To run a query within a React component, call `useGetTagsQuery` and pass it any options that fit your needs.
* When your component renders, `useGetTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useGetTagsQuery({
*   variables: {
*      storeId: // value for 'storeId'
*   },
* });
*/
export function useGetTagsQuery(
baseOptions?: Apollo.QueryHookOptions<GetTagsQuery, GetTagsQueryVariables>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useQuery<GetTagsQuery, GetTagsQueryVariables>(
  GetTagsDocument,
  options
);
}
export function useGetTagsLazyQuery(
baseOptions?: Apollo.LazyQueryHookOptions<GetTagsQuery, GetTagsQueryVariables>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useLazyQuery<GetTagsQuery, GetTagsQueryVariables>(
  GetTagsDocument,
  options
);
}
export type GetTagsQueryHookResult = ReturnType<typeof useGetTagsQuery>;
export type GetTagsLazyQueryHookResult = ReturnType<typeof useGetTagsLazyQuery>;
export type GetTagsQueryResult = Apollo.QueryResult<
GetTagsQuery,
GetTagsQueryVariables
>;
export const GetDetailsForBulkBookingDocument = gql`
query GetDetailsForBulkBooking($ids: [uuid!]) {
  salesOrders: sales_orders(
    where: {
      _and: {
        fulfilment_shipments: { status: { _eq: DRAFT } }
        id: { _in: $ids }
      }
    }
  ) {
    id
    fulfilmentShipments: fulfilment_shipments(
      where: { status: { _eq: DRAFT } }
    ) {
      ...BulkActionFulfilmentShipment
    }
  }
}
${BulkActionFulfilmentShipmentFragmentDoc}
`;

/**
* __useGetDetailsForBulkBookingQuery__
*
* To run a query within a React component, call `useGetDetailsForBulkBookingQuery` and pass it any options that fit your needs.
* When your component renders, `useGetDetailsForBulkBookingQuery` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useGetDetailsForBulkBookingQuery({
*   variables: {
*      ids: // value for 'ids'
*   },
* });
*/
export function useGetDetailsForBulkBookingQuery(
baseOptions?: Apollo.QueryHookOptions<
  GetDetailsForBulkBookingQuery,
  GetDetailsForBulkBookingQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useQuery<
  GetDetailsForBulkBookingQuery,
  GetDetailsForBulkBookingQueryVariables
>(GetDetailsForBulkBookingDocument, options);
}
export function useGetDetailsForBulkBookingLazyQuery(
baseOptions?: Apollo.LazyQueryHookOptions<
  GetDetailsForBulkBookingQuery,
  GetDetailsForBulkBookingQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useLazyQuery<
  GetDetailsForBulkBookingQuery,
  GetDetailsForBulkBookingQueryVariables
>(GetDetailsForBulkBookingDocument, options);
}
export type GetDetailsForBulkBookingQueryHookResult = ReturnType<
typeof useGetDetailsForBulkBookingQuery
>;
export type GetDetailsForBulkBookingLazyQueryHookResult = ReturnType<
typeof useGetDetailsForBulkBookingLazyQuery
>;
export type GetDetailsForBulkBookingQueryResult = Apollo.QueryResult<
GetDetailsForBulkBookingQuery,
GetDetailsForBulkBookingQueryVariables
>;
export const GetDetailsForBulkCancellingDocument = gql`
query GetDetailsForBulkCancelling($ids: [uuid!]) {
  salesOrders: sales_orders(
    where: {
      _and: {
        fulfilment_shipments: {
          source: { _neq: EXTERNAL }
          status: { _eq: UNSENT }
        }
        id: { _in: $ids }
      }
    }
  ) {
    id
    fulfilmentShipments: fulfilment_shipments(
      where: { source: { _neq: EXTERNAL }, status: { _eq: UNSENT } }
    ) {
      ...BulkActionFulfilmentShipment
    }
  }
}
${BulkActionFulfilmentShipmentFragmentDoc}
`;

/**
* __useGetDetailsForBulkCancellingQuery__
*
* To run a query within a React component, call `useGetDetailsForBulkCancellingQuery` and pass it any options that fit your needs.
* When your component renders, `useGetDetailsForBulkCancellingQuery` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useGetDetailsForBulkCancellingQuery({
*   variables: {
*      ids: // value for 'ids'
*   },
* });
*/
export function useGetDetailsForBulkCancellingQuery(
baseOptions?: Apollo.QueryHookOptions<
  GetDetailsForBulkCancellingQuery,
  GetDetailsForBulkCancellingQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useQuery<
  GetDetailsForBulkCancellingQuery,
  GetDetailsForBulkCancellingQueryVariables
>(GetDetailsForBulkCancellingDocument, options);
}
export function useGetDetailsForBulkCancellingLazyQuery(
baseOptions?: Apollo.LazyQueryHookOptions<
  GetDetailsForBulkCancellingQuery,
  GetDetailsForBulkCancellingQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useLazyQuery<
  GetDetailsForBulkCancellingQuery,
  GetDetailsForBulkCancellingQueryVariables
>(GetDetailsForBulkCancellingDocument, options);
}
export type GetDetailsForBulkCancellingQueryHookResult = ReturnType<
typeof useGetDetailsForBulkCancellingQuery
>;
export type GetDetailsForBulkCancellingLazyQueryHookResult = ReturnType<
typeof useGetDetailsForBulkCancellingLazyQuery
>;
export type GetDetailsForBulkCancellingQueryResult = Apollo.QueryResult<
GetDetailsForBulkCancellingQuery,
GetDetailsForBulkCancellingQueryVariables
>;
export const OnSalesOrderRatesUpdatedDocument = gql`
subscription OnSalesOrderRatesUpdated($salesOrderId: uuid!) {
  salesOrder: sales_orders_by_pk(id: $salesOrderId) {
    id
    ...SalesOrderDraftFulfilmentShipmentWithRates
  }
}
${SalesOrderDraftFulfilmentShipmentWithRatesFragmentDoc}
`;

/**
* __useOnSalesOrderRatesUpdatedSubscription__
*
* To run a query within a React component, call `useOnSalesOrderRatesUpdatedSubscription` and pass it any options that fit your needs.
* When your component renders, `useOnSalesOrderRatesUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useOnSalesOrderRatesUpdatedSubscription({
*   variables: {
*      salesOrderId: // value for 'salesOrderId'
*   },
* });
*/
export function useOnSalesOrderRatesUpdatedSubscription(
baseOptions: Apollo.SubscriptionHookOptions<
  OnSalesOrderRatesUpdatedSubscription,
  OnSalesOrderRatesUpdatedSubscriptionVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useSubscription<
  OnSalesOrderRatesUpdatedSubscription,
  OnSalesOrderRatesUpdatedSubscriptionVariables
>(OnSalesOrderRatesUpdatedDocument, options);
}
export type OnSalesOrderRatesUpdatedSubscriptionHookResult = ReturnType<
typeof useOnSalesOrderRatesUpdatedSubscription
>;
export type OnSalesOrderRatesUpdatedSubscriptionResult =
Apollo.SubscriptionResult<OnSalesOrderRatesUpdatedSubscription>;
export const SalesOrderCommandDocument = gql`
mutation SalesOrderCommand($command: SalesOrderCommand!, $storeId: uuid!) {
  handleSalesOrderCommand: command_sales_order(
    command: $command
    storeId: $storeId
  ) {
    outcome
    error
    salesOrderId
  }
}
`;
export type SalesOrderCommandMutationFn = Apollo.MutationFunction<
SalesOrderCommandMutation,
SalesOrderCommandMutationVariables
>;

/**
* __useSalesOrderCommandMutation__
*
* To run a mutation, you first call `useSalesOrderCommandMutation` within a React component and pass it any options that fit your needs.
* When your component renders, `useSalesOrderCommandMutation` returns a tuple that includes:
* - A mutate function that you can call at any time to execute the mutation
* - An object with fields that represent the current status of the mutation's execution
*
* @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
*
* @example
* const [salesOrderCommandMutation, { data, loading, error }] = useSalesOrderCommandMutation({
*   variables: {
*      command: // value for 'command'
*      storeId: // value for 'storeId'
*   },
* });
*/
export function useSalesOrderCommandMutation(
baseOptions?: Apollo.MutationHookOptions<
  SalesOrderCommandMutation,
  SalesOrderCommandMutationVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useMutation<
  SalesOrderCommandMutation,
  SalesOrderCommandMutationVariables
>(SalesOrderCommandDocument, options);
}
export type SalesOrderCommandMutationHookResult = ReturnType<
typeof useSalesOrderCommandMutation
>;
export type SalesOrderCommandMutationResult =
Apollo.MutationResult<SalesOrderCommandMutation>;
export type SalesOrderCommandMutationOptions = Apollo.BaseMutationOptions<
SalesOrderCommandMutation,
SalesOrderCommandMutationVariables
>;
export const GetSalesOrderWithFulfilmentShipmentsDocument = gql`
query GetSalesOrderWithFulfilmentShipments($salesOrderId: uuid!) {
  salesOrder: sales_orders_by_pk(id: $salesOrderId) {
    ...SalesOrderWithShipments
  }
}
${SalesOrderWithShipmentsFragmentDoc}
`;

/**
* __useGetSalesOrderWithFulfilmentShipmentsQuery__
*
* To run a query within a React component, call `useGetSalesOrderWithFulfilmentShipmentsQuery` and pass it any options that fit your needs.
* When your component renders, `useGetSalesOrderWithFulfilmentShipmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useGetSalesOrderWithFulfilmentShipmentsQuery({
*   variables: {
*      salesOrderId: // value for 'salesOrderId'
*   },
* });
*/
export function useGetSalesOrderWithFulfilmentShipmentsQuery(
baseOptions: Apollo.QueryHookOptions<
  GetSalesOrderWithFulfilmentShipmentsQuery,
  GetSalesOrderWithFulfilmentShipmentsQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useQuery<
  GetSalesOrderWithFulfilmentShipmentsQuery,
  GetSalesOrderWithFulfilmentShipmentsQueryVariables
>(GetSalesOrderWithFulfilmentShipmentsDocument, options);
}
export function useGetSalesOrderWithFulfilmentShipmentsLazyQuery(
baseOptions?: Apollo.LazyQueryHookOptions<
  GetSalesOrderWithFulfilmentShipmentsQuery,
  GetSalesOrderWithFulfilmentShipmentsQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useLazyQuery<
  GetSalesOrderWithFulfilmentShipmentsQuery,
  GetSalesOrderWithFulfilmentShipmentsQueryVariables
>(GetSalesOrderWithFulfilmentShipmentsDocument, options);
}
export type GetSalesOrderWithFulfilmentShipmentsQueryHookResult = ReturnType<
typeof useGetSalesOrderWithFulfilmentShipmentsQuery
>;
export type GetSalesOrderWithFulfilmentShipmentsLazyQueryHookResult =
ReturnType<typeof useGetSalesOrderWithFulfilmentShipmentsLazyQuery>;
export type GetSalesOrderWithFulfilmentShipmentsQueryResult =
Apollo.QueryResult<
  GetSalesOrderWithFulfilmentShipmentsQuery,
  GetSalesOrderWithFulfilmentShipmentsQueryVariables
>;
export const OnSalesOrderTrackingDataUpdatedDocument = gql`
subscription OnSalesOrderTrackingDataUpdated($salesOrderId: uuid!) {
  salesOrder: sales_orders_by_pk(id: $salesOrderId) {
    fulfilmentShipments: fulfilment_shipments(
      where: { source: { _neq: EXTERNAL }, status: { _eq: UNSENT } }
    ) {
      id
      trackingNumber: tracking_number
      trackingUrl: tracking_url
    }
  }
}
`;

/**
* __useOnSalesOrderTrackingDataUpdatedSubscription__
*
* To run a query within a React component, call `useOnSalesOrderTrackingDataUpdatedSubscription` and pass it any options that fit your needs.
* When your component renders, `useOnSalesOrderTrackingDataUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useOnSalesOrderTrackingDataUpdatedSubscription({
*   variables: {
*      salesOrderId: // value for 'salesOrderId'
*   },
* });
*/
export function useOnSalesOrderTrackingDataUpdatedSubscription(
baseOptions: Apollo.SubscriptionHookOptions<
  OnSalesOrderTrackingDataUpdatedSubscription,
  OnSalesOrderTrackingDataUpdatedSubscriptionVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useSubscription<
  OnSalesOrderTrackingDataUpdatedSubscription,
  OnSalesOrderTrackingDataUpdatedSubscriptionVariables
>(OnSalesOrderTrackingDataUpdatedDocument, options);
}
export type OnSalesOrderTrackingDataUpdatedSubscriptionHookResult = ReturnType<
typeof useOnSalesOrderTrackingDataUpdatedSubscription
>;
export type OnSalesOrderTrackingDataUpdatedSubscriptionResult =
Apollo.SubscriptionResult<OnSalesOrderTrackingDataUpdatedSubscription>;
export const OnSalesOrderUpdatedDocument = gql`
subscription OnSalesOrderUpdated($salesOrderId: uuid!) {
  salesOrder: sales_orders_by_pk(id: $salesOrderId) {
    ...SalesOrderWithShipments
  }
}
${SalesOrderWithShipmentsFragmentDoc}
`;

/**
* __useOnSalesOrderUpdatedSubscription__
*
* To run a query within a React component, call `useOnSalesOrderUpdatedSubscription` and pass it any options that fit your needs.
* When your component renders, `useOnSalesOrderUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useOnSalesOrderUpdatedSubscription({
*   variables: {
*      salesOrderId: // value for 'salesOrderId'
*   },
* });
*/
export function useOnSalesOrderUpdatedSubscription(
baseOptions: Apollo.SubscriptionHookOptions<
  OnSalesOrderUpdatedSubscription,
  OnSalesOrderUpdatedSubscriptionVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useSubscription<
  OnSalesOrderUpdatedSubscription,
  OnSalesOrderUpdatedSubscriptionVariables
>(OnSalesOrderUpdatedDocument, options);
}
export type OnSalesOrderUpdatedSubscriptionHookResult = ReturnType<
typeof useOnSalesOrderUpdatedSubscription
>;
export type OnSalesOrderUpdatedSubscriptionResult =
Apollo.SubscriptionResult<OnSalesOrderUpdatedSubscription>;
export const GetSalesOrdersWithFulfilmentShipmentsDocument = gql`
query GetSalesOrdersWithFulfilmentShipments(
  $where: sales_order_bool_exp!
  $orderBy: [sales_order_order_by!]
  $storeId: uuid!
  $limit: Int
  $offset: Int
) {
  salesOrders: sales_orders(
    order_by: $orderBy
    where: { store_id: { _eq: $storeId }, _and: [$where] }
    limit: $limit
    offset: $offset
  ) {
    ...SalesOrderWithShipments
  }
  salesOrdersAggregate: sales_orders_aggregate(
    where: { store_id: { _eq: $storeId }, _and: [$where] }
  ) {
    aggregate {
      count
    }
  }
}
${SalesOrderWithShipmentsFragmentDoc}
`;

/**
* __useGetSalesOrdersWithFulfilmentShipmentsQuery__
*
* To run a query within a React component, call `useGetSalesOrdersWithFulfilmentShipmentsQuery` and pass it any options that fit your needs.
* When your component renders, `useGetSalesOrdersWithFulfilmentShipmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useGetSalesOrdersWithFulfilmentShipmentsQuery({
*   variables: {
*      where: // value for 'where'
*      orderBy: // value for 'orderBy'
*      storeId: // value for 'storeId'
*      limit: // value for 'limit'
*      offset: // value for 'offset'
*   },
* });
*/
export function useGetSalesOrdersWithFulfilmentShipmentsQuery(
baseOptions: Apollo.QueryHookOptions<
  GetSalesOrdersWithFulfilmentShipmentsQuery,
  GetSalesOrdersWithFulfilmentShipmentsQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useQuery<
  GetSalesOrdersWithFulfilmentShipmentsQuery,
  GetSalesOrdersWithFulfilmentShipmentsQueryVariables
>(GetSalesOrdersWithFulfilmentShipmentsDocument, options);
}
export function useGetSalesOrdersWithFulfilmentShipmentsLazyQuery(
baseOptions?: Apollo.LazyQueryHookOptions<
  GetSalesOrdersWithFulfilmentShipmentsQuery,
  GetSalesOrdersWithFulfilmentShipmentsQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useLazyQuery<
  GetSalesOrdersWithFulfilmentShipmentsQuery,
  GetSalesOrdersWithFulfilmentShipmentsQueryVariables
>(GetSalesOrdersWithFulfilmentShipmentsDocument, options);
}
export type GetSalesOrdersWithFulfilmentShipmentsQueryHookResult = ReturnType<
typeof useGetSalesOrdersWithFulfilmentShipmentsQuery
>;
export type GetSalesOrdersWithFulfilmentShipmentsLazyQueryHookResult =
ReturnType<typeof useGetSalesOrdersWithFulfilmentShipmentsLazyQuery>;
export type GetSalesOrdersWithFulfilmentShipmentsQueryResult =
Apollo.QueryResult<
  GetSalesOrdersWithFulfilmentShipmentsQuery,
  GetSalesOrdersWithFulfilmentShipmentsQueryVariables
>;
export const OnSalesOrdersWithFulfilmentShipmentsUpdatedDocument = gql`
subscription OnSalesOrdersWithFulfilmentShipmentsUpdated(
  $where: sales_order_bool_exp!
  $orderBy: [sales_order_order_by!]
  $storeId: uuid!
  $limit: Int
  $offset: Int
) {
  salesOrders: sales_orders(
    order_by: $orderBy
    where: { store_id: { _eq: $storeId }, _and: [$where] }
    limit: $limit
    offset: $offset
  ) {
    ...SalesOrderWithFulfilmentShipmentsSubscription
  }
}
${SalesOrderWithFulfilmentShipmentsSubscriptionFragmentDoc}
`;

/**
* __useOnSalesOrdersWithFulfilmentShipmentsUpdatedSubscription__
*
* To run a query within a React component, call `useOnSalesOrdersWithFulfilmentShipmentsUpdatedSubscription` and pass it any options that fit your needs.
* When your component renders, `useOnSalesOrdersWithFulfilmentShipmentsUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useOnSalesOrdersWithFulfilmentShipmentsUpdatedSubscription({
*   variables: {
*      where: // value for 'where'
*      orderBy: // value for 'orderBy'
*      storeId: // value for 'storeId'
*      limit: // value for 'limit'
*      offset: // value for 'offset'
*   },
* });
*/
export function useOnSalesOrdersWithFulfilmentShipmentsUpdatedSubscription(
baseOptions: Apollo.SubscriptionHookOptions<
  OnSalesOrdersWithFulfilmentShipmentsUpdatedSubscription,
  OnSalesOrdersWithFulfilmentShipmentsUpdatedSubscriptionVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useSubscription<
  OnSalesOrdersWithFulfilmentShipmentsUpdatedSubscription,
  OnSalesOrdersWithFulfilmentShipmentsUpdatedSubscriptionVariables
>(OnSalesOrdersWithFulfilmentShipmentsUpdatedDocument, options);
}
export type OnSalesOrdersWithFulfilmentShipmentsUpdatedSubscriptionHookResult =
ReturnType<typeof useOnSalesOrdersWithFulfilmentShipmentsUpdatedSubscription>;
export type OnSalesOrdersWithFulfilmentShipmentsUpdatedSubscriptionResult =
Apollo.SubscriptionResult<OnSalesOrdersWithFulfilmentShipmentsUpdatedSubscription>;
export const OnSalesOrdersWithFulfilmentShipmentsCountUpdatedDocument = gql`
subscription OnSalesOrdersWithFulfilmentShipmentsCountUpdated(
  $where: sales_order_bool_exp!
  $storeId: uuid!
) {
  salesOrdersAggregate: sales_orders_aggregate(
    where: { store_id: { _eq: $storeId }, _and: [$where] }
  ) {
    aggregate {
      count
    }
  }
}
`;

/**
* __useOnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscription__
*
* To run a query within a React component, call `useOnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscription` and pass it any options that fit your needs.
* When your component renders, `useOnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useOnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscription({
*   variables: {
*      where: // value for 'where'
*      storeId: // value for 'storeId'
*   },
* });
*/
export function useOnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscription(
baseOptions: Apollo.SubscriptionHookOptions<
  OnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscription,
  OnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscriptionVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useSubscription<
  OnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscription,
  OnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscriptionVariables
>(OnSalesOrdersWithFulfilmentShipmentsCountUpdatedDocument, options);
}
export type OnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscriptionHookResult =
ReturnType<
  typeof useOnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscription
>;
export type OnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscriptionResult =
Apollo.SubscriptionResult<OnSalesOrdersWithFulfilmentShipmentsCountUpdatedSubscription>;
export const SalesOrderTabCountsDocument = gql`
query SalesOrderTabCounts($storeId: uuid!) {
  open: fulfilment_shipments_aggregate(
    where: {
      status: { _eq: DRAFT }
      store_id: { _eq: $storeId }
      sales_order: { status: { _nin: [ARCHIVED, CANCELLED] } }
    }
  ) {
    ...FulfilmentShipmentCount
  }
  processing: fulfilment_shipments_aggregate(
    where: {
      status: { _eq: PROCESSING_AT_SKUTOPIA }
      store_id: { _eq: $storeId }
      sales_order: { status: { _nin: [ARCHIVED, CANCELLED] } }
    }
  ) {
    ...FulfilmentShipmentCount
  }
  scheduled: fulfilment_shipments_aggregate(
    where: {
      source: { _neq: EXTERNAL }
      status: { _eq: UNSENT }
      store_id: { _eq: $storeId }
      sales_order: { status: { _nin: [ARCHIVED, CANCELLED] } }
      scheduled_pickup_date: { _is_null: false }
    }
  ) {
    ...FulfilmentShipmentCount
  }
  awaitingCarrier: fulfilment_shipments_aggregate(
    where: {
      source: { _neq: EXTERNAL }
      status: { _eq: UNSENT }
      store_id: { _eq: $storeId }
      sales_order: { status: { _nin: [ARCHIVED, CANCELLED] } }
      scheduled_pickup_date: { _is_null: true }
    }
  ) {
    ...FulfilmentShipmentCount
  }
  review: fulfilment_shipments_aggregate(
    where: {
      status: { _eq: DRAFT }
      store_id: { _eq: $storeId }
      selected_rate_id: { _is_null: true }
      sales_order: { status: { _nin: [ARCHIVED, CANCELLED] } }
    }
  ) {
    ...FulfilmentShipmentCount
  }
}
${FulfilmentShipmentCountFragmentDoc}
`;

/**
* __useSalesOrderTabCountsQuery__
*
* To run a query within a React component, call `useSalesOrderTabCountsQuery` and pass it any options that fit your needs.
* When your component renders, `useSalesOrderTabCountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useSalesOrderTabCountsQuery({
*   variables: {
*      storeId: // value for 'storeId'
*   },
* });
*/
export function useSalesOrderTabCountsQuery(
baseOptions: Apollo.QueryHookOptions<
  SalesOrderTabCountsQuery,
  SalesOrderTabCountsQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useQuery<
  SalesOrderTabCountsQuery,
  SalesOrderTabCountsQueryVariables
>(SalesOrderTabCountsDocument, options);
}
export function useSalesOrderTabCountsLazyQuery(
baseOptions?: Apollo.LazyQueryHookOptions<
  SalesOrderTabCountsQuery,
  SalesOrderTabCountsQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useLazyQuery<
  SalesOrderTabCountsQuery,
  SalesOrderTabCountsQueryVariables
>(SalesOrderTabCountsDocument, options);
}
export type SalesOrderTabCountsQueryHookResult = ReturnType<
typeof useSalesOrderTabCountsQuery
>;
export type SalesOrderTabCountsLazyQueryHookResult = ReturnType<
typeof useSalesOrderTabCountsLazyQuery
>;
export type SalesOrderTabCountsQueryResult = Apollo.QueryResult<
SalesOrderTabCountsQuery,
SalesOrderTabCountsQueryVariables
>;
export const OnSalesOrderTabCountsUpdatedDocument = gql`
subscription OnSalesOrderTabCountsUpdated(
  $source: String
  $storeId: uuid!
  $status: shipment_status_enum!
  $scheduled_pickup_date: Int
) {
  open: fulfilment_shipments_aggregate(
    where: {
      status: { _eq: $status }
      store_id: { _eq: $storeId }
      sales_order: { status: { _nin: [ARCHIVED, CANCELLED] } }
    }
  ) {
    ...FulfilmentShipmentCount
  }
}
${FulfilmentShipmentCountFragmentDoc}
`;

/**
* __useOnSalesOrderTabCountsUpdatedSubscription__
*
* To run a query within a React component, call `useOnSalesOrderTabCountsUpdatedSubscription` and pass it any options that fit your needs.
* When your component renders, `useOnSalesOrderTabCountsUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useOnSalesOrderTabCountsUpdatedSubscription({
*   variables: {
*      source: // value for 'source'
*      storeId: // value for 'storeId'
*      status: // value for 'status'
*      scheduled_pickup_date: // value for 'scheduled_pickup_date'
*   },
* });
*/
export function useOnSalesOrderTabCountsUpdatedSubscription(
baseOptions: Apollo.SubscriptionHookOptions<
  OnSalesOrderTabCountsUpdatedSubscription,
  OnSalesOrderTabCountsUpdatedSubscriptionVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useSubscription<
  OnSalesOrderTabCountsUpdatedSubscription,
  OnSalesOrderTabCountsUpdatedSubscriptionVariables
>(OnSalesOrderTabCountsUpdatedDocument, options);
}
export type OnSalesOrderTabCountsUpdatedSubscriptionHookResult = ReturnType<
typeof useOnSalesOrderTabCountsUpdatedSubscription
>;
export type OnSalesOrderTabCountsUpdatedSubscriptionResult =
Apollo.SubscriptionResult<OnSalesOrderTabCountsUpdatedSubscription>;
export const GetOrderDetailsForBulkBookingByIdsDocument = gql`
query GetOrderDetailsForBulkBookingByIds($ids: [uuid!]) {
  salesOrders: sales_orders(
    where: {
      _and: {
        fulfilment_shipments: { status: { _eq: DRAFT } }
        id: { _in: $ids }
      }
    }
  ) {
    ...SalesOrderWithUncancelledShipmentListing
  }
}
${SalesOrderWithUncancelledShipmentListingFragmentDoc}
`;

/**
* __useGetOrderDetailsForBulkBookingByIdsQuery__
*
* To run a query within a React component, call `useGetOrderDetailsForBulkBookingByIdsQuery` and pass it any options that fit your needs.
* When your component renders, `useGetOrderDetailsForBulkBookingByIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useGetOrderDetailsForBulkBookingByIdsQuery({
*   variables: {
*      ids: // value for 'ids'
*   },
* });
*/
export function useGetOrderDetailsForBulkBookingByIdsQuery(
baseOptions?: Apollo.QueryHookOptions<
  GetOrderDetailsForBulkBookingByIdsQuery,
  GetOrderDetailsForBulkBookingByIdsQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useQuery<
  GetOrderDetailsForBulkBookingByIdsQuery,
  GetOrderDetailsForBulkBookingByIdsQueryVariables
>(GetOrderDetailsForBulkBookingByIdsDocument, options);
}
export function useGetOrderDetailsForBulkBookingByIdsLazyQuery(
baseOptions?: Apollo.LazyQueryHookOptions<
  GetOrderDetailsForBulkBookingByIdsQuery,
  GetOrderDetailsForBulkBookingByIdsQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useLazyQuery<
  GetOrderDetailsForBulkBookingByIdsQuery,
  GetOrderDetailsForBulkBookingByIdsQueryVariables
>(GetOrderDetailsForBulkBookingByIdsDocument, options);
}
export type GetOrderDetailsForBulkBookingByIdsQueryHookResult = ReturnType<
typeof useGetOrderDetailsForBulkBookingByIdsQuery
>;
export type GetOrderDetailsForBulkBookingByIdsLazyQueryHookResult = ReturnType<
typeof useGetOrderDetailsForBulkBookingByIdsLazyQuery
>;
export type GetOrderDetailsForBulkBookingByIdsQueryResult = Apollo.QueryResult<
GetOrderDetailsForBulkBookingByIdsQuery,
GetOrderDetailsForBulkBookingByIdsQueryVariables
>;
export const GetOrderDetailsForBulkCancellingByIdsDocument = gql`
query GetOrderDetailsForBulkCancellingByIds($ids: [uuid!], $storeId: uuid) {
  salesOrders: sales_orders(
    where: {
      _and: {
        fulfilment_shipments: {
          source: { _neq: EXTERNAL }
          status: { _eq: UNSENT }
        }
        id: { _in: $ids }
        store_id: { _eq: $storeId }
      }
    }
  ) {
    ...SalesOrderWithUncancelledShipmentListing
  }
}
${SalesOrderWithUncancelledShipmentListingFragmentDoc}
`;

/**
* __useGetOrderDetailsForBulkCancellingByIdsQuery__
*
* To run a query within a React component, call `useGetOrderDetailsForBulkCancellingByIdsQuery` and pass it any options that fit your needs.
* When your component renders, `useGetOrderDetailsForBulkCancellingByIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useGetOrderDetailsForBulkCancellingByIdsQuery({
*   variables: {
*      ids: // value for 'ids'
*      storeId: // value for 'storeId'
*   },
* });
*/
export function useGetOrderDetailsForBulkCancellingByIdsQuery(
baseOptions?: Apollo.QueryHookOptions<
  GetOrderDetailsForBulkCancellingByIdsQuery,
  GetOrderDetailsForBulkCancellingByIdsQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useQuery<
  GetOrderDetailsForBulkCancellingByIdsQuery,
  GetOrderDetailsForBulkCancellingByIdsQueryVariables
>(GetOrderDetailsForBulkCancellingByIdsDocument, options);
}
export function useGetOrderDetailsForBulkCancellingByIdsLazyQuery(
baseOptions?: Apollo.LazyQueryHookOptions<
  GetOrderDetailsForBulkCancellingByIdsQuery,
  GetOrderDetailsForBulkCancellingByIdsQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useLazyQuery<
  GetOrderDetailsForBulkCancellingByIdsQuery,
  GetOrderDetailsForBulkCancellingByIdsQueryVariables
>(GetOrderDetailsForBulkCancellingByIdsDocument, options);
}
export type GetOrderDetailsForBulkCancellingByIdsQueryHookResult = ReturnType<
typeof useGetOrderDetailsForBulkCancellingByIdsQuery
>;
export type GetOrderDetailsForBulkCancellingByIdsLazyQueryHookResult =
ReturnType<typeof useGetOrderDetailsForBulkCancellingByIdsLazyQuery>;
export type GetOrderDetailsForBulkCancellingByIdsQueryResult =
Apollo.QueryResult<
  GetOrderDetailsForBulkCancellingByIdsQuery,
  GetOrderDetailsForBulkCancellingByIdsQueryVariables
>;
export const GetSalesOrdersByIdsDocument = gql`
query GetSalesOrdersByIds($ids: [uuid!], $storeId: uuid) {
  salesOrders: sales_orders(
    where: { _and: { id: { _in: $ids }, store_id: { _eq: $storeId } } }
  ) {
    ...SalesOrderWithShipments
  }
}
${SalesOrderWithShipmentsFragmentDoc}
`;

/**
* __useGetSalesOrdersByIdsQuery__
*
* To run a query within a React component, call `useGetSalesOrdersByIdsQuery` and pass it any options that fit your needs.
* When your component renders, `useGetSalesOrdersByIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useGetSalesOrdersByIdsQuery({
*   variables: {
*      ids: // value for 'ids'
*      storeId: // value for 'storeId'
*   },
* });
*/
export function useGetSalesOrdersByIdsQuery(
baseOptions?: Apollo.QueryHookOptions<
  GetSalesOrdersByIdsQuery,
  GetSalesOrdersByIdsQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useQuery<
  GetSalesOrdersByIdsQuery,
  GetSalesOrdersByIdsQueryVariables
>(GetSalesOrdersByIdsDocument, options);
}
export function useGetSalesOrdersByIdsLazyQuery(
baseOptions?: Apollo.LazyQueryHookOptions<
  GetSalesOrdersByIdsQuery,
  GetSalesOrdersByIdsQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useLazyQuery<
  GetSalesOrdersByIdsQuery,
  GetSalesOrdersByIdsQueryVariables
>(GetSalesOrdersByIdsDocument, options);
}
export type GetSalesOrdersByIdsQueryHookResult = ReturnType<
typeof useGetSalesOrdersByIdsQuery
>;
export type GetSalesOrdersByIdsLazyQueryHookResult = ReturnType<
typeof useGetSalesOrdersByIdsLazyQuery
>;
export type GetSalesOrdersByIdsQueryResult = Apollo.QueryResult<
GetSalesOrdersByIdsQuery,
GetSalesOrdersByIdsQueryVariables
>;
export const OnSalesOrdersPackingSlipsReadyDocument = gql`
subscription OnSalesOrdersPackingSlipsReady($ids: [uuid!]!) {
  salesOrders: sales_orders(
    where: {
      _and: {
        id: { _in: $ids }
        fulfilment_shipments: {
          status: { _nin: [CANCELLED] }
          packing_slip_document_path: { _is_null: false }
        }
      }
    }
  ) {
    id
    fulfilmentShipments: fulfilment_shipments(
      where: { status: { _nin: [CANCELLED] } }
    ) {
      id
      packingSlipDocumentPath: packing_slip_document_path
    }
  }
}
`;

/**
* __useOnSalesOrdersPackingSlipsReadySubscription__
*
* To run a query within a React component, call `useOnSalesOrdersPackingSlipsReadySubscription` and pass it any options that fit your needs.
* When your component renders, `useOnSalesOrdersPackingSlipsReadySubscription` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useOnSalesOrdersPackingSlipsReadySubscription({
*   variables: {
*      ids: // value for 'ids'
*   },
* });
*/
export function useOnSalesOrdersPackingSlipsReadySubscription(
baseOptions: Apollo.SubscriptionHookOptions<
  OnSalesOrdersPackingSlipsReadySubscription,
  OnSalesOrdersPackingSlipsReadySubscriptionVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useSubscription<
  OnSalesOrdersPackingSlipsReadySubscription,
  OnSalesOrdersPackingSlipsReadySubscriptionVariables
>(OnSalesOrdersPackingSlipsReadyDocument, options);
}
export type OnSalesOrdersPackingSlipsReadySubscriptionHookResult = ReturnType<
typeof useOnSalesOrdersPackingSlipsReadySubscription
>;
export type OnSalesOrdersPackingSlipsReadySubscriptionResult =
Apollo.SubscriptionResult<OnSalesOrdersPackingSlipsReadySubscription>;
export const SalesOrdersCommandDocument = gql`
mutation SalesOrdersCommand($command: SalesOrdersCommand!, $storeId: uuid!) {
  handleSalesOrdersCommand: command_sales_orders(
    command: $command
    storeId: $storeId
  ) {
    outcome
    error
    url
    result {
      createdSalesOrders {
        salesOrderId
        orderReference
      }
      failedSalesOrders {
        reason
        orderReference
        salesOrderId
      }
    }
  }
}
`;
export type SalesOrdersCommandMutationFn = Apollo.MutationFunction<
SalesOrdersCommandMutation,
SalesOrdersCommandMutationVariables
>;

/**
* __useSalesOrdersCommandMutation__
*
* To run a mutation, you first call `useSalesOrdersCommandMutation` within a React component and pass it any options that fit your needs.
* When your component renders, `useSalesOrdersCommandMutation` returns a tuple that includes:
* - A mutate function that you can call at any time to execute the mutation
* - An object with fields that represent the current status of the mutation's execution
*
* @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
*
* @example
* const [salesOrdersCommandMutation, { data, loading, error }] = useSalesOrdersCommandMutation({
*   variables: {
*      command: // value for 'command'
*      storeId: // value for 'storeId'
*   },
* });
*/
export function useSalesOrdersCommandMutation(
baseOptions?: Apollo.MutationHookOptions<
  SalesOrdersCommandMutation,
  SalesOrdersCommandMutationVariables
>
query GetTags($storeId: uuid_comparison_exp) {
  tags(where: { store_id: $storeId }) {
    id
    name
    store_id
  }
}
`;

/**
* __useGetTagsQuery__
*
* To run a query within a React component, call `useGetTagsQuery` and pass it any options that fit your needs.
* When your component renders, `useGetTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useGetTagsQuery({
*   variables: {
*      storeId: // value for 'storeId'
*   },
* });
*/
export function useGetTagsQuery(
baseOptions?: Apollo.QueryHookOptions<GetTagsQuery, GetTagsQueryVariables>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useQuery<GetTagsQuery, GetTagsQueryVariables>(
  GetTagsDocument,
  options
);
}
export function useGetTagsLazyQuery(
baseOptions?: Apollo.LazyQueryHookOptions<GetTagsQuery, GetTagsQueryVariables>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useLazyQuery<GetTagsQuery, GetTagsQueryVariables>(
  GetTagsDocument,
  options
);
}
export type GetTagsQueryHookResult = ReturnType<typeof useGetTagsQuery>;
export type GetTagsLazyQueryHookResult = ReturnType<typeof useGetTagsLazyQuery>;
export type GetTagsQueryResult = Apollo.QueryResult<
GetTagsQuery,
GetTagsQueryVariables
>;
export const GetDetailsForBulkBookingDocument = gql`
query GetDetailsForBulkBooking($ids: [uuid!]) {
  salesOrders: sales_orders(
    where: {
      _and: {
        fulfilment_shipments: { status: { _eq: DRAFT } }
        id: { _in: $ids }
      }
    }
  ) {
    id
    fulfilmentShipments: fulfilment_shipments(
      where: { status: { _eq: DRAFT } }
    ) {
      ...BulkActionFulfilmentShipment
    }
  }
}
${BulkActionFulfilmentShipmentFragmentDoc}
`;

/**
* __useGetDetailsForBulkBookingQuery__
*
* To run a query within a React component, call `useGetDetailsForBulkBookingQuery` and pass it any options that fit your needs.
* When your component renders, `useGetDetailsForBulkBookingQuery` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useGetDetailsForBulkBookingQuery({
*   variables: {
*      ids: // value for 'ids'
*   },
* });
*/
export function useGetDetailsForBulkBookingQuery(
baseOptions?: Apollo.QueryHookOptions<
  GetDetailsForBulkBookingQuery,
  GetDetailsForBulkBookingQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useQuery<
  GetDetailsForBulkBookingQuery,
  GetDetailsForBulkBookingQueryVariables
>(GetDetailsForBulkBookingDocument, options);
}
export function useGetDetailsForBulkBookingLazyQuery(
baseOptions?: Apollo.LazyQueryHookOptions<
  GetDetailsForBulkBookingQuery,
  GetDetailsForBulkBookingQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useLazyQuery<
  GetDetailsForBulkBookingQuery,
  GetDetailsForBulkBookingQueryVariables
>(GetDetailsForBulkBookingDocument, options);
}
export type GetDetailsForBulkBookingQueryHookResult = ReturnType<
typeof useGetDetailsForBulkBookingQuery
>;
export type GetDetailsForBulkBookingLazyQueryHookResult = ReturnType<
typeof useGetDetailsForBulkBookingLazyQuery
>;
export type GetDetailsForBulkBookingQueryResult = Apollo.QueryResult<
GetDetailsForBulkBookingQuery,
GetDetailsForBulkBookingQueryVariables
>;
export const GetDetailsForBulkCancellingDocument = gql`
query GetDetailsForBulkCancelling($ids: [uuid!]) {
  salesOrders: sales_orders(
    where: {
      _and: {
        fulfilment_shipments: {
          source: { _neq: EXTERNAL }
          status: { _eq: UNSENT }
        }
        id: { _in: $ids }
      }
    }
  ) {
    id
    fulfilmentShipments: fulfilment_shipments(
      where: { source: { _neq: EXTERNAL }, status: { _eq: UNSENT } }
    ) {
      ...BulkActionFulfilmentShipment
    }
  }
}
${BulkActionFulfilmentShipmentFragmentDoc}
`;

/**
* __useGetDetailsForBulkCancellingQuery__
*
* To run a query within a React component, call `useGetDetailsForBulkCancellingQuery` and pass it any options that fit your needs.
* When your component renders, `useGetDetailsForBulkCancellingQuery` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useGetDetailsForBulkCancellingQuery({
*   variables: {
*      ids: // value for 'ids'
*   },
* });
*/
export function useGetDetailsForBulkCancellingQuery(
baseOptions?: Apollo.QueryHookOptions<
  GetDetailsForBulkCancellingQuery,
  GetDetailsForBulkCancellingQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useQuery<
  GetDetailsForBulkCancellingQuery,
  GetDetailsForBulkCancellingQueryVariables
>(GetDetailsForBulkCancellingDocument, options);
}
export function useGetDetailsForBulkCancellingLazyQuery(
baseOptions?: Apollo.LazyQueryHookOptions<
  GetDetailsForBulkCancellingQuery,
  GetDetailsForBulkCancellingQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useLazyQuery<
  GetDetailsForBulkCancellingQuery,
  GetDetailsForBulkCancellingQueryVariables
>(GetDetailsForBulkCancellingDocument, options);
}
export type GetDetailsForBulkCancellingQueryHookResult = ReturnType<
typeof useGetDetailsForBulkCancellingQuery
>;
export type GetDetailsForBulkCancellingLazyQueryHookResult = ReturnType<
typeof useGetDetailsForBulkCancellingLazyQuery
>;
export type GetDetailsForBulkCancellingQueryResult = Apollo.QueryResult<
GetDetailsForBulkCancellingQuery,
GetDetailsForBulkCancellingQueryVariables
>;
export const OnSalesOrderRatesUpdatedDocument = gql`
subscription OnSalesOrderRatesUpdated($salesOrderId: uuid!) {
  salesOrder: sales_orders_by_pk(id: $salesOrderId) {
    id
    ...SalesOrderDraftFulfilmentShipmentWithRates
  }
}
${SalesOrderDraftFulfilmentShipmentWithRatesFragmentDoc}
`;

/**
* __useOnSalesOrderRatesUpdatedSubscription__
*
* To run a query within a React component, call `useOnSalesOrderRatesUpdatedSubscription` and pass it any options that fit your needs.
* When your component renders, `useOnSalesOrderRatesUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useOnSalesOrderRatesUpdatedSubscription({
*   variables: {
*      salesOrderId: // value for 'salesOrderId'
*   },
* });
*/
export function useOnSalesOrderRatesUpdatedSubscription(
baseOptions: Apollo.SubscriptionHookOptions<
  OnSalesOrderRatesUpdatedSubscription,
  OnSalesOrderRatesUpdatedSubscriptionVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useSubscription<
  OnSalesOrderRatesUpdatedSubscription,
  OnSalesOrderRatesUpdatedSubscriptionVariables
>(OnSalesOrderRatesUpdatedDocument, options);
}
export type OnSalesOrderRatesUpdatedSubscriptionHookResult = ReturnType<
typeof useOnSalesOrderRatesUpdatedSubscription
>;
export type OnSalesOrderRatesUpdatedSubscriptionResult =
Apollo.SubscriptionResult<OnSalesOrderRatesUpdatedSubscription>;
export const SalesOrderCommandDocument = gql`
mutation SalesOrderCommand($command: SalesOrderCommand!, $storeId: uuid!) {
  handleSalesOrderCommand: command_sales_order(
    command: $command
    storeId: $storeId
  ) {
    outcome
    error
    salesOrderId
  }
}
`;
export type SalesOrderCommandMutationFn = Apollo.MutationFunction<
SalesOrderCommandMutation,
SalesOrderCommandMutationVariables
>;

/**
* __useSalesOrderCommandMutation__
*
* To run a mutation, you first call `useSalesOrderCommandMutation` within a React component and pass it any options that fit your needs.
* When your component renders, `useSalesOrderCommandMutation` returns a tuple that includes:
* - A mutate function that you can call at any time to execute the mutation
* - An object with fields that represent the current status of the mutation's execution
*
* @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
*
* @example
* const [salesOrderCommandMutation, { data, loading, error }] = useSalesOrderCommandMutation({
*   variables: {
*      command: // value for 'command'
*      storeId: // value for 'storeId'
*   },
* });
*/
export function useSalesOrderCommandMutation(
baseOptions?: Apollo.MutationHookOptions<
  SalesOrderCommandMutation,
  SalesOrderCommandMutationVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useMutation<
  SalesOrderCommandMutation,
  SalesOrderCommandMutationVariables
>(SalesOrderCommandDocument, options);
}
export type SalesOrderCommandMutationHookResult = ReturnType<
typeof useSalesOrderCommandMutation
>;
export type SalesOrderCommandMutationResult =
Apollo.MutationResult<SalesOrderCommandMutation>;
export type SalesOrderCommandMutationOptions = Apollo.BaseMutationOptions<
SalesOrderCommandMutation,
SalesOrderCommandMutationVariables
>;
export const GetSalesOrderWithFulfilmentShipmentsDocument = gql`
query GetSalesOrderWithFulfilmentShipments($salesOrderId: uuid!) {
  salesOrder: sales_orders_by_pk(id: $salesOrderId) {
    ...SalesOrderWithShipments
  }
}
${SalesOrderWithShipmentsFragmentDoc}
`;

/**
* __useGetSalesOrderWithFulfilmentShipmentsQuery__
*
* To run a query within a React component, call `useGetSalesOrderWithFulfilmentShipmentsQuery` and pass it any options that fit your needs.
* When your component renders, `useGetSalesOrderWithFulfilmentShipmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
* you can use to render your UI.
*
* @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
*
* @example
* const { data, loading, error } = useGetSalesOrderWithFulfilmentShipmentsQuery({
*   variables: {
*      salesOrderId: // value for 'salesOrderId'
*   },
* });
*/
export function useGetSalesOrderWithFulfilmentShipmentsQuery(
baseOptions: Apollo.QueryHookOptions<
  GetSalesOrderWithFulfilmentShipmentsQuery,
  GetSalesOrderWithFulfilmentShipmentsQueryVariables
>
) {
const options = { ...defaultOptions, ...baseOptions };
return Apollo.useQuery<
  GetSalesOrderWithFulfilmentShipmentsQuery,
  GetSalesOrderWithFulfilmentShipmentsQueryVariables
>(GetSalesOrderWithFulfilmentShipmentsDocument, options);
}
