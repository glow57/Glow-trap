import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
} from 'remotion';
import type { WebsiteSchema } from '../../lib/types';

export const websitePromoDefaultProps: WebsiteSchema = {
  siteName: 'Acme Corp',
  tagline: 'Build the future, faster.',
  siteType: 'saas',
  description: 'A next-generation SaaS platform.',
  palette: {
    primary: '#6366F1',
    secondary: '#818CF8',
    accent: '#F59E0B',
    background: '#070B14',
    surface: '#0D1320',
    text: '#E2E8F0',
    textMuted: '#64748B',
  },
  typography: {
    headingFont: 'Inter',
    bodyFont: 'Inter',
    baseSize: '16px',
  },
  sections: [
    {
      id: 'hero-1',
      type: 'hero',
      order: 0,
      content: {
        headline: 'Launch faster than ever',
        subheadline: 'Everything you need to ship.',
        cta: { label: 'Get Started', href: '#' },
      },
    },
  ],
  metadata: {
    title: 'Acme Corp',
    description: 'A next-generation SaaS platform.',
    keywords: ['saas', 'platform', 'productivity'],
  },
};

export const WebsitePromo: React.FC<WebsiteSchema> = ({
  siteName,
  tagline,
  palette,
  sections,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const titleY = spring({
    frame,
    fps,
    config: { damping: 200 },
    from: 60,
    to: 0,
  });

  const taglineOpacity = interpolate(frame, [20, 45], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const heroSection = sections.find((s) => s.type === 'hero');
  const heroHeadline = heroSection?.content.headline ?? siteName;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: palette.background,
        fontFamily: 'Inter, system-ui, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Sequence from={0} durationInFrames={durationInFrames}>
        <AbsoluteFill
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 24,
            padding: '0 80px',
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              color: palette.text,
              opacity: titleOpacity,
              transform: `translateY(${titleY}px)`,
              textAlign: 'center',
              lineHeight: 1.1,
              letterSpacing: '-2px',
            }}
          >
            {siteName}
          </div>

          <div
            style={{
              fontSize: 36,
              fontWeight: 400,
              color: palette.textMuted,
              opacity: taglineOpacity,
              textAlign: 'center',
              maxWidth: 800,
            }}
          >
            {tagline}
          </div>

          {heroSection && (
            <div
              style={{
                marginTop: 32,
                padding: '12px 32px',
                borderRadius: 999,
                backgroundColor: palette.primary,
                color: '#ffffff',
                fontSize: 24,
                fontWeight: 600,
                opacity: interpolate(frame, [40, 60], [0, 1], {
                  extrapolateLeft: 'clamp',
                  extrapolateRight: 'clamp',
                }),
              }}
            >
              {heroHeadline}
            </div>
          )}
        </AbsoluteFill>
      </Sequence>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 6,
          background: `linear-gradient(90deg, ${palette.primary}, ${palette.accent})`,
          opacity: interpolate(frame, [10, 30], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      />
    </AbsoluteFill>
  );
};
