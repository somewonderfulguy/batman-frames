import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest): Promise<Response> => {
  const searchParams = req.nextUrl.searchParams
  const idOrig = searchParams.get('id')
  const idNum = idOrig ? Number(idOrig) : 0
  const idStr = String(idNum).padStart(2, '0')

  const isTheLast = idNum === 4

  const buttonText = isTheLast
    ? 'Start Over'
    : 'Next Image' + ' ' + (idNum + 1) + ' ' + idOrig
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}/batman-${idStr}.jpg`

  return new NextResponse(`<!DOCTYPE html><html><head>
      <title>This is frame ${idNum}</title>
      <meta property="og:image" content="${image}" />
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${image}" />
      <meta property="fc:frame:button:1" content="${buttonText}" />
      <meta property="fc:frame:post_url" content="${
        process.env.NEXT_PUBLIC_SITE_URL
      }/api/batman?id=${idNum + 1}" />
    </head></html>`)
}

export const dynamic = 'force-dynamic'
