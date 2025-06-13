// src/pages/pro.jsx
import { useNavigate } from 'react-router-dom';

function Pro() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-10">
      <h1 className="text-blue-600 text-3xl font-bold">This is the professional page 👩‍💼</h1>
      <button
        onClick={() => navigate('/cute')}
        className="mt-4 bg-pink-400 px-4 py-2 text-white rounded-lg hover:scale-105 transition"
      >
        Click to be cute
      </button>
    </div>
  );
}

export default Pro;
