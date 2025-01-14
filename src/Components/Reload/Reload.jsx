
const Reload = () => {
  const handleReload = () => {
    window.location.reload(); // Reloads the entire page
  };

  return (
    <button
      onClick={handleReload}
      className="bg-[#58ade9fa] text-white px-4 py-2 rounded mt-16 font-bold"
    >
      Log Out
    </button>
  );
};

export default Reload;
