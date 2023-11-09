import PropTypes from 'prop-types';
import Card from '../Card/Card';
import style from '../CardContainer/CardContainer.module.css';

const CardContainer=({user=[],containerTitle='',containerDescription=''})=>{
   const cards=user.map((ele,ind)=><Card key={ind} data={ele} user={user}></Card>);
   return(
      <>
     <div className={style.containerHeader}>
        <h3>{containerTitle}</h3>
        <h4>{containerDescription}</h4>
        </div>
        <div  className={style.containerFluid}>
        {cards}
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