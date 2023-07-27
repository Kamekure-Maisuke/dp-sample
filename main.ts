const text = await Deno.readTextFile("./index.html")
Deno.serve(() => {
  return new Response(text, {
    headers: {
      "content-type": "text/html"
    },
  })
})
