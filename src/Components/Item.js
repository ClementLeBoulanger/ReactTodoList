
export default function Item(props) {

  return (
    <li className="d-flex justify-content-between align-items-center p-2 mb-3">
      <div className="p-3">{ props.data.txt }</div>
      <button onClick={() => props.delete(props.data.id)} className="btn btn-danger p-2 h-50">Supprimer</button>
    </li>
  )
}
