import type { Metadata } from 'next'

const title = 'Batman Frames'
const description = 'Images of Batman for Warpcast'
const fcFrameImage = `${process.env.NEXT_PUBLIC_SITE_URL}/batman-00.jpg`

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [fcFrameImage]
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': fcFrameImage,
    'fc:frame:post_url': `${process.env.NEXT_PUBLIC_SITE_URL}/api/batman?id=1`,
    'fc:frame:button:1': 'Next Image 🦇'
  }
}

export default function Home() {
  return <main>Batman frames</main>
}
