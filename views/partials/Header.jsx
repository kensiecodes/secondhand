import React from "react"

export default function Header(props) {
  return (
 <>
      <head>
        <meta charSet="UTF-8" />
        
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/css/output.css" rel="stylesheet"></link>
        
        <title>Secondhand</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/imgs/favicon-32x32.png"
        />
        
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
        />
        
      </head>
      <body>
        <header className="">
          <div className="text-center">
            <h1 className="font-cherry lowercase text-4xl"><a href="/profile">Secondhand.</a></h1>
            <span className="font-sans">Buy nothing, save the planet.</span>
          </div>
        </header>
      </body>
    </>
  )
}