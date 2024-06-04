import ColorBox from './ColorBox';
import './ColorBoxGrid.css';

export default function ColorBoxeGrid({ colors }) {
    const boxes = [];
    for (let i = 0; i < 9; i++) {
        boxes.push(<ColorBox key={i} colors={colors} />);
    }
    return (<div className='ColorBoxGrid'>
        {boxes}
    </div>);
}
