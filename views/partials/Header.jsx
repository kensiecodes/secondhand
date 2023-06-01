import React from "react"

export default function Header(props) {
  return (
 <>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Secondhand</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/imgs/favicon-32x32.png"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <header class="container">
          <div class="text-center">
            <h1 class=""><a href="/profile">Secondhand</a></h1>
            <span>Buy nothing, save the planet</span>
          </div>
        </header>
      </body>
    </>
  )
}