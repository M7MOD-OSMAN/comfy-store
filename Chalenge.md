## Challenge (22) - Single Product

- complete in multiple steps
- fetch and render single product
- don't forget about the colors and amount options
- extra credit - set amount options dynamically

### SingleProduct.jsx

1. Import Dependencies:

   - Import `useLoaderData` from `'react-router-dom'`.
   - Import `formatPrice`, `customFetch`, and `useState` from `'../utils'`.
   - Import `Link` from `'react-router-dom'`.

2. Define Loader Function:

   - Define a loader function that fetches product data based on the `params.id`.
   - Use `customFetch` to fetch the product data from `/products/${params.id}`.
   - Return an object containing the fetched product data.

3. Create SingleProduct Component:

   - Define a functional component named `SingleProduct`.

4. Component Structure:

   - Inside the component, destructure the `product` data using `useLoaderData`.
   - Destructure attributes like `image`, `title`, `price`, `description`, `colors`, and `company`.
   - Create a `dollarsAmount` variable by formatting the `price` using `formatPrice`.
   - Use `useState` to manage the `productColor` and `amount` state.

5. Display Product Information:

   - Return a `section` element to encapsulate the component content.
   - Display breadcrumb navigation using `Link` components for Home and Products pages.

6. Product Display:

   - Create a `div` with classes for styling and a grid layout.
   - Display the product image using an `img` element with classes for styling.

7. Product Info:

   - Within a `div`, display the product title, company, and `dollarsAmount`.

8. Description:

   - Display the product description using a `p` element.

9. Colors:

   - Display available product colors using a `div` with classes for styling.
   - Map through the `colors` array and create a `button` for each color.
   - Add appropriate classes and styles for the color button based on the selected `productColor`.

10. Amount:

    - Display a dropdown for selecting the product amount using a `div`.
    - Use a `select` element with options for different amounts.
    - Set the value of the `select` to the `amount` state and handle changes with `handleAmount` function.

11. Cart Button:

    - Display an "Add to bag" button using a `button` element with appropriate classes and an `onClick` event handler.

12. Export SingleProduct Component:
    - Export the `SingleProduct` component as the default export of the module.
