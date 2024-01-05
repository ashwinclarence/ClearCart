import './PreLoader.css'
import PulseLoader from "react-spinners/PulseLoader";
function PreLoader() {
    return (
        <div className='pre-loader'>

            <PulseLoader
            id='loader'
                color="#F99B46"
                margin={5}
                size={20}
            />
        </div>
    )
}

export default PreLoader
