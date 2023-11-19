import './Signup.scss';
import Image from 'assets/signup_image.png';
import Form from 'components/Form';



const Signup: React.FC = () => {
  return (
    <>
      <h2>Join Bootcampr today.</h2>
      <h4>Get the experience. Get the job.</h4>
      <div className="signup-content">
        <div className="signup-image">
          <img src={Image} alt="signup" />
        </div>
        <div className="signup-form">
        <Form/>
        </div>
      </div>
    </>
  );
};

export default Signup;
