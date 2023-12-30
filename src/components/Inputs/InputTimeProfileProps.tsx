import React, { useState } from "react"
// import useClickOutside from 'react-click-outside'

interface Schedule {
  [day: string]: string[] | "closed"
}

const timeOptions: string[] = [
  "12:00",
  "12:30",
  "1:00",
  "1:30",
  "2:00",
  "2:30",
  "3:00",
  "3:30",
  "4:00",
  "4:30",
  "5:00",
  "5:30",
  "6:00",
  "6:30",
  "7:00",
  "7:30",
  "8:00",
  "8:30",
  "9:00",
  "9:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  // ... Add more time options as needed
]

const InputTimeProfileProps: React.FC<any> = ({ isEdit }: { isEdit: false }) => {
  const [schedule, setSchedule] = useState<Schedule>({
    monday: ["9:00", "5:00"],
    tuesday: ["9:00", "5:00"],
    wednesday: ["9:00", "5:00"],
    thursday: ["9:00", "5:00"],
    friday: ["9:00", "5:00"],
    saturday: ["9:00", "5:00"],
    sunday: "closed",
  })
  //   const initialSchedule: Schedule = {};
  //   [
  //     "monday",
  //     "tuesday",
  //     "wednesday",
  //     "thursday",
  //     "friday",
  //     "saturday",
  //     "sunday",
  //   ].forEach((day) => {
  //     initialSchedule[day] = "closed";
  //   });
  //   return initialSchedule;
  // });

  const handleCheckboxChange = (day: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSchedule(prevSchedule => ({ ...prevSchedule, [day]: ["", ""] }))
    } else {
      const { [day]: _, ...rest } = schedule
      setSchedule({ ...rest, [day]: "closed" })
    }
  }

  const handleStartTimeChange = (day: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const startTime = e.target.value
    setSchedule(prevSchedule => ({
      ...prevSchedule,
      [day]: [startTime, prevSchedule[day] ? prevSchedule[day][1] : ""],
    }))
  }

  const handleEndTimeChange = (day: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const endTime = e.target.value
    setSchedule(prevSchedule => ({
      ...prevSchedule,
      [day]: [prevSchedule[day] ? prevSchedule[day][0] : "", endTime],
    }))
  }

  return (
    <div
      className="left-0 top-12 p-2 w-full rounded-md border-2 border-primary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex={-1}
    >
      <div className="py-1" role="none">
        {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map(day => (
          <div
            key={day}
            className={`my-2  border  p-2 rounded-md drop-shadow-sm grid ${
              schedule[day] === "closed" ? "grid-cols-2" : "grid-cols-3"
            }`}
          >
            <div className="me-2 flex items-center">
              <input
                className="w-4 h-4 me-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                type="checkbox"
                id={day}
                name={day}
                value={day}
                disabled={!isEdit}
                onChange={handleCheckboxChange(day)}
                checked={schedule[day] !== "closed"}
              />
              <label htmlFor={day}>{day.charAt(0).toUpperCase() + day.slice(1)}</label>
            </div>
            {schedule[day] === "closed" ? (
              <div className="w-full flex justify-end">
                <div className="bg-theme-color-1 text-secondary p-1 px-2 text-sm border-2 border-primary w-fit rounded-full">
                  Closed
                </div>
              </div>
            ) : (
              <>
                {/* // <div className="w-full flex"> */}
                <div className="w-full px-2">
                  <div className="relative">
                    <select
                      className="w-full border-b bg-transparent border-primary focus:outline-none focus:ring-transparent"
                      value={schedule[day] ? schedule[day][0] : ""}
                      onChange={(e: any) => handleStartTimeChange(day)(e)}
                      disabled={!isEdit}
                    >
                      <option value="" disabled>
                        Start Time
                      </option>
                      {timeOptions.map((time: string, index: number) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    <div className="absolute top-0 right-0">AM</div>
                  </div>
                </div>
                <div className="w-full px-2">
                  <div className="relative">
                    <select
                      className="w-full border-b bg-transparent border-primary focus:outline-none focus:ring-transparent"
                      value={schedule[day] ? schedule[day][1] : ""}
                      onChange={(e: any) => handleEndTimeChange(day)(e)}
                      disabled={!isEdit}
                    >
                      <option value="" disabled>
                        End Time
                      </option>
                      {timeOptions.map((time: string, index: number) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    <div className="absolute top-0 right-0">PM</div>
                  </div>
                </div>
                {/* // </div> */}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default InputTimeProfileProps
