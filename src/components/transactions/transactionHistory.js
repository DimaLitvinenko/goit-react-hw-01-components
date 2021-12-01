import PropTypes from 'prop-types';
import style from './transactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={style.transactionTable}>
      <thead className={style.tableHead}>
        <tr>
          <th className={style.item}>Type</th>
          <th className={style.item}>Amount</th>
          <th className={style.item}>Currency</th>
        </tr>
      </thead>

      <tbody className={style.tableBody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={style.tableList}>
            <td className={style.item}>{type}</td>
            <td className={style.item}>{amount}</td>
            <td className={style.item}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
