import style from './css/userProfile.module.css'
function UserProfile(){
    return(
        <div>
            < h1 className={style.heading}>CSS Modules #35</h1>
            <div className={style.container}>
                <img src="My-Pic.jpg" alt="My Pic"className={style.img}/>
                <div>
                    <h3>Asutosh Panda</h3>
                    <h3>Software Developer</h3>
                </div>
            </div>
             <div className={style.container}>
                <img src="My-Pic.jpg" alt="My Pic"className={style.img}/>
                <div>
                    <h3>Asutosh Panda</h3>
                    <h3>Software Developer</h3>
                </div>
            </div>
        </div>
    )
}
export default UserProfile;