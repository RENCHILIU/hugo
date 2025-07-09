export const onRequest = async () => {
  return new Response(
    `{
      "applinks": {
        "apps": [],
        "details": [{
          "appIDs": ["YHD2L5CFUH.com.renchi.citibank"],
          "paths": ["/apply*", "/apply/*"]
        }]
      },
      "appclips": {
        "apps": [
          "YHD2L5CFUH.com.renchi.citibank.ent-Clip"
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

