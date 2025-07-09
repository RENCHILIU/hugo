export const onRequest = async () => {
  return new Response(
    `{
      "applinks": {
        "apps": [],
        "details": [
          {
            "appIDs": [
              "GW4VQUFY73.com.renchi.citiapp"
            ],
            "paths": [
              "/apply*",
              "/apply/*"
            ]
          }
        ]
      },
      "appclips": {
        "apps": [
          "GW4VQUFY73.com.renchi.citiapp.appclip"
        ]
      }
    }`,
    {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600"
      }
    }
  );
};

