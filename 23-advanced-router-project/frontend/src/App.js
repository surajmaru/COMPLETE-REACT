import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage, { loader } from "./pages/Events";
import EventDetailPage from "./pages/EventDetails";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoot";

const router = createBrowserRouter([
  { path: "/", element: <RootLayout />, children: [
    { index: true, element: <HomePage />},
    { path: "events", element: <EventsRootLayout />, children: [
      { index: true, element: <EventsPage />, loader: loader},
      { path: ":eventId", element: <EventDetailPage />},
      { path: "new", element: <NewEventPage />},
      { path: ":eventId/edit", element: <EditEventPage />},
    ]},
  ]},
])


function App() {
  return <RouterProvider router={router} />
}

export default App;
