import react, {Component} from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img src='https://wonder-day.com/wp-content/uploads/2020/04/wonder-day-images-rainbow-37-1024x576.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>)
}
export default ProfileInfo;
