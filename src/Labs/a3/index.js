import ConditionalOutput from "./ConditionalOutput";
import DynamicStyling from "./DynamicStyling";
import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Styles from "./Styles";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";

function Assignment3(){
    return(
        <div>
            <h1>Assignment3</h1>
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