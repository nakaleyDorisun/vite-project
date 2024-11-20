import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/store";
import { ContainerComp } from "./Components/ContainerComp/ContainerComp";
import { TodoListClassicApp } from "./Components/TodoListClassicApp/TodoListClassicApp";
import { TodoListContextApp } from "./Components/TodoListContextApp/TodoListContextApp";
import { TodoListReduxApp } from "./Components/TodoListReduxApp/TodoListReduxApp";
import { TodoListContextProvider } from "./Context/TodoListContext";
import { FetchTodoListApp } from "./Components/FetchTodoListApp/FetchTodoListApp";

function App() {
  return (
    <div>
      <TodoListContextProvider>
        <Provider store={store}>
          <ContainerComp>
            <TodoListClassicApp />
            <TodoListContextApp />
            <TodoListReduxApp />
            <FetchTodoListApp />
          </ContainerComp>
        </Provider>
      </TodoListContextProvider>
    </div>
  );
}

export default App;
