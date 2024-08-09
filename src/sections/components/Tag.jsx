const Tag = ({ name }) => {
    return (
        <span className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
            {name}
        </span>
    );
};

export default Tag;