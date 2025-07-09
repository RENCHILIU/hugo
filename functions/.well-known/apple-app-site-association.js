export const onRequest = async ({ next }) => {
  return new Response(
    await fetch("https://renchiliu.com/.well-known/apple-app-site-association").then(r => r.text()),
    {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600"
      }
    }
  );
};

