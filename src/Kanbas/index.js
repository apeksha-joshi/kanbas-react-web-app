import KanbasRowContainer from "./KanbasRowContainer";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas(){
    return (
        <Provider store={store}>
            <div className="container-fluid main-container">
                <KanbasRowContainer />
            </div>
        </Provider>
        
    );
}

export default Kanbas;