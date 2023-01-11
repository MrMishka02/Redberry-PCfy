import CircleButton from '../../components/Button/CircleButton';
import HeadLabel from '../../components/Label/HeadLabel';


function PersonalInfo(){
    return (
        <div className=''>
            <CircleButton />
            <div className='flex justify-center mt-[5.7rem]'>
                <HeadLabel text={"თანამშრომლის ინფო"} />
                <HeadLabel text={"ლეპტოპის მახასიათებლები"} />
            </div>
        </div>
    );
}

export default PersonalInfo;