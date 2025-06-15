// src/components/Preloader.jsx
import './Preloader.css';

export default function Preloader() {
    return (
        <div className="preloader">
            <div>Loading...</div>
            <div className="preLoader-container">
                <div className="box">📦</div>
                <div className="box">📦</div>
                <div className="box">📦</div>
                <div className="box">📦</div>
                <div className="box">📦</div>
            </div>
        </div>
    );
}
