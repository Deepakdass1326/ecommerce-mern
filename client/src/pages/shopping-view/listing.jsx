import React from 'react'

function ShoppingListing() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Product Listing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Product cards will be mapped here */}
        <div className="p-4 border rounded-lg shadow-sm">
          <p>Product listing content will be added here</p>
        </div>
      </div>
    </div>
  )
}

export default ShoppingListing