import { Link } from "@remix-run/react";

const content = {
  title: "Hi, I'm Laurel.",
  description: (link: React.ReactNode) => (
    <>I&apos;m a front-end developer at {link}.</>
  ),
  Shopify: "Shopify",
};

export default function AboutMe() {
  return (
    // <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center h-full">
        <header className="flex flex-col items-center gap-2">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            {content.title}
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400">
            {content.description(
              <Link
                to="https://shopify.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                {content.Shopify}
              </Link>
            )}
          </p>
        </header>
      </div>
    // </div>
  );
}
