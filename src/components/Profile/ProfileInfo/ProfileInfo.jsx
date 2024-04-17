
import classes from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                src="https://assets.unenvironment.org/decadeonrestoration/2020-03/rough-horn-2146181_1280.jpg">

                </img>
            </div>

            <div className={classes.discriptionBlock}>
                ava + description
            </div>

        </div>
    )
};

export default ProfileInfo;


