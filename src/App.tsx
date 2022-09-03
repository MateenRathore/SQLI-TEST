import {createContext, useState} from "react";
import "./App.css";
import AgePredictor from "./components/AgePredictor";
import DogBreeds from "./components/DogBreeds";
import Checkbox from "./components/Checkbox";
import Header from "./components/Header";
import NewsFeed from "./components/NewsFeed";

type checkObjOptions = {
    [key: string]: boolean
}

let contextName = createContext({
    title: '',
    setTitle: (title: string) => {}
});

export {contextName};

function App() {
    const [showNewsFeed, setShowNewsFeed] = useState(false);

    let [title, setTitle] = useState("")

    const [checkObj, setCheckObj] = useState<checkObjOptions>({
        "1": false,
        "2": false,
        "3": false
    });

    const toggleCheckBox = (checkBoxNumber: string) => {
        setCheckObj((obj) => {
            const toggle: boolean = !obj[checkBoxNumber];
            return {
                ...obj,
                [checkBoxNumber]: toggle
            }

        })
    }

    const resetToggle = () => {
        setCheckObj((obj) => {
            return {
                "1": false,
                "2": false,
                "3": false
            }
        })
    }


    return (
        <contextName.Provider value={{title, setTitle}}>
            <div className="App">
                <div className="App-header">
                    <Header/>

                    <div className="grid">
                        <div className="grid-item">
                            <DogBreeds/>
                        </div>

                        <div className="grid-item">
                            <h2>Checkboxes</h2>
                            <Checkbox checkObj={checkObj} bobIndex={"1"} toggle={toggleCheckBox} label="Test 1"/>
                            <Checkbox checkObj={checkObj} bobIndex={"2"} toggle={toggleCheckBox} label="Test 2"/>
                            <Checkbox checkObj={checkObj} bobIndex={"3"} toggle={toggleCheckBox} label="Test 3"/>

                            <button
                                onClick={() => toggleCheckBox("2")}
                                style={{marginTop: 8}}
                            >
                                Select second checkbox
                            </button>
                            <button onClick={() => resetToggle()}>Reset</button>
                        </div>

                        <div className="grid-item">
                            <AgePredictor/>
                        </div>

                        <div className="grid-item">
                            <NewsFeed show={showNewsFeed} setShowNewsFeed={setShowNewsFeed}/>
                        </div>
                    </div>
                </div>
            </div>
        </contextName.Provider>
    );
}

export default App;
