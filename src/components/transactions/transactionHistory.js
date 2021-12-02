import PropTypes from 'prop-types';
import style from './transactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <>
      <h2 className={style.hidden}>Transaction</h2>
      <table className={style.transactionTable}>
        <thead className={style.tableHead}>
          <tr>
            <th className={style.tableHeadItem}>Type</th>
            <th className={style.tableHeadItem}>Amount</th>
            <th className={style.tableHeadItem}>Currency</th>
          </tr>
        </thead>

        <tbody className={style.tableBody}>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className={style.tableList}>
              <td className={style.tableItem}>{type}</td>
              <td className={style.tableItem}>{amount}</td>
              <td className={style.tableItem}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
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
