import ButtonLink from './ButtonLink'
import { links } from '../data/content'

export default function LinkBio() {
  const social = links.filter(l => l.social)
  return (
    <div className="page">
      <div className="card-custom">
        <div className="header">
          <img src="/assets/header.png" alt="Pollos Misión" className="header-img" />
          <div className="overlay">
            <h5 className="title">POLLOS MISION</h5>
            <small className="subtitle">Pollos a la canasta crocantes y alitas</small>
            <div className="social">
              {social.map(s => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}>
                  <i className={`bi ${s.icon || ''}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="links">
          {links.map(l => <ButtonLink key={l.label} link={l} />)}
        </div>
      </div>
    </div>
  )
}
