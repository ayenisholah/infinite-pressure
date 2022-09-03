/* eslint-disable */
import axios from 'axios';
import { useState, MouseEvent, ChangeEvent } from 'react';

const Spinner = () => {
  return <div className="bg-black h-1 w-1 sm:h-2 sm:w-2 animate-spin mx-2" />;
};

const MailingListForm = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const Error = () => {
    return (
      <div onClick={(e) => setError('')} className="red text-center cursor-pointer w-full">
        Subscription Failed.
        <br /> Please Try Again Soon.
      </div>
    );
  };

  const handleSubmission = async (e: MouseEvent) => {
    e.preventDefault();
    setLoading(!loading);
    try {
      const response = await axios.post('/api/subscribe', { email });
      if (response.status === 200) {
        setSubscribed(true);
      } else {
        console.log(response);
        setError('something went wrong');
      }
    } catch (error) {
      console.log(error);
      setError('something went wrong');
    }
    setLoading(false);
  };

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setEmail(value);
  };

  if (subscribed) {
    return <div className="text-center red  py-5 w-full">Subscribed</div>;
  }
  if (error) {
    console.log(error);
    return <Error />;
  }

  return (
    <form className="flex  items-center w-full mt-4" style={{}}>
      <input
        onChange={(e: ChangeEvent) => handleChange(e)}
        type="text"
        disabled={loading}
        placeholder="Enter Email"
        className={`
          pl-5                    
          sm:grow
          w-full
          pixel-font
          text-sm
          h-full
          sm:text-xl
          rounded-none          
          bg-black
          text-[#ead7c3]
        `}
        style={{ height: 100 }}
      />
      <button
        style={{ height: 100 }}
        className={`    
          flex justify-center items-center                    
          yellow          
          px-5 sm:px-10       
          shrink-0
          pixel-font
          hover:scale-110      
          sm:text-[22pt]
          text-[10pt]
          bg-[#ff0f49]
          rounded-none
          ${!loading ? 'hover:transform transform duration-200' : ''}
        `}
        onClick={(e) => handleSubmission(e)}
      >
        {loading && (
          <>
            <Spinner />
            <Spinner />
            <Spinner />
            <Spinner />
          </>
        )}
        {!loading && 'Subscribe'}
      </button>
    </form>
  );
};

export default MailingListForm;
