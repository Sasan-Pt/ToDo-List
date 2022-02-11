
import './App.css';
import TodoList from "./components/TodoList";
import {useAppSelector} from "./hooks"
import Body from "./components/body";
import styles from './styles/app.module.css'

function App() {
  const data=useAppSelector(state=>state.todo);
  console.log(data);

  return (
      <div data-test="appComponent" className={styles.backgroundGrad}>
          <div className={styles.center}>
        <Body data-test="bodycomponent"/>
        <ol data-test="olTag" className={styles.list}>
          {data.map(x=>
              <TodoList id={x.id} value={x.todo} key={x.id} data-test="todoListComp"/>
          )}

        </ol>
          </div>
      </div>

  );
}

export default App;
