import React, { useContext } from 'react'
import CartContext from '../../store/Cart-context'
import CartIcon from '../Cart/cartIcon'
import classes from './HeaderCartButton.module.css'

function HeaderCartButton(props) {
        const cartCtx=  useContext(CartContext)
        const numberOfCartItems=cartCtx.items.reduce((CurNumber, item) => {
          return CurNumber + item.amount
        },0)

        const btnClasses = `${classes.button} ${classes.bump}`

        

  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton