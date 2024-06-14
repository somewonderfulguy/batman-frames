import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest): Promise<Response> => {
  const searchParams = req.nextUrl.searchParams
  const _id = searchParams.get('id')
  const id = _id ? Number(_id) : 0

  const isTheLast = id === 4

  const nextId = isTheLast ? '00' : String(id + 1).padStart(2, '0')
  const buttonText = isTheLast ? 'Start Over' : 'Next Image'
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}/batman-${id}.jpg`

  return new NextResponse(`<!DOCTYPE html><html><head>
      <title>This is frame ${id}</title>
      <meta property="og:image" content="${image}" />
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${image}" />
      <meta property="fc:frame:button:1" content="${buttonText}" />
      <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_SITE_URL}/api/batman?id=${nextId}" />
    </head></html>`)
}
