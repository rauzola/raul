import {
  IoLogoTwitter,
  IoLogoTwitch,
  IoLogoGithub,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoLogoTiktok
} from 'react-icons/io5'

import styles from './SocialLink.module.css'

const TYPE_LINKS = {
  Twitter: <IoLogoTwitter size={24} />,
  Twitch: <IoLogoTwitch size={24} />,
  Github: <IoLogoGithub size={24} />,
  Facebook: <IoLogoFacebook size={24} />,
  Instagram: <IoLogoInstagram size={24} />,
  Youtube: <IoLogoYoutube size={24} />,
  Linkedin: <IoLogoLinkedin size={24} />,
  Whatsapp: <IoLogoWhatsapp size={24} />,
  Tiktok: <IoLogoTiktok size={24} />
}

interface SocialLinkProps {
  url: string
  typeLinks: keyof typeof TYPE_LINKS
}

export function SocialLink({ url, typeLinks }: SocialLinkProps) {
  return (
    <a
      className={styles.socialLinks}
      href={url}
      target="_blank"
      title={typeLinks}
    >
      {TYPE_LINKS[typeLinks]}
    </a>
  )
}
