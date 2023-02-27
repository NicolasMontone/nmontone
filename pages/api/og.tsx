import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

const OgImageHandler = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') || 'Mate'

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 42,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1>Nicolás Montone</h1>

        <h2>{title}</h2>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  )
}

export default OgImageHandler
