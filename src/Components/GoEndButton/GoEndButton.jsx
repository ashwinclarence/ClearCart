import './GoEndButton.css'

function GoEndButton() {
    const goUp = () => {
        window.scrollTo(0, 0)
    }
    window.onscroll = function() {
        if (window.scrollY > 500) {
             document.getElementById("go-end-button").style.display = "block"; 
        }
        else{
            document.getElementById("go-end-button").style.display = "none"; 
        }
    };
    return (
        <div className='go-end-button-container container-fluid'>
            <div className="row go-end-button-row">
                <button id='go-end-button' onClick={goUp}><i className="fa-solid fa-circle-up fa-fade"></i></button>
                {/* <button id='go-end-button'><i className="fa-solid fa-circle-down"></i></button> */}
            </div>

        </div>
    )
}

export default GoEndButton
