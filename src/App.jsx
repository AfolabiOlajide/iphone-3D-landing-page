import { useRef } from "react";

import DisplaySection from "./components/DisplaySection";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import SoundSection from "./components/SoundSection";
import WebgiViewer from "./components/WebgiViewer";
import Loader from "./components/Loader"

function App() {
    const webgiViewerRef = useRef(null);
    const contentRef = useRef(null);

    const handlePreview = () => {
        webgiViewerRef.current.triggerPreview();
    };

    return (
        <div className="App">
            <Loader />
            <div ref={contentRef} className="content">
                <Nav />
                <Jumbotron />
                <SoundSection />
                <DisplaySection triggerPreview={handlePreview} />
            </div>
            <WebgiViewer contentRef={contentRef} ref={webgiViewerRef} />
        </div>
    );
}

export default App;
