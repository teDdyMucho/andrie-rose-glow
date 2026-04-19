import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Andrie Lowrence Rodriguez | Customer Service & Technical Support Specialist" },
      {
        name: "description",
        content:
          "Portfolio of Andrie Lowrence Rodriguez — 5+ years in customer service, technical support, and digital marketing. Based in Angeles City, Pampanga.",
      },
      { name: "author", content: "Andrie Lowrence Rodriguez" },
      { property: "og:title", content: "Andrie Lowrence Rodriguez | Customer Service & Technical Support Specialist" },
      {
        property: "og:description",
        content:
          "Portfolio of Andrie Lowrence Rodriguez — 5+ years in customer service, technical support, and digital marketing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Andrie Lowrence Rodriguez | Customer Service & Technical Support Specialist" },
      {
        name: "twitter:description",
        content: "Customer Service & Technical Support Specialist based in Angeles City, Pampanga.",
      },
      { name: "description", content: "Andrie's Pink Portfolio is a personal website showcasing a Customer Service & Technical Support professional." },
      { property: "og:description", content: "Andrie's Pink Portfolio is a personal website showcasing a Customer Service & Technical Support professional." },
      { name: "twitter:description", content: "Andrie's Pink Portfolio is a personal website showcasing a Customer Service & Technical Support professional." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/185838c3-ec98-478e-a690-2af5dc9b9109/id-preview-e26d1b99--820f462c-e60b-45e1-9e5a-1af0fb487c84.lovable.app-1776620981949.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/185838c3-ec98-478e-a690-2af5dc9b9109/id-preview-e26d1b99--820f462c-e60b-45e1-9e5a-1af0fb487c84.lovable.app-1776620981949.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://andrierodriguez.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Andrie Lowrence Rodriguez",
          jobTitle: "Customer Service & Technical Support Specialist",
          telephone: "+639615721291",
          email: "dreirodriguez0824@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "3797 4th Street Balibago",
            addressLocality: "Angeles City",
            addressRegion: "Pampanga",
            addressCountry: "PH",
          },
          knowsAbout: [
            "Customer Service",
            "Technical Support",
            "Digital Marketing",
            "Negotiation",
            "Leadership",
            "GoHighLevel",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
