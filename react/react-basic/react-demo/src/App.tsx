import { useReducer } from 'react'

const initData = [
  { name: '小伟', price: 9.9, count: 1, id: 1, isEdit: false },
  { name: '中伟', price: 19.9, count: 1, id: 2, isEdit: false },
  { name: '大伟', price: 29.9, count: 1, id: 3, isEdit: false }
  ]

  type List = typeof initData

  interface Action {
    type: "ADD" | "SUB" | 'DELETE' | 'EDIT' | 'UPDATE_NAME',
    id: number,
    newName?: string
  }


  function reducer(state: List, action: Action) {
  switch (action.type) {
    case 'ADD':
      return state.map(item => 
        item.id === action.id 
          ? { ...item, count: item.count + 1 }
          : item
      );
    case 'SUB':
      return state.map(item => 
        item.id === action.id 
          ? { ...item, count: item.count - 1 }
          : item
      );
    case 'DELETE':
      return state.filter(item => item.id !== action.id);
    case 'EDIT':
      return state.map(item => 
        item.id === action.id 
          ? { ...item, isEdit: !item.isEdit }
          : item
      );
    case 'UPDATE_NAME':
      return state.map(item => 
        item.id === action.id 
          ? { ...item, name: action.newName! }
          : item
      );
    default:
      throw new Error();
  }
}

function App() {

  

  const [data, dispatch] = useReducer(reducer,  initData)

  return (
    <>
      <table cellPadding={0} cellSpacing={0} width={600} border={1}>
        <thead>
          <tr>
            <th>物品</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => {
              return (
                <tr key={item.id}>
                  <td align='center'>
                    {item.isEdit ? 
                      <input
                        onBlur={e => dispatch({type: 'EDIT', id: item.id})}
                        onChange={e => dispatch({type: "UPDATE_NAME", id: item.id, newName: e.target.value})}
                        value={item.name}
                      />
                      :
                      <span>{item.name}</span>
                    }
                  </td>
                  <td align='center'>{(item.price * item.count).toFixed(2)}</td>
                  <td align='center'>
                    <button onClick={() => dispatch({ type: "SUB", id: item.id,})}>-</button>
                    <button onClick={() => dispatch({ type: "ADD", id: item.id})}>+</button>
                  </td>
                  <td align='center'>
                    <button onClick={() => dispatch({ type: "EDIT", id: item.id,})}>编辑</button>
                    <button onClick={() => dispatch({ type: "DELETE", id: item.id})}>删除</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}></td>
            <td align='center'>总价:{(data.reduce((prev, next) => prev + next.price * next.count, 0)).toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}

export default App;