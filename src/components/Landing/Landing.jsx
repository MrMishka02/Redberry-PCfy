
import Logo from '../Logo/Logo';
import Wall from '../Wall/Wall';
import Button from '../Button/Button';

function Landing() {
  return (
    <div className="App">
      <Logo  />
      <Wall />
      <div className='btnSet'>
        <Button text={"ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ"} />
        <Button text={"ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ"} />
      </div>
    </div>
  );
}

export default Landing;