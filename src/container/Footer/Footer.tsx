import { ChangeEvent, FormEvent, useState } from 'react';
import './Footer.scss';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../libs/client';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { name, email, message } = formData;

  function handleChangeInput(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    const contact = {
      _type: 'contact',
      ...formData,
    };
    if (
      contact.name.trim().length === 0 ||
      contact.email.trim().length === 0 ||
      contact.message.trim().length === 0
    ) {
      setIsLoading(false);
      return alert('Os campos não podem estar vazios');
    }
    client.create(contact).then(() => {
      setIsLoading(false);
      setIsFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setTimeout(() => {
        setIsFormSubmitted(false);
      }, 2000);
    });
  }

  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:brunofukumori@gmail.com' className='p-text'>
            brunofukumori@gmail.com
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel:+5511996227088' className='p-text'>
            +55 (11) 99622-7088
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form className='app__footer-form app__flex' onSubmit={handleSubmit}>
          <div className='app__flex'>
            <input
              type='text'
              className='p-text'
              placeholder='Your name'
              name='name'
              value={name}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className='app__flex'>
            <input
              type='email'
              className='p-text'
              placeholder='Your email'
              name='email'
              value={email}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div>
            <textarea
              name='message'
              className='p-text'
              placeholder='Your message'
              value={message}
              onChange={handleChangeInput}
              required
            />
          </div>
          <button disabled={isLoading} type='submit' className='p-text'>
            {isLoading ? 'Sending' : 'Send message'}
          </button>
        </form>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
