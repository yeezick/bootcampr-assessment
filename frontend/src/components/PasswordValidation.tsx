
const PasswordValidation = ({upperValidated,lowerValidated,
                            numberValidated,lengthValidated}
                            ) => {
  return (
     <>
       <div className="message-log">
                 <small 
                 className={upperValidated ? 'validated':'not-validated'}>
                 {upperValidated ? <span>&#x2713;</span>:''} 1 uppercase
                </small>
                 <small
                  className={lowerValidated ? 'validated':'not-validated'}>
                   {lowerValidated ? <span>&#x2713;</span>:''} 1 lowercase
                   </small>
                 <small
                  className={numberValidated ? 'validated':'not-validated'}> 
                  {numberValidated ? <span>&#x2713;</span>:''} 1 number
                  </small>
                 <small 
                 className={lengthValidated ? 'validated':'not-validated'}>
                   {lengthValidated ? <span>&#x2713;</span>:''} Minimum 8 characters
                   </small>
             </div>
     </>
  )
}

export default PasswordValidation
