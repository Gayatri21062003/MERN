import logo from "./logo.svg";
import "./App.css";
import MainApp from "./components/MainApp";
import MainLayout from "./components/MainLayout/MainLayout";
import MainLayoutOne from "./components/MainLayout/MainLayoutOne";
import ParentForm from "./components/UseFormContext/ParentForm";
import ClassParent from "./ReactClassComponents/ClassParent";
import UseReducer from "./ReactClassComponents/UseReducer";
import {Provider} from "react-redux";
import store from "./store/store";
import FormAllData from "./Forms/FormAllData";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                {/* <MainApp/> */}
                <MainLayout />
                {/* <MainLayoutOne /> */}
                {/* <ParentForm/> */}
                {/* <ClassParent /> */}
                {/* <UseReducer /> */}
                {/* <FormAllData /> */}
            </div>
        </Provider>
    );
}

export default App;
