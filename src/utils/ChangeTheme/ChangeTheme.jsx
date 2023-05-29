import { useState } from "react";

const ChangeTheme = () => {
    const [theme, setTheme] = useState(false) // -> false: Light Mode

    return (
        <div className="hidden xl:inline-block">
            <button onClick={() => setTheme(!theme)} className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <i className={`ri-${theme ? "sun":"moon"}-line change-theme`} id="theme-button"></i>
            </button>
        </div>
    );
};

export default ChangeTheme;
