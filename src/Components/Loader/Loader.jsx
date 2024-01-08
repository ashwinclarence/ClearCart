import './Loader.css'
import HashLoader from "react-spinners/HashLoader";
function Loader() {
    return (
        <div className="loader-container container-fluid">
            <div className="loader-row row">
                <HashLoader
                    id='loader'
                    color="#F99B46"
                    size={100}
                />
            </div>
        </div>
    )
}

export default Loader
