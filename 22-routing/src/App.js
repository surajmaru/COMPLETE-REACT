import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.js";
import ProductsPage from "./pages/Products.js";
import RootLayout from "./pages/Root.js";
import ErrorPage from "./pages/Error.js";
import ProductDetail from "./pages/ProductDetail.js";


//  approach 1.
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// )
// const router = createBrowserRouter(routeDefinitions);

//  approach 2.
// const router = createBrowserRouter([
//   { path: "/", element: <HomePage /> },
//   { path: "/products", element: <ProductsPage /> },
// ]);

const router = createBrowserRouter([
  { path: "/", element: <RootLayout />, errorElement: <ErrorPage />, children: [
    { path: "/", element: <HomePage /> },
    { path: "/products", element: <ProductsPage />},
    { path: "/products/:productId", element: <ProductDetail />},
  ]},
]);
 
function App() {
  return <RouterProvider router={router} />
  }

export default App;