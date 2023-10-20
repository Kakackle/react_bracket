export default function Pair({pair}){
    return (
    <div className="pair">
        <p className="pair-name">{pair[0]}</p>
        <p className="pair-name">{pair[1]}</p>
    </div>
    );
}