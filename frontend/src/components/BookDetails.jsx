import { useLocation, useNavigate } from 'react-router-dom';

const BookDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const book = location.state?.book;

    if (!book) {
        return <div className="text-center text-red-500 text-xl font-semibold">No Book Data Found</div>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">{book.title}</h2>
                <p className="text-gray-700"><strong>Author:</strong> {book.author}</p>
                <p className="text-gray-700"><strong>Genre:</strong> {book.genre}</p>
                <p className="text-gray-700"><strong>Year:</strong> {book.year}</p>
                <p className="text-gray-700"><strong>Description:</strong> {book.description}</p>
                <button 
                    onClick={() => navigate(-1)}
                    className="mt-4 w-full bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300"
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default BookDetails;
