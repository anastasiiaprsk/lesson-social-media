
import classes from './Post.module.css'

const Posts = (props) => {
    return (
     
      <div className='posts'>
        <div className={classes.item}>
          <img src='https://i.pinimg.com/564x/89/2c/9d/892c9df87bc02d69860b494c3be12fad.jpg'></img>
          {props.messages}
          <div>
            {props.likesCount}
            <span>like</span>
          </div>
        </div>
     </div>
    
     
 
  )
 }
 
 export default Posts;