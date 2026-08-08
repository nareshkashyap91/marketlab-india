export async function GET() {
  return new Response("google-site-verification: google219518a8c1164667.html", {
    headers: {
      "content-type": "text/html",
    },
  });
}
