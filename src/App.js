import logo from "./logo.svg";
import "./App.css";
import MainApp from "./components/MainApp";
import MainLayout from "./components/MainLayout/MainLayout";
import MainLayoutOne from "./components/MainLayout/MainLayoutOne";
import ParentForm from "./components/UseFormContext/ParentForm";
import ClassParent from "./ReactClassComponents/ClassParent";

function App() {
    return (
        <div>
            {/* <MainApp/> */}
            {/* <MainLayout/> */}
            {/* <MainLayoutOne/> */}
            {/* <ParentForm/> */}
            <ClassParent />
        </div>
    );
}

export default App;
