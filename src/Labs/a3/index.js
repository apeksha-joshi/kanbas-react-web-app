import ConditionalOutput from "./ConditionalOutput";
import DynamicStyling from "./DynamicStyling";
import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Styles from "./Styles";
import TodoList from "./todo/TodoList";

function Assignment3(){
    return(
        <div>
            <h1>Assignment3</h1>
            <TodoList />
            <ConditionalOutput />
            <Styles />
            <DynamicStyling />
            <PathParameters />
            <JavaScript/>
        </div>
    );
}
export default Assignment3;