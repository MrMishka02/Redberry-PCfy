import Logo from '../../components/Logo/Logo';
import Wall from '../../components/Wall/Wall';
import Button from '../../components/Button/Button';

function Landing() {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Logo />
      <Wall />
      <div className='flex flex-col items-center w-6 mt-16'>
        <Button text={"ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ"} />
        <Button text={"ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ"} />
      </div>
    </div>
  );
}

export default Landing;