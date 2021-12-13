import rocket from '../assets/empty-state-rocket.gif'

export default function EmptyState() {
  return (
    <div className="empty-state-page">
      <div>
        <b>Esta página não existe</b>
        <img src={rocket} alt="foguete" />
        <a href="/">Procurar novas galáxias</a>
      </div>
    </div>
  )
}