import PropTypes from 'prop-types';
import data from './JSONfolder/data.json';

export default function Statistics() {
  return (
    <section class="statistics">
      <h2 class="title">title</h2>
      <ul class="stat-list">
        <li class="item">
          <span class="label">.docx</span>
          <span class="percentage"></span>
        </li>
        <li class="item">
          <span class="label">.mp3</span>
          <span class="percentage"></span>
        </li>
        <li class="item">
          <span class="label">.pdf</span>
          <span class="percentage"></span>
        </li>
        <li class="item">
          <span class="label">.mp4</span>
          <span class="percentage"></span>
        </li>
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
