import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  MetaFunction,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Laurel King" },
    { name: "description", content: "Learn more about Laurel King" },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* <PageTransitionProgressBar /> */}
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}


export function ErrorBoundary() {
  const error = useRouteError();
  let heading = 'Unexpected Error';
  let message =
    'We are very sorry. An unexpected error occurred. Please try again or contact us if the problem persists.';
  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        heading = 'Nope';
        message = 'Ew, looks like you tried to visit a page that does not exist.';
        break;
      default:
        heading = '🤷‍♀️';
        message = 'Ugh, looks like something mysterious happened.';
        break;
    }
  }
  const errorMessage = error instanceof Error ? error.message : null;
  return (
    <div>
      <section className="m-5 lg:m-20 flex flex-col gap-5">
        <h1>{heading}</h1>
        <p>{message}</p>
        {errorMessage && (
          <div className="border-4 border-red-500 p-10">
            <p>Error message: {errorMessage}</p>
          </div>
        )}
        <NavLink to="/">
          Back to homepage
        </NavLink>
      </section>
    </div>
  );
}
