import "./computerFan.css";

export default function ComputerFan() {
  return (
    <div className="fan">
      <div className="loader outer">
        <span></span>
        <span></span>
      </div>
      <div className="blades">
        <div className="blade"></div>
        <div className="blade"></div>
        <div className="blade"></div>
        <div className="blade"></div>
        <div className="blade"></div>
        <div className="blade"></div>
      </div>
    </div>
  );
}
