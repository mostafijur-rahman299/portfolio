import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'MR Sajib — Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#FAFAF8',
          padding: '80px',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 32, color: '#8A8A8A', fontFamily: 'sans-serif' }}>
          mrsajib.com
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', fontSize: 72, fontWeight: 700, color: '#0F0F0F' }}>
            Mostafijur Rahman
          </div>
          <div style={{ display: 'flex', fontSize: 40, color: '#4A4A4A', fontFamily: 'sans-serif' }}>
            Software Engineer — building APIs, scalable backends, and digital products.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 28,
            color: '#0F0F0F',
            fontFamily: 'sans-serif',
            fontWeight: 600,
          }}
        >
          <div
            style={{
              display: 'flex',
              width: 48,
              height: 48,
              borderRadius: 12,
              backgroundColor: '#0F0F0F',
              color: '#FAFAF8',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Georgia, serif',
            }}
          >
            MR
          </div>
          MR SAJIB
        </div>
      </div>
    ),
    { ...size }
  )
}
