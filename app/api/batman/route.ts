import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest): Promise<Response> => {
  const searchParams = req.nextUrl.searchParams
  const idOrig = searchParams.get('id')
  const idNum = idOrig ? Number(idOrig) : 0
  const idStr = String(idNum).padStart(2, '0')

  const isTheLast = idNum === 4

  const buttonText = isTheLast ? 'Start Over' : 'Next Image'
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}/batman-${idStr}.jpg`
  const nextId = isTheLast ? 0 : idNum + 1

  return new NextResponse(`<!DOCTYPE html><html><head>
      <title>This is frame ${idNum}</title>
      <meta property="og:image" content="${image}" />
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${image}" />
      <meta property="fc:frame:button:1" content="${buttonText}" />
      <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_SITE_URL}/api/batman?id=${nextId}" />
    </head></html>`)
}

export const dynamic = 'force-dynamic'
