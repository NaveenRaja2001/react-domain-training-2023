

const Input=({type='text',placeholder='',style=''}) =>{
    return(
        <input
          type={type}
          placeholder={placeholder}
          className={style}
        ></input>
    );
}

export default Input;