import Logo from '../../components/Logo/Logo';
import Wall from '../../components/Wall/Wall';
import Button from '../../components/Button/Button';

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