import "./WidgetLg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transections</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.pinimg.com/564x/b4/15/a3/b415a3f8bacf2c71f0043c3e27b95932.jpg"
              alt="avt"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate"> 2 jan 2020</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.pinimg.com/564x/b4/15/a3/b415a3f8bacf2c71f0043c3e27b95932.jpg"
              alt="avt"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate"> 2 jan 2020</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.pinimg.com/564x/b4/15/a3/b415a3f8bacf2c71f0043c3e27b95932.jpg"
              alt="avt"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate"> 2 jan 2020</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.pinimg.com/564x/b4/15/a3/b415a3f8bacf2c71f0043c3e27b95932.jpg"
              alt="avt"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate"> 2 jan 2020</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
