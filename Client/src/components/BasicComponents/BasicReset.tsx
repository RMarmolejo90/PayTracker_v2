const BasicReset: React.FC = () => {

    // Update with V2 -
  // write a Confirmation Prompt that asks if you are sure. the Yes button should clear local storage and refresh the page

  const clear = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className='py-12'>
      <button onClick={clear} className="bg-slate-600 p-1 rounded-md font-semibold text-sm text-white">
        Reset All
      </button>
    </div>
  );
};

export default BasicReset;
