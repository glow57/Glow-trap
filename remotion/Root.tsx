import React from 'react';
import { Composition } from 'remotion';
import { WebsitePromo, websitePromoDefaultProps } from './compositions/WebsitePromo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="WebsitePromo"
        component={WebsitePromo}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={websitePromoDefaultProps}
      />
    </>
  );
};
