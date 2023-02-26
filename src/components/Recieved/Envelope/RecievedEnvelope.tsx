

function RecievedEnvelope() {
  return (
    <div className="invitation">
        <div className="envelope">
            <div className="mask">
                <div className="card">
                    <div className="face front">
                        <h1>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/39132/poke-logo.svg"/>
                            <span className="extrude">Invitation Card</span>
                        </h1>
                    </div>
                    <div className="face back"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/39132/poke-peeps.png"/>
                    </div>
                </div>
            </div>
        </div>
    <div className="flap"></div>
    <button>You're Invited!</button>
    </div>
  )
}

export default RecievedEnvelope