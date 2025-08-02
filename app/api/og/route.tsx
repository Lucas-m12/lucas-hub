import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  // Get parameters from URL or use defaults
  const title = searchParams.get('title') || 'Lucas Marinho';
  const subtitle = searchParams.get('subtitle') || 'Desenvolvedor Full Stack';
  const description = searchParams.get('description') || 'Especializado em React, Node.js e tecnologias modernas';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 25% 25%, #1a1a2e 0%, transparent 50%), radial-gradient(circle at 75% 75%, #16213e 0%, transparent 50%)',
          position: 'relative',
        }}
      >
        {/* Background gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
          }}
        />
        
        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '80px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Name */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {title}
          </h1>
          
          {/* Subtitle */}
          <h2
            style={{
              fontSize: '36px',
              fontWeight: '600',
              color: '#e5e7eb',
              marginBottom: '24px',
            }}
          >
            {subtitle}
          </h2>
          
          {/* Description */}
          <p
            style={{
              fontSize: '24px',
              color: '#9ca3af',
              maxWidth: '800px',
              lineHeight: 1.4,
              marginBottom: '32px',
            }}
          >
            {description}
          </p>
          
          {/* Tech stack badges */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'].map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'rgba(59, 130, 246, 0.2)',
                  color: '#3b82f6',
                  borderRadius: '8px',
                  fontSize: '18px',
                  fontWeight: '500',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            color: '#6b7280',
            fontSize: '20px',
          }}
        >
          lucasmarinho.com.br
        </div>
        
        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '40px',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
            opacity: 0.8,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '100px',
            left: '80px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
            opacity: 0.6,
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}