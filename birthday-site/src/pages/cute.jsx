// src/pages/cute.jsx
import { useNavigate } from 'react-router-dom';

function Cute() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-10">
      <h1 className="text-pink-500 text-3xl font-bold">This is the cute page 🐰</h1>
      <button
        onClick={() => navigate('/pro')}
        className="mt-4 bg-blue-500 px-4 py-2 text-white rounded-lg hover:scale-105 transition"
      >
        Click to be professional
      </button>
    </div>
  );
}

export default Cute;
