import style from './LinkButtom.module.css'

interface LinkProps {
  url: string
  name: string
}

export function LinkButtom({ url, name }: LinkProps) {
  return (
    <a className={style.link} href={url} target="_blank">
      {name}
    </a>
  )
}
