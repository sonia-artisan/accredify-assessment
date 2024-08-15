import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgress = ({ value }) => {
  return (
    <><div className='body-bold text-subtitle'>Your Progress</div>
    <div style={{ width: '150px', height: '150px', fontWeight: 'bold' }}>
        <CircularProgressbar
            value={value}
            text={`35%`}
            styles={buildStyles({
                textColor: '#2B22B5',
                pathColor: '#493DF5',
                trailColor: '#E8E9EB',
                textSize: '16px',
            })}
        />
    </div></>
  )
}

export default CircularProgress