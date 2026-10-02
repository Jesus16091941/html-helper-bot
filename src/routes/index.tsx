import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VeciRed — Prototipos" },
      { name: "description", content: "Prototipo navegable de VeciRed, marketplace hiperlocal de servicios vecinales." },
      { property: "og:title", content: "VeciRed — Prototipos" },
      { property: "og:description", content: "Prototipo navegable de VeciRed con 23 pantallas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  beforeLoad: () => {
    throw redirect({ href: "/prototipos/index.html" });
  },
});
