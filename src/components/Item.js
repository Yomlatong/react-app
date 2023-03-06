import './Item.css'
import PropTypes from 'prop-types';
import DataComtext from '../data/DataContext';
import { useContext } from 'react';
const Item = (props)=>{
        const {title,amount} = props
        const status = amount<0 ? "expense":"income"
        const symbol = amount<0 ? "-":"+"
        const name = useContext(DataComtext)
        return (
            <li className={status}>{title}<span>{symbol}{Math.abs(amount)}</span>
                {name}
            </li>
        );
}

Item.prototype={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}
export default Item