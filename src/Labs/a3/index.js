import ConditionalOutput from "./ConditionalOutput";
import DynamicStyling from "./DynamicStyling";
import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Styles from "./Styles";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
import { useSelector } from "react-redux";

function Assignment3(){
    const { todos } = useSelector((state) => state.todosReducer);
    return(
        <div>
            <h1>Assignment3</h1>
            <ul className="list-group">
                {todos.map((todo) => (
                    <li className="list-group-item" key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul>
            <TodoList />
            <TodoItem />
            <ConditionalOutput />
            <Styles />
            <DynamicStyling />
            <PathParameters />
            <JavaScript/>
        </div>
    );
}
export default Assignment3;