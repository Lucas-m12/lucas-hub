import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  // Get size parameter (default to 32 for favicon)
  const size = parseInt(searchParams.get('size') || '32');
  
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          position: 'relative',
          borderRadius: size >= 180 ? '24px' : '8px', // Rounded corners for larger sizes
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%)',
            borderRadius: size >= 180 ? '24px' : '8px',
          }}
        />
        
        {/* Main content - LM initials or just L for very small sizes */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <span
            style={{
              fontSize: size >= 64 ? `${size * 0.5}px` : `${size * 0.6}px`,
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            {size >= 32 ? 'LM' : 'L'}
          </span>
        </div>
        
        {/* Decorative dot for larger sizes */}
        {size >= 64 && (
          <div
            style={{
              position: 'absolute',
              bottom: `${size * 0.15}px`,
              right: `${size * 0.15}px`,
              width: `${size * 0.15}px`,
              height: `${size * 0.15}px`,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
              opacity: 0.8,
            }}
          />
        )}
      </div>
    ),
    {
      width: size,
      height: size,
    }
  );
}