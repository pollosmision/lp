import { Link as LinkType } from '../types'

export default function ButtonLink({ link }: { link: LinkType }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className={`btn-custom${link.highlight ? ' wobble' : ''}`}
    >
      {link.icon && <i className={`bi icon-left ${link.icon}`} />}
      <span className="btn-text">{link.label}</span>
    </a>
  )
}
