import React from "react";

function Modal({ win, moves, reset }) {

    return (
        console.log(win),
        <>
            {win &&
                <div className="modal">
                    <div className="overlay"></div>
                    <div className="modal-content">
                        <h1>Ganaste!</h1>
                        <p>Movimientos: {moves}</p>
                        <div className="button-container">
                            <button className="restart-btn" onClick={reset}>Reiniciar</button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Modal