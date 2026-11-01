import { tickerItems } from '../data/content';
import { Spark } from './Icons';

function TickerGroup() {
  return (
    <div className="ticker__group" aria-hidden="true">
      {tickerItems.map((item) => (
        <span className="ticker__item" key={item}>
          <span>{item}</span>
          <Spark size={11} />
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="ticker" aria-label="专业方向">
      <div className="ticker__track">
        <TickerGroup />
        <TickerGroup />
      </div>
    </div>
  );
}
