// import styles from './Course.module.css'
const c1 = 'ComponentBase';
function Course() {
    // Unlocking Styles part
    const styles = {
        backgroundColor: "#892638",
    }

    return (
        <div style={styles}>
            <img src="" alt="" />
            <h2>This is a React's Base-1</h2>
            <h4>Components creating Base</h4>
            <button>Unlock this React level now</button>
            <h2>{c1}: Using Variable{7 * 9 - 62}</h2>
        </div>
    );
}

export default Course;