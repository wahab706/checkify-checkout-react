import React from 'react'
import { Card, Page, EmptyState } from '@shopify/polaris';

export default function NotFound() {
  return (
    <Page>
      <Card sectioned>
        <EmptyState
          heading="There’s no page at this address"
          image="https://cdn.shopify.com/shopifycloud/web/assets/v1/bf64694af97df25c00f566ae91ae155319c09b7ef091e670855127f65163e5e9.svg"
          fullWidth
        >
          <p>Check the URL and try again, or use the search bar to find what you need.</p>
        </EmptyState>
      </Card>
    </Page>
  )
}
