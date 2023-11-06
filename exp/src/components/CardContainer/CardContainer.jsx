import PropTypes from 'prop-types';
import Card from '../Card/Card';
import style from '../CardContainer/CardContainer.module.css';

const CardContainer=({user=[],containerTitle='',containerDescription=''})=>{
   return(
      <>
     <div className={style.containerHeader}>
        <h3>{containerTitle}</h3>
        <h4>{containerDescription}</h4>
        </div>
        <div  className={style.containerFluid}>
        {user.map((ele,ind)=>{
                return(
                    <Card key={ind} data={ele} user={user}></Card>
                )
            })}
     </div>
     </>
   );
}

export default CardContainer;

CardContainer.prototype={
   user:PropTypes.array.isRequired,
   containerTitle:PropTypes.string,
   containerDescription:PropTypes.string
}