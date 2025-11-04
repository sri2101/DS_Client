export default function TimeSelect({ selectedTime, setSelectedTime, timeOptions }) {
  return (
    <select
      value={selectedTime}
      onChange={(e) => setSelectedTime(e.target.value)}
      className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm text-gray-700 appearance-none overflow-y-auto"
      size={1} 
    >
      {timeOptions.map((time, idx) => (
        <option key={idx} value={time}>
          {time}
        </option>
      ))}
    </select>
  );
}
