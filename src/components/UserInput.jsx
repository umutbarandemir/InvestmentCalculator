
const UserInput = (props) => {

  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label>Initial Investment</label>
          <input value={props.userValues.initialInvestment} type="number" onChange={(e)=>props.changeValue("initialInvestment",e.target.value)} required/>
          </p>
        <p>
          <label>Annual Investment</label>
          <input value={props.userValues.annualInvestment} type="number" onChange={(e)=>props.changeValue("annualInvestment",e.target.value)} required/>
          </p>
      </div>
      <div className='input-group'>
        <p>
          <label>Expected Return</label>
          <input value={props.userValues.expectedReturn} type="number" onChange={(e)=>props.changeValue("expectedReturn",e.target.value)} required/>
          </p>
        <p>
          <label>Duration</label>
          <input value={props.userValues.duration} type="number" onChange={(e)=>props.changeValue("duration",e.target.value)} required/>
          </p>
      </div>
    </section>
  )
}

export default UserInput