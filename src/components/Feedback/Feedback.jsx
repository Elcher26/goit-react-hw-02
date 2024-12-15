import css from './Feedback.module.css';

function Feedback({ feedback, totalFeedback, positiveFeedback }) {
  return (
    <div>
      <p className={css.p}>Good:{feedback.good}</p>
      <p className={css.p}>Neutral:{feedback.neutral}</p>
      <p className={css.p}>Bad:{feedback.bad}</p>
      <p className={css.p}>Total:{totalFeedback}</p>
      <p className={css.p}>Positive:&nbsp;{positiveFeedback}&nbsp;%</p>
    </div>
  );
}

export default Feedback;
