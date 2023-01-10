import '../../App.css'
import CircleButton from '../../components/Button/CircleButton';
import HeadLabel from '../../components/Label/HeadLabel';


function PersonalInfo(){
    return (
        <div>
            <CircleButton />
            <div className='headLabel'>
                <HeadLabel text={"თანამშრომლის ინფო"} />
                <HeadLabel text={"ლეპტოპის მახასიათებლები"} />
            </div>
        </div>
    );
}

export default PersonalInfo;