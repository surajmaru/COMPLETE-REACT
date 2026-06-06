import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage, { loader } from "./pages/Events";
import EventDetailPage, { loader as loaderDetails} from "./pages/EventDetails";
import NewEventPage, { action } from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoot";
import ErrorPage from "./pages/ErrorPage";
import { action as deleteAction } from "./pages/EventDetails";

const router = createBrowserRouter([
  { path: "/", element: <RootLayout />, errorElement: <ErrorPage />, children: [
    { index: true, element: <HomePage />},
    { path: "events", element: <EventsRootLayout />, children: [
      { index: true, element: <EventsPage />, loader: loader},
      { path: ":eventId",id:"event-detail", loader: loaderDetails, children: [
        { index: true, element: <EventDetailPage />, action: deleteAction },
        { path: "edit", element: <EditEventPage />},
      ]},
      { path: "new", element: <NewEventPage />, action: action},
    ]},
  ]},
])


function App() {
  return <RouterProvider router={router} />
}

export default App;
