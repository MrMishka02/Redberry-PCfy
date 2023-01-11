import '../../App.css'
import CircleButton from '../../components/Button/CircleButton';
import HeadLabel from '../../components/Label/HeadLabel';


function PersonalInfo(){
    return (
        <div className='wrapper'>
            <CircleButton />
            <div className='headLabelDiv'>
                <HeadLabel text={"თანამშრომლის ინფო"} />
                <HeadLabel text={"ლეპტოპის მახასიათებლები"} />
            </div>
        </div>
    );
}

export default PersonalInfo;