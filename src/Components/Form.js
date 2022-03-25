import { useState } from 'react';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid'

export default function Form(){

    const [dataArr, setDataArr] = useState([
      { txt: "Promenez le chien", id: uuidv4()},
      { txt: "Apprendre React", id: uuidv4() },
      { txt: "Apprendre Next.JS", id: uuidv4() }
    ])

    const [stateInput, setStateInput] = useState();

    const deleteElement = id => {
      const filteredState = dataArr.filter(item => {
        return item.id !== id;
      })
      setDataArr(filteredState)
    }

    const linkedInput = e => {
      setStateInput(e)
    }

    const addTodo = e => {
      e.preventDefault()
      const newArr = [...dataArr]
      const newTodo = {};
      newTodo.txt = stateInput
      newTodo.id = uuidv4
      newArr.push(newTodo);
      setDataArr(newArr)
      setStateInput("")
    }

  return (

    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
      <form onSubmit={addTodo} className="mb-3">
        <label htmlFor="todo" className="form-label mt-3 mb-3">Chose à faire</label>
        <input type="text" value={stateInput} className="form-control" id="todo" onInput={e => linkedInput(e.target.value)}/>
        <button className="mt-2 btn btn-sm btn-primary d-block">Envoyer</button>
      </form>

      <h2 className='mb-4 mt-4'>Liste des choses à faire</h2>
      <ul className="list-group">
        { dataArr.map((item, index) => {
          return (
          <Item key={item.id} data={item} delete={deleteElement} />
          )
        })}
      </ul>
    </div>

  )
}
