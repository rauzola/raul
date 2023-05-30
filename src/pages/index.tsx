import { LinkButtom } from '@/components/LinkButtom';
import styles from '.././styles/Home.module.css'
import { SocialLink } from '@/components/SocialLink';
import { ToglleModeButtom } from '@/components/ToglleModeButtom';


const links = [
  {
    id: 1,
    url: 'https://github.com/rauzola',
    name: 'Veja meu Portfólio'
  },
  {
    id: 2,
    url: 'https://rauzola.notion.site/',
    name: 'Minhas Anotações em Programação'
  },
  {
    id: 3,
    url: 'https://discord.gg/',
    name: 'Meu Servidor Discord (Em breve)'
  },
  {
    id: 4,
    url: 'https://www.rocketseat.com.br/',
    name: 'Conheça a Rocketseat'
  }
]


export default function Home() {
  return (
    <>
     <div className={styles.container}>
      <div className={styles.profile}>
        <img
          src="https://github.com/rauzola.png"
          alt="Foto do Raul Sigoli"
        />
        <p>@rauzola</p>
      </div>

      <ToglleModeButtom />

      <div className={styles.link}>
        <ul>
          {links.map(link => {
            return (
              <li key={link.id}>
                <LinkButtom url={link.url} name={link.name} />
              </li>
            )
          })}
        </ul>
      </div>

      <div className={styles.socialLinks}>
        <SocialLink url="https://github.com/rauzola" typeLinks="Github" />
        <SocialLink
          url="https://www.linkedin.com/in/raul-sigoli-137bb4173/"
          typeLinks="Linkedin"
        />
        <SocialLink
          url="https://www.instagram.com/raul_sigoli/"
          typeLinks="Instagram"
        />
        <SocialLink
          url="https://www.youtube.com/@rauzola"
          typeLinks="Youtube"
        />
        <SocialLink
          url="https://www.twitch.tv/rauzola"
          typeLinks="Twitch"
        />
        <SocialLink
          url="https://twitter.com/rauzola"
          typeLinks="Twitter"
        />
      </div>

      <footer>
        Feito com ♥ pela{' '}
        <a href="" target="_blank">
          Raul Sigoli
        </a>
      </footer>
    </div>
    </>
  );
}
