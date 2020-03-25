import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton
} from 'react-share';

import {
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  ViberIcon,
  WhatsappIcon
} from 'react-share';

const BASE_URL = 'https://toiletpaper.tech/';

const styles = {
  socialBlock: {
    marginTop: 30
  },
  socialIcon: {
    display: 'inline-block',
    margin: '0 5px'
  }
};

export const Social = () => {
  return (
    <div style={styles.socialBlock}>
      <div style={styles.socialIcon}>
        <FacebookShareButton url={BASE_URL} children='Facebook'>
          <FacebookIcon size={36} round={true} />
        </FacebookShareButton>
      </div>
      <div style={styles.socialIcon}>
        <TwitterShareButton url={BASE_URL} children='Twitter'>
          <TwitterIcon size={36} round={true} />
        </TwitterShareButton>
      </div>
      <div style={styles.socialIcon}>
        <LinkedinShareButton url={BASE_URL} children='LinkerIn'>
          <LinkedinIcon size={36} round={true} />
        </LinkedinShareButton>
      </div>
      <div style={styles.socialIcon}>
        <TelegramShareButton url={BASE_URL} children='Telegram'>
          <TelegramIcon size={36} round={true} />
        </TelegramShareButton>
      </div>
      <div style={styles.socialIcon}>
        <ViberShareButton url={BASE_URL} children='Viber'>
          <ViberIcon size={36} round={true} />
        </ViberShareButton>
      </div>
      <div style={styles.socialIcon}>
        <WhatsappShareButton url={BASE_URL} children='WatsApp'>
          <WhatsappIcon size={36} round={true} />
        </WhatsappShareButton>
      </div>
    </div>
  );
};
