import { useRef, useState } from "react";

const App = () => {
  const [yearsOld, setYearsOld] = useState(null);
  const calendarRef = useRef(null);
  const calculateAge = () => {
    const date = new Date(calendarRef.current.value);
    const today = new Date();
    const age = today.getFullYear() - date.getFullYear();
    setYearsOld(age);
  };
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      <div className="flex w-fit flex-col gap-y-4 text-center justify-center">
        <h1 className="text-3xl font-semibold">Age Calculator</h1>
        <p>Enter your date of birth</p>
        <input type="date" ref={calendarRef} />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={calculateAge}
        >
          Calculate Age
        </button>
        {yearsOld && <h3 className="text-xl">You are {yearsOld} years old</h3>}
      </div>
    </div>
  );
};

export default App;
