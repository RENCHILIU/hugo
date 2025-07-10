export const onRequest = async () => {
  return new Response(
    JSON.stringify({
      applinks: {
        apps: [],
        details: [
          {
            appIDs: [
              "GW4VQUFY73.com.renchi.citiapp",
              "GW4VQUFY73.com.renchi.citiapp.appclip"
            ],
            components: [
              { "/": "/apply" },
              { "/": "/apply/*" }
            ]
          }
        ]
      },
      appclips: {
        apps: [
          "GW4VQUFY73.com.renchi.citiapp.appclip"
        ]
      }
    }),
    {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600"
      }
    }
  );
};

