export default function ObjectPicker({ values }) {
    const keyList = Object.keys(values);
    const valueList = Object.values(values);
    const idx = 0
    return (
        <div>
            <p>Key {keyList[idx]} has a value of {valueList[idx]} </p>
        </div>
    )
}
