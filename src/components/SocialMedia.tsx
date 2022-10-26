import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function SocialMedia() {
  return (
    <div className='app__social'>
      <a href='https://github.com/bfukumori' title='github'>
        <FaGithub />
      </a>
      <a href='https://www.linkedin.com/in/bfukumori/' title='linkedin'>
        <FaLinkedinIn />
      </a>
    </div>
  );
}
