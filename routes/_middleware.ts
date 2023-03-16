import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 632,
  site: "site-testeee",
  domains: ["deco-sites-site-testeee.deno.dev"],
});